<template>
    <div>
        <!-- 刊頭 Hero -->
        <header class="mb-10 text-center">
            <div class="mb-4 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-1.5 text-[0.7rem] font-semibold tracking-wide text-ink-500 shadow-puff-sm backdrop-blur">
                <span class="animate-wobble">🫧</span> 點任何一張卡，聽世界怎麼發出同一個聲音
            </div>
            <h1 class="m-0 font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-ink-800 sm:text-[3.4rem]">
                <span class="bg-clip-text text-transparent" style="background-image: linear-gradient(120deg, #FF6BB5, #9B78FF 55%, #4FB0FF);">
                    世界擬聲詞圖鑑
                </span>
            </h1>
            <p class="mx-auto mt-3 max-w-xl text-sm leading-loose text-ink-500 sm:text-base">
                狗叫在台灣是「汪汪」、在日本是「ワンワン」、在韓國是「멍멍」。
                同一個聲音，每個語言都聽成不一樣的字——翻開卡片，用各國的嘴巴唸給你聽。
            </p>

            <!-- 統計膠囊 -->
            <div class="mt-6 flex flex-wrap items-center justify-center gap-2.5">
                <div
                    v-for="stat in stats"
                    :key="stat.label"
                    class="flex items-baseline gap-1.5 rounded-full border border-white/70 bg-white/70 px-4 py-2 shadow-puff-sm backdrop-blur"
                >
                    <span class="font-display text-xl font-extrabold" :style="{color: stat.color}">{{ stat.value }}</span>
                    <span class="text-xs text-ink-500">{{ stat.label }}</span>
                </div>
            </div>
        </header>

        <!-- 分類膠囊 -->
        <section class="mb-8 flex flex-wrap items-center justify-center gap-2">
            <button
                type="button"
                class="rounded-full border px-4 py-2 text-sm font-bold transition-all"
                :class="filtersStore.activeFamilyKey === ''
                    ? 'border-transparent text-white shadow-candy'
                    : 'border-white/70 bg-white/60 text-ink-500 hover:bg-white'"
                :style="filtersStore.activeFamilyKey === '' ? {backgroundImage: 'linear-gradient(135deg, #FF8FC8, #B49AFF)'} : {}"
                @click="filtersStore.activeFamilyKey = ''"
            >
                ✨ 全部
            </button>
            <button
                v-for="fam in familyList"
                :key="fam.key"
                type="button"
                class="inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-bold transition-all"
                :class="filtersStore.activeFamilyKey === fam.key
                    ? 'border-transparent text-white shadow-candy'
                    : 'border-white/70 bg-white/60 text-ink-500 hover:bg-white'"
                :style="filtersStore.activeFamilyKey === fam.key
                    ? {backgroundImage: `linear-gradient(135deg, ${fam.gradient[0]}, ${fam.gradient[1]})`} : {}"
                @click="filtersStore.activeFamilyKey = fam.key"
            >
                <span>{{ fam.emoji }}</span>{{ fam.shortLabel }}
            </button>
        </section>

        <!-- 搜尋結果提示 -->
        <Transition name="fade">
            <p v-if="filtersStore.searchQuery" class="mb-6 text-center text-sm text-ink-500">
                搜尋「<strong class="text-candy-600">{{ filtersStore.searchQuery }}</strong>」：找到
                <strong class="text-candy-600">{{ matchCount }}</strong> 個聲音
                <button type="button" class="ml-2 rounded-full bg-white/70 px-2.5 py-0.5 text-xs text-ink-500 hover:text-ink-800" @click="filtersStore.clearSearch()">
                    清除 ✕
                </button>
            </p>
        </Transition>

        <p v-if="filtersStore.searchQuery && !displayFamilies.length" class="my-16 text-center text-sm text-ink-400">
            找不到「<strong class="text-ink-600">{{ filtersStore.searchQuery }}</strong>」相關的聲音，換個關鍵字試試 🫧
        </p>

        <!-- 各科卡片區 -->
        <section
            v-for="fam in displayFamilies"
            :id="`family-${fam.key.toLowerCase()}`"
            :key="fam.key"
            class="mb-12 scroll-mt-24"
        >
            <header class="mb-5 flex items-center gap-3">
                <span class="grid h-11 w-11 place-items-center rounded-2xl text-xl shadow-puff-sm"
                      :style="{backgroundImage: `linear-gradient(135deg, ${fam.gradient[0]}, ${fam.gradient[1]})`}">
                    {{ fam.emoji }}
                </span>
                <div class="min-w-0">
                    <h2 class="m-0 font-display text-xl font-extrabold leading-tight text-ink-800 sm:text-2xl">{{ fam.label }}</h2>
                    <span class="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-ink-400">{{ fam.latin }} · {{ String(fam.sounds.length).padStart(2, '0') }} 個</span>
                </div>
                <span class="ml-2 hidden h-px flex-1 sm:block" :style="{background: `linear-gradient(90deg, ${fam.accent}55, transparent)`}" />
            </header>
            <p class="-mt-1 mb-5 max-w-2xl text-sm leading-relaxed text-ink-500">{{ fam.blurb }}</p>

            <div class="grid gap-5 [grid-template-columns:repeat(auto-fill,minmax(244px,1fr))]">
                <SoundCard v-for="s in fam.sounds" :key="s.id" :sound="s" />
            </div>
        </section>
    </div>
</template>

<script>
import {computed} from 'vue';
import {useHead} from '@unhead/vue';
import {useSoundStore} from 'stores/sound/sound';
import {useFiltersStore} from 'stores/ui/filters';
import {familyList} from 'maps/common/Family';
import SoundCard from 'components/common/SoundCard.vue';

export default {
    name: 'HomeIndex',
    components: {SoundCard},
    setup() {
        const soundStore = useSoundStore();
        const filtersStore = useFiltersStore();

        useHead({
            title: 'Onoma · 世界擬聲詞圖鑑 — 同一個聲音，各國怎麼唸？',
        });

        const stats = computed(() => [
            {value: soundStore.list.length, label: '個聲音', color: '#FF6BB5'},
            {value: soundStore.languageCount, label: '國語言', color: '#9B78FF'},
            {value: familyList.length, label: '個分科', color: '#4FB0FF'},
        ]);

        const matchesSearch = (s) => {
            const q = filtersStore.searchQuery.trim().toLowerCase();
            if (!q) return true;
            const variantText = (s.variants || [])
                .map((v) => `${v.word} ${v.roman || ''} ${v.country}`).join(' ');
            const haystack = [s.concept, s.conceptEn, s.hook, s.funFact, s.trivia, variantText]
                .filter(Boolean).join(' ').toLowerCase();
            return haystack.includes(q);
        };

        const matchCount = computed(() => soundStore.list.filter(matchesSearch).length);

        const displayFamilies = computed(() => {
            const filtered = soundStore.list.filter(matchesSearch);
            const grouped = filtered.reduce((acc, s) => {
                (acc[s.familyKey] = acc[s.familyKey] || []).push(s);
                return acc;
            }, {});
            return familyList
                .filter((f) => filtersStore.activeFamilyKey === '' || filtersStore.activeFamilyKey === f.key)
                .map((f) => ({...f, sounds: grouped[f.key] || []}))
                .filter((f) => f.sounds.length > 0);
        });

        return {filtersStore, familyList, stats, matchCount, displayFamilies};
    },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 200ms ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
