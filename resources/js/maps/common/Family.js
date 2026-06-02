import {Family} from 'enums/common/Family';
import {EnumMap} from 'libs/EnumMap';

// 各「科」的顯示資訊：偽拉丁學名 + emoji + 主題色（棉花糖色票）+ 一句導語 + 漸層
export const familyMap = new EnumMap(Family, {
    ANIMAL: {
        label: '動物叫聲科',
        latin: 'Animalia',
        shortLabel: '動物',
        emoji: '🐾',
        accent: '#43C589',
        gradient: ['#A3E9C8', '#6FD9A8'],
        blurb: '全世界的狗都汪汪叫，但每個語言「聽到」的卻不一樣。看同一種叫聲在各國耳裡長成不同的字。',
    },
    NATURE: {
        label: '自然天象科',
        latin: 'Natura',
        shortLabel: '自然',
        emoji: '🌧️',
        accent: '#4FB0FF',
        gradient: ['#A6DBFF', '#76C6FF'],
        blurb: '雷、雨、風、水——這些沒有「嘴巴」的聲音，最考驗一個語言的想像力。',
    },
    HUMAN: {
        label: '人聲情緒科',
        latin: 'Humana',
        shortLabel: '人聲',
        emoji: '😆',
        accent: '#FF6BB5',
        gradient: ['#FFB8DC', '#FF8FC8'],
        blurb: '打噴嚏、大笑、大哭、親一下——人類身體發出的聲音最容易跨越語言，卻仍各寫各的。',
    },
    THING: {
        label: '物件動作科',
        latin: 'Res',
        shortLabel: '物件',
        emoji: '🔔',
        accent: '#9B78FF',
        gradient: ['#CDBCFF', '#B49AFF'],
        blurb: '敲門、鈴響、爆炸、鼓掌——日常物件發出的聲音，是漫畫狀聲字的主場。',
    },
    REACTION: {
        label: '感嘆反應科',
        latin: 'Reactio',
        shortLabel: '反應',
        emoji: '💢',
        accent: '#F2683E',
        gradient: ['#FFB570', '#FF8A6B'],
        blurb: '燙到、喊痛、嚇一跳、覺得噁心——這些下意識脫口而出的反應詞，最能看出語言怎麼「規定」我們的本能。',
    },
});

// familyList：給 filter chips / section headers / sidebar 索引用
export const familyList = familyMap.entries()
    .map(([enumValue, value]) => ({
        key: enumValue.key,
        ...value,
    }));
