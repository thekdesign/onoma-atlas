import {defineStore} from 'pinia';

// 跨元件共用的搜尋／分類篩選狀態（HomeIndex 與 header 搜尋框都會用）
export const useFiltersStore = defineStore('filters', {
    state: () => ({
        searchQuery: '',
        activeFamilyKey: '',
    }),
    actions: {
        clearSearch() {
            this.searchQuery = '';
        },
    },
});
