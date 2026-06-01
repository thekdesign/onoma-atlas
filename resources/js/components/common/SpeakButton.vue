<template>
    <button
        type="button"
        class="relative inline-flex shrink-0 items-center justify-center rounded-full transition-all duration-200 active:scale-90"
        :class="[sizeClass, playing
            ? 'text-white shadow-puff-sm'
            : 'text-white/95 shadow-candy hover:-translate-y-0.5']"
        :style="{backgroundImage: `linear-gradient(135deg, ${color1}, ${color2})`}"
        :aria-label="playing ? `停止播放 ${word}` : `用${langLabel}發音：${word}`"
        @click.stop="onClick"
    >
        <!-- 播放時的脈衝光環 -->
        <span
            v-if="playing"
            class="pointer-events-none absolute inset-0 rounded-full animate-pulse-ring"
            :style="{backgroundImage: `linear-gradient(135deg, ${color1}, ${color2})`}"
        />
        <span class="relative leading-none" :class="iconClass">{{ playing ? '◼' : '▶' }}</span>
    </button>
</template>

<script>
import {computed} from 'vue';
import {useSpeech} from 'composables/useSpeech';

const LANG_LABEL = {
    'zh-TW': '中文', 'ja-JP': '日語', 'en-US': '英語', 'ko-KR': '韓語',
    'fr-FR': '法語', 'de-DE': '德語', 'es-ES': '西語', 'it-IT': '義語',
    'ru-RU': '俄語', 'th-TH': '泰語',
};

export default {
    name: 'SpeakButton',
    props: {
        word: {type: String, required: true},
        lang: {type: String, required: true},
        speakKey: {type: String, required: true},
        size: {type: String, default: 'md'}, // sm | md | lg
        color1: {type: String, default: '#FF8FC8'},
        color2: {type: String, default: '#B49AFF'},
    },
    setup(props) {
        const {speak, speakingKey} = useSpeech();

        const playing = computed(() => speakingKey.value === props.speakKey);
        const langLabel = computed(() => LANG_LABEL[props.lang] || '當地語言');

        const sizeClass = computed(() => ({
            sm: 'h-8 w-8',
            md: 'h-10 w-10',
            lg: 'h-14 w-14',
        }[props.size]));

        const iconClass = computed(() => ({
            sm: 'text-[0.6rem] pl-px',
            md: 'text-xs pl-px',
            lg: 'text-base pl-0.5',
        }[props.size]));

        const onClick = () => {
            speak({text: props.word, lang: props.lang, key: props.speakKey});
        };

        return {playing, langLabel, sizeClass, iconClass, onClick};
    },
};
</script>
