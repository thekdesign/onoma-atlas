import {defineStore} from 'pinia';
import * as soundApi from 'apis/sound/sound';

export const useSoundStore = defineStore('sound', {
    state: () => ({
        list: [],
    }),
    getters: {
        getById: (state) => (id) => state.list.find((s) => s.id === Number(id)),
        listByFamily: (state) => state.list.reduce((acc, s) => {
            (acc[s.familyKey] = acc[s.familyKey] || []).push(s);
            return acc;
        }, {}),
        // 收錄語言數：所有 variants 不重複的 lang 數
        languageCount: (state) => {
            const set = new Set();
            state.list.forEach((s) => (s.variants || []).forEach((v) => set.add(v.lang)));
            return set.size;
        },
    },
    actions: {
        async requestGetSoundList() {
            this.list = await soundApi.getSoundList();
        },
    },
});
