<template>
    <div v-if="sound" class="mx-auto max-w-3xl">
        <!-- 返回 -->
        <RouterLink
            :to="{name: 'HOME_INDEX'}"
            class="mb-5 inline-flex items-center gap-1.5 rounded-full bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-ink-500 shadow-puff-sm backdrop-blur transition-colors hover:text-ink-800"
        >
            ← 回圖鑑
        </RouterLink>

        <!-- 主視覺卡 -->
        <section
            class="relative overflow-hidden rounded-5xl border border-white/70 bg-white/75 px-6 py-8 text-center shadow-puff backdrop-blur-md sm:px-10 sm:py-10"
        >
            <span
                class="pointer-events-none absolute inset-x-0 top-0 h-40 opacity-50"
                :style="{backgroundImage: `linear-gradient(180deg, ${family.gradient[0]}66, transparent)`}"
            />
            <span
                class="relative z-10 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-bold text-white shadow-puff-sm"
                :style="{backgroundImage: `linear-gradient(135deg, ${family.gradient[0]}, ${family.gradient[1]})`}"
            >
                <span>{{ family.emoji }}</span>{{ family.label }}
            </span>
            <div class="relative z-10 mt-5 text-[5.5rem] leading-none animate-floaty drop-shadow-[0_10px_18px_rgba(132,92,240,0.25)]">
                {{ sound.glyph }}
            </div>
            <h1 class="relative z-10 m-0 mt-3 font-display text-4xl font-extrabold tracking-tight text-ink-800 sm:text-5xl">
                {{ sound.concept }}
            </h1>
            <div class="relative z-10 mt-1 font-mono text-xs uppercase tracking-[0.28em] text-ink-400">{{ sound.conceptEn }}</div>
            <p class="relative z-10 mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink-600">{{ sound.hook }}</p>
        </section>

        <!-- 各國說法 -->
        <section class="mt-7">
            <h2 class="mb-4 flex items-center gap-2 font-display text-lg font-extrabold text-ink-700">
                <span>🌏</span>各國怎麼說 · 點圖示發聲
            </h2>
            <ul class="grid gap-3 sm:grid-cols-2">
                <li
                    v-for="(v, i) in sound.variants"
                    :key="v.lang + i"
                    class="flex items-center gap-3 rounded-3xl border border-white/70 bg-white/75 px-4 py-3 shadow-puff-sm backdrop-blur transition-shadow hover:shadow-puff"
                    :class="v.fav ? 'ring-2 ring-offset-2 ring-offset-transparent' : ''"
                    :style="v.fav ? {'--tw-ring-color': family.accent} : {}"
                >
                    <span class="text-3xl leading-none">{{ v.flag }}</span>
                    <div class="min-w-0 flex-1">
                        <div class="flex items-center gap-1.5">
                            <span class="truncate font-rounded text-xl font-bold leading-tight text-ink-800">{{ v.word }}</span>
                            <span
                                v-if="v.fav"
                                class="shrink-0 text-sm"
                                :style="{color: family.accent}"
                                title="特別有意思"
                            >★</span>
                        </div>
                        <div class="truncate text-xs text-ink-400">
                            {{ v.country }}<template v-if="v.roman"> · <span class="font-mono">{{ v.roman }}</span></template>
                        </div>
                    </div>
                    <SpeakButton
                        :word="v.word"
                        :lang="v.lang"
                        :speak-key="`detail-${sound.id}-${i}`"
                        size="lg"
                        :color1="family.gradient[0]"
                        :color2="family.gradient[1]"
                    />
                </li>
            </ul>
        </section>

        <!-- 冷知識 -->
        <section class="mt-7 space-y-4">
            <div
                v-if="sound.funFact"
                class="rounded-4xl border border-sun-200 bg-sun-100/70 px-5 py-4 shadow-puff-sm"
            >
                <div class="mb-1 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-sun-700">
                    <span>💡</span>冷知識
                </div>
                <p class="m-0 text-sm leading-relaxed text-ink-700">{{ sound.funFact }}</p>
            </div>
            <div class="rounded-4xl border border-white/70 bg-white/70 px-5 py-5 shadow-puff-sm backdrop-blur">
                <div class="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-lilac-600">
                    <span>📖</span>聲音背後
                </div>
                <p class="m-0 whitespace-pre-line text-sm leading-loose text-ink-600">{{ sound.trivia }}</p>
            </div>
        </section>

        <!-- 上一個 / 下一個 -->
        <nav class="mt-9 flex items-stretch gap-3">
            <RouterLink
                v-if="prev"
                :to="{name: 'SOUND_DETAIL', params: {soundId: prev.id}}"
                class="group flex flex-1 items-center gap-2.5 rounded-3xl border border-white/70 bg-white/65 px-4 py-3 text-left shadow-puff-sm backdrop-blur transition-shadow hover:shadow-puff"
            >
                <span class="text-2xl">{{ prev.glyph }}</span>
                <span class="min-w-0">
                    <span class="block text-[0.62rem] uppercase tracking-wide text-ink-400">← 上一個</span>
                    <span class="block truncate font-display text-sm font-bold text-ink-700">{{ prev.concept }}</span>
                </span>
            </RouterLink>
            <RouterLink
                v-if="next"
                :to="{name: 'SOUND_DETAIL', params: {soundId: next.id}}"
                class="group flex flex-1 items-center justify-end gap-2.5 rounded-3xl border border-white/70 bg-white/65 px-4 py-3 text-right shadow-puff-sm backdrop-blur transition-shadow hover:shadow-puff"
            >
                <span class="min-w-0">
                    <span class="block text-[0.62rem] uppercase tracking-wide text-ink-400">下一個 →</span>
                    <span class="block truncate font-display text-sm font-bold text-ink-700">{{ next.concept }}</span>
                </span>
                <span class="text-2xl">{{ next.glyph }}</span>
            </RouterLink>
        </nav>
    </div>

    <div v-else class="py-20 text-center">
        <div class="text-5xl">🫧</div>
        <p class="mt-3 text-ink-500">找不到這個聲音…</p>
        <RouterLink :to="{name: 'HOME_INDEX'}" class="mt-4 inline-block text-sm font-bold text-candy-600">← 回圖鑑</RouterLink>
    </div>
</template>

<script>
import {computed} from 'vue';
import {useRoute} from 'vue-router';
import {useHead} from '@unhead/vue';
import {useSoundStore} from 'stores/sound/sound';
import {familyMap} from 'maps/common/Family';
import SpeakButton from 'components/common/SpeakButton.vue';

export default {
    name: 'SoundDetail',
    components: {SpeakButton},
    setup() {
        const route = useRoute();
        const soundStore = useSoundStore();

        const sound = computed(() => soundStore.getById(route.params.soundId));
        const family = computed(() => (sound.value ? familyMap.get(sound.value.familyKey) : familyMap.get('ANIMAL')));

        const index = computed(() => soundStore.list.findIndex((s) => s.id === Number(route.params.soundId)));
        const prev = computed(() => (index.value > 0 ? soundStore.list[index.value - 1] : undefined));
        const next = computed(() => (index.value >= 0 && index.value < soundStore.list.length - 1
            ? soundStore.list[index.value + 1] : undefined));

        useHead(computed(() => {
            if (!sound.value) return {title: '找不到聲音 · Onoma'};
            const langs = (sound.value.variants || []).map((v) => v.word).join('、');
            return {
                title: `${sound.value.concept}（${sound.value.conceptEn}）各國怎麼唸 · Onoma`,
                meta: [{name: 'description', content: `${sound.value.concept}在各國的擬聲詞：${langs}。${sound.value.funFact || ''}`}],
            };
        }));

        return {sound, family, prev, next};
    },
};
</script>
