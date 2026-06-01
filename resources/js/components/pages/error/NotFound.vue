<template>
    <div class="px-4 py-20 text-center">
        <div class="mb-4 text-7xl animate-floaty">🫧</div>
        <h1 class="m-0 mb-2 font-display text-3xl font-extrabold text-ink-800">
            404 · 這個聲音飄走了
        </h1>
        <p class="m-0 mb-6 text-ink-500">
            這頁沒有對應的擬聲詞，回圖鑑聽聽其他聲音吧。
        </p>
        <RouterLink
            :to="{name: 'HOME_INDEX'}"
            class="inline-block rounded-full px-6 py-2.5 text-sm font-bold text-white shadow-candy transition-transform hover:-translate-y-0.5"
            style="background-image: linear-gradient(135deg, #FF8FC8, #B49AFF);"
        >
            ← 回到擬聲詞總覽
        </RouterLink>
    </div>
</template>

<script>
export default {
    name: 'NotFound',
};
</script>
