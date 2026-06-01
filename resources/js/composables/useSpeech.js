/**
 * useSpeech — 封裝瀏覽器內建的 Web Speech API（SpeechSynthesis）。
 *
 * 為什麼用 Web Speech 而不打雲端 TTS：本站是純前端 SSG、無後端，雲端 API key 不能放前端。
 * Web Speech 免費、零後端、且能切換各國語言的 voice 來唸出該國擬聲詞（用日文 voice 唸「ワンワン」、
 * 韓文 voice 唸「멍멍」），完全符合主題。
 *
 * 狀態是「模組層級的單例」：全站同一時間只播一個聲音，任何卡片都能讀到目前在播哪一個（speakingKey）。
 *
 * SSR 注意：所有 window / speechSynthesis 存取都先 guard isBrowser，prerender 時不會爆。
 */
import {ref, computed, readonly} from 'vue';

const isBrowser = typeof window !== 'undefined' && typeof window.speechSynthesis !== 'undefined';

// ── 模組層級共享狀態（單例）─────────────────────────────
const supported = ref(isBrowser);
const voices = ref([]);
const speakingKey = ref(null); // 目前正在播放的 variant key（null = 沒在播）
let voicesLoaded = false;

const loadVoices = () => {
    if (!isBrowser) return;
    const list = window.speechSynthesis.getVoices();
    if (list && list.length) {
        voices.value = list;
        voicesLoaded = true;
    }
};

// voices 在多數瀏覽器是非同步載入，要監聽 onvoiceschanged
const initVoices = () => {
    if (!isBrowser || voicesLoaded) return;
    loadVoices();
    if (!voicesLoaded) {
        window.speechSynthesis.addEventListener('voiceschanged', loadVoices, {once: false});
    }
};

/**
 * 依語言碼挑最適合的 voice：
 *   1. 完全相符（ja-JP === ja-JP）
 *   2. 語言前綴相符（ja-JP 對到任何 ja-*）
 *   3. 找不到回 null（交給瀏覽器預設 voice）
 */
const pickVoice = (lang) => {
    if (!lang || !voices.value.length) return null;
    const norm = lang.toLowerCase();
    const prefix = norm.split('-')[0];
    return (
        voices.value.find((v) => v.lang && v.lang.toLowerCase() === norm)
        || voices.value.find((v) => v.lang && v.lang.toLowerCase().startsWith(`${prefix}-`))
        || voices.value.find((v) => v.lang && v.lang.toLowerCase() === prefix)
        || null
    );
};

const stop = () => {
    if (!isBrowser) return;
    window.speechSynthesis.cancel();
    speakingKey.value = null;
};

/**
 * 播放一段文字。
 * @param {object} opts
 * @param {string} opts.text  要唸的字（擬聲詞原文）
 * @param {string} opts.lang  語言碼（ja-JP / ko-KR / en-US …）
 * @param {string} opts.key   這個 variant 的唯一識別（給 UI 標示哪個在播）
 * @param {number} [opts.rate]  語速（預設 0.85，擬聲詞慢一點比較聽得清楚）
 * @param {number} [opts.pitch] 音高（預設 1.05，稍微上揚增添可愛感）
 */
const speak = ({text, lang, key, rate = 0.85, pitch = 1.05}) => {
    if (!isBrowser || !text) return;

    // 若點的是正在播的那一個 → 視為「停止」（toggle）
    if (speakingKey.value && speakingKey.value === key) {
        stop();
        return;
    }

    window.speechSynthesis.cancel();
    if (!voicesLoaded) loadVoices();

    const utterance = new window.SpeechSynthesisUtterance(text);
    const voice = pickVoice(lang);
    if (voice) {
        utterance.voice = voice;
        utterance.lang = voice.lang;
    } else if (lang) {
        utterance.lang = lang;
    }
    utterance.rate = rate;
    utterance.pitch = pitch;

    utterance.onstart = () => {
        speakingKey.value = key || text;
    };
    const clear = () => {
        if (speakingKey.value === (key || text)) speakingKey.value = null;
    };
    utterance.onend = clear;
    utterance.onerror = clear;

    // 部分瀏覽器（Chrome）若 cancel 後立刻 speak 偶爾無聲，補一個 microtask 再播
    window.speechSynthesis.speak(utterance);
};

/** 該語言是否有可用 voice（用來在 UI 上提示「此裝置可能無此語音」）。 */
const hasVoiceFor = (lang) => !!pickVoice(lang);

export function useSpeech() {
    initVoices();

    return {
        supported: readonly(supported),
        speakingKey: readonly(speakingKey),
        voicesReady: computed(() => voices.value.length > 0),
        speak,
        stop,
        hasVoiceFor,
        isSpeaking: (key) => speakingKey.value === key,
    };
}
