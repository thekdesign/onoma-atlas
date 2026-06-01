<template>
    <div class="group [perspective:1400px]" :style="{'--c1': family.gradient[0], '--c2': family.gradient[1], '--accent': family.accent}">
        <div
            class="relative h-[346px] w-full transition-transform duration-[600ms] [transform-style:preserve-3d]"
            :class="flipped ? '[transform:rotateY(180deg)]' : ''"
        >
            <!-- ── 正面 ─────────────────────────────── -->
            <button
                type="button"
                class="absolute inset-0 flex flex-col items-center rounded-4xl border border-white/70 bg-white/75 px-5 py-6 text-center shadow-puff backdrop-blur-md [backface-visibility:hidden] transition-shadow hover:shadow-[0_24px_60px_-18px_rgba(132,92,240,0.45)]"
                :aria-label="`${sound.concept}：翻牌看 ${sound.variants.length} 國說法`"
                @click="flipped = true"
            >
                <!-- 頂部柔光條 -->
                <span
                    class="pointer-events-none absolute inset-x-0 top-0 h-24 rounded-t-4xl opacity-60"
                    :style="{backgroundImage: `linear-gradient(180deg, ${family.gradient[0]}55, transparent)`}"
                />

                <!-- 科別膠囊 -->
                <span
                    class="relative z-10 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.68rem] font-bold tracking-wide text-white shadow-puff-sm"
                    :style="{backgroundImage: `linear-gradient(135deg, ${family.gradient[0]}, ${family.gradient[1]})`}"
                >
                    <span>{{ family.emoji }}</span>{{ family.shortLabel }}
                </span>

                <!-- 大 emoji（漂浮）-->
                <div class="relative z-10 mt-5 mb-1 text-[4.6rem] leading-none animate-floaty drop-shadow-[0_8px_14px_rgba(132,92,240,0.25)]">
                    {{ sound.glyph }}
                </div>

                <!-- 概念名 -->
                <h3 class="relative z-10 m-0 font-display text-[1.7rem] font-extrabold leading-tight text-ink-800">
                    {{ sound.concept }}
                </h3>
                <div class="relative z-10 mt-0.5 font-mono text-[0.64rem] uppercase tracking-[0.22em] text-ink-400">
                    {{ sound.conceptEn }}
                </div>

                <p class="relative z-10 mt-3 line-clamp-2 max-w-[15rem] text-xs leading-relaxed text-ink-500">
                    {{ sound.hook }}
                </p>

                <!-- 翻牌提示 -->
                <span class="relative z-10 mt-auto inline-flex items-center gap-1.5 rounded-full bg-ink-100/80 px-3.5 py-1.5 text-[0.7rem] font-semibold text-ink-600 transition-colors group-hover:bg-white">
                    <span class="text-sm" :style="{color: family.accent}">↻</span>
                    翻牌聽 {{ sound.variants.length }} 國
                </span>
            </button>

            <!-- ── 背面 ─────────────────────────────── -->
            <div
                class="absolute inset-0 flex flex-col rounded-4xl border border-white/70 bg-white/85 shadow-puff backdrop-blur-md [backface-visibility:hidden] [transform:rotateY(180deg)]"
            >
                <!-- 背面標題列（點此翻回）-->
                <button
                    type="button"
                    class="flex items-center gap-2.5 rounded-t-4xl px-4 py-3 text-left text-white"
                    :style="{backgroundImage: `linear-gradient(135deg, ${family.gradient[0]}, ${family.gradient[1]})`}"
                    aria-label="翻回正面"
                    @click="flipped = false"
                >
                    <span class="text-2xl leading-none">{{ sound.glyph }}</span>
                    <span class="min-w-0 flex-1">
                        <span class="block truncate font-display text-base font-extrabold leading-tight">{{ sound.concept }}</span>
                        <span class="block font-mono text-[0.58rem] uppercase tracking-[0.18em] opacity-80">{{ sound.variants.length }} languages</span>
                    </span>
                    <span class="grid h-7 w-7 place-items-center rounded-full bg-white/25 text-sm">↺</span>
                </button>

                <!-- 各國說法清單 -->
                <ul class="onoma-scroll flex-1 space-y-1 overflow-y-auto px-2.5 py-2.5">
                    <li
                        v-for="(v, i) in sound.variants"
                        :key="v.lang + i"
                        class="flex items-center gap-2.5 rounded-2xl px-2.5 py-1.5 transition-colors hover:bg-ink-100/70"
                    >
                        <span class="text-xl leading-none">{{ v.flag }}</span>
                        <span class="min-w-0 flex-1">
                            <span class="block truncate font-rounded text-[0.95rem] font-bold leading-tight text-ink-800">{{ v.word }}</span>
                            <span class="block truncate text-[0.62rem] text-ink-400">
                                {{ v.country }}<template v-if="v.roman"> · {{ v.roman }}</template>
                            </span>
                        </span>
                        <SpeakButton
                            :word="v.word"
                            :lang="v.lang"
                            :speak-key="`card-${sound.id}-${i}`"
                            size="sm"
                            :color1="family.gradient[0]"
                            :color2="family.gradient[1]"
                        />
                    </li>
                </ul>

                <!-- 看冷知識 -->
                <RouterLink
                    :to="{name: 'SOUND_DETAIL', params: {soundId: sound.id}}"
                    class="flex items-center justify-center gap-1.5 rounded-b-4xl border-t border-ink-100 py-2.5 text-[0.74rem] font-bold text-ink-600 transition-colors hover:text-ink-900"
                >
                    看這個聲音的冷知識
                    <span :style="{color: family.accent}">→</span>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
import {ref, computed} from 'vue';
import {familyMap} from 'maps/common/Family';
import SpeakButton from 'components/common/SpeakButton.vue';

export default {
    name: 'SoundCard',
    components: {SpeakButton},
    props: {
        sound: {type: Object, required: true},
    },
    setup(props) {
        const flipped = ref(false);
        const family = computed(() => familyMap.get(props.sound.familyKey));
        return {flipped, family};
    },
};
</script>

<style scoped>
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.onoma-scroll::-webkit-scrollbar {
    width: 6px;
}
.onoma-scroll::-webkit-scrollbar-thumb {
    background: var(--accent, #B49AFF);
    opacity: 0.4;
    border-radius: 999px;
}
</style>
