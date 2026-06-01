/* eslint-disable max-len */
/**
 * 自然天象科 · Natura
 * 雷、雨、風、水——這些沒有「嘴巴」的聲音，最考驗一個語言的想像力。
 * 收錄各國怎麼把天氣與大自然翻譯成文字。
 */
export const nature = [
    {
        id: 6,
        number: '06',
        familyKey: 'NATURE',
        concept: '打雷',
        conceptEn: 'Thunder',
        glyph: '⚡',
        hook: '天空滾過的那一聲，每個語言都拉得很長。',
        funFact: '日語用「ゴロゴロ（goro goro）」形容遠雷滾動，同一個字也能用來形容貓咪打呼或肚子咕嚕——全靠語境分辨。',
        trivia: '打雷的擬聲詞幾乎都靠連續的濁音與滾動感來營造「轟隆」的綿延：華語「轟隆隆」、韓語「우르릉（ureureung）」、日語「ゴロゴロ」。英語反而偏好單發的爆裂感「rumble / boom」。這反映了各語言對「低頻長音」處理方式的差異。',
        variants: [
            {flag: '🇹🇼', country: '台灣', lang: 'zh-TW', word: '轟隆隆', roman: 'hōng lóng lóng'},
            {flag: '🇯🇵', country: '日本', lang: 'ja-JP', word: 'ゴロゴロ', roman: 'goro goro', fav: true},
            {flag: '🇺🇸', country: '美國', lang: 'en-US', word: 'Rumble', roman: 'rum-bul'},
            {flag: '🇰🇷', country: '韓國', lang: 'ko-KR', word: '우르릉', roman: 'ureureung'},
        ],
    },
    {
        id: 7,
        number: '07',
        familyKey: 'NATURE',
        concept: '下雨',
        conceptEn: 'Rain',
        glyph: '🌧️',
        hook: '小雨淅瀝、大雨嘩啦，連雨量都藏在擬聲詞裡。',
        funFact: '日語把雨分得很細：細雨是「しとしと（shito shito）」，傾盆大雨是「ザーザー（zā zā）」，光聽聲音就知道要不要帶傘。',
        trivia: '雨聲是日語擬聲詞最自豪的領域之一，它能用不同的字精準區分雨的大小：しとしと（綿綿細雨）、ぱらぱら（零星）、ザーザー（傾盆）。華語的「淅瀝淅瀝」對「嘩啦啦」也有類似的層次。多數語言則用重複的塞音模擬雨滴打地（法語 plic ploc、韓語 주룩주룩）。',
        variants: [
            {flag: '🇹🇼', country: '台灣', lang: 'zh-TW', word: '嘩啦啦', roman: 'huā lā lā'},
            {flag: '🇯🇵', country: '日本', lang: 'ja-JP', word: 'ザーザー', roman: 'zā zā', fav: true},
            {flag: '🇺🇸', country: '美國', lang: 'en-US', word: 'Pitter-patter', roman: ''},
            {flag: '🇰🇷', country: '韓國', lang: 'ko-KR', word: '주룩주룩', roman: 'juruk juruk'},
            {flag: '🇫🇷', country: '法國', lang: 'fr-FR', word: 'Plic ploc', roman: 'plik plok'},
        ],
    },
    {
        id: 8,
        number: '08',
        familyKey: 'NATURE',
        concept: '水滴',
        conceptEn: 'Water Drop',
        glyph: '💧',
        hook: '半夜那一聲「滴答」，全世界都聽過。',
        funFact: '韓語的「똑똑（ttok ttok）」同時是水滴聲和敲門聲——聲音太像了，乾脆共用一個字。',
        trivia: '單顆水滴的擬聲詞偏好清脆的塞音收尾：華語「滴答」、日語「ポタポタ（pota pota）」、韓語「똑똑」。有趣的是，許多語言的「水滴」與「敲門」共用同一組音，因為兩者都是短促、清亮的單點聲響。',
        variants: [
            {flag: '🇹🇼', country: '台灣', lang: 'zh-TW', word: '滴答', roman: 'dī dā'},
            {flag: '🇯🇵', country: '日本', lang: 'ja-JP', word: 'ポタポタ', roman: 'pota pota', fav: true},
            {flag: '🇺🇸', country: '美國', lang: 'en-US', word: 'Drip drop', roman: ''},
            {flag: '🇰🇷', country: '韓國', lang: 'ko-KR', word: '똑똑', roman: 'ttok ttok'},
        ],
    },
    {
        id: 9,
        number: '09',
        familyKey: 'NATURE',
        concept: '颳風',
        conceptEn: 'Wind',
        glyph: '🌬️',
        hook: '看不見的風，靠氣音「呼——」吹進每個語言。',
        funFact: '幾乎所有語言都用帶氣音的「h / hy / wh」來模擬風聲，因為那最貼近空氣摩擦的真實聽感。',
        trivia: '風是最「無形」的聲音，各語言不約而同地用送氣音來捕捉它：華語「呼呼」、日語「ヒューヒュー（hyū hyū）」、英語「whoosh」。韓語的「쌩쌩（ssaeng ssaeng）」則多了一股強風呼嘯而過的速度感。',
        variants: [
            {flag: '🇹🇼', country: '台灣', lang: 'zh-TW', word: '呼呼', roman: 'hū hū'},
            {flag: '🇯🇵', country: '日本', lang: 'ja-JP', word: 'ヒューヒュー', roman: 'hyū hyū', fav: true},
            {flag: '🇺🇸', country: '美國', lang: 'en-US', word: 'Whoosh', roman: 'wuush'},
            {flag: '🇰🇷', country: '韓國', lang: 'ko-KR', word: '쌩쌩', roman: 'ssaeng ssaeng'},
        ],
    },
    {
        id: 10,
        number: '10',
        familyKey: 'NATURE',
        concept: '海浪',
        conceptEn: 'Waves',
        glyph: '🌊',
        hook: '拍上岸的那一下，是「嘩啦」還是「zabūn」？',
        funFact: '日語的「ザブーン（zabūn）」把一道大浪整個拍下來的氣勢都收進去了，是擬聲詞裡很有畫面感的一個。',
        trivia: '海浪同時包含「沖刷」與「拍擊」兩個動作，各語言常各取一面：英語「splash」抓拍擊、華語「嘩啦」抓沖刷、日語「ザブーン」則一次涵蓋整道浪的起落，韓語「철썩（cheolsseok）」強調浪拍上礁石的那一聲脆響。',
        variants: [
            {flag: '🇹🇼', country: '台灣', lang: 'zh-TW', word: '嘩啦', roman: 'huā lā'},
            {flag: '🇯🇵', country: '日本', lang: 'ja-JP', word: 'ザブーン', roman: 'zabūn', fav: true},
            {flag: '🇺🇸', country: '美國', lang: 'en-US', word: 'Splash', roman: 'splash'},
            {flag: '🇰🇷', country: '韓國', lang: 'ko-KR', word: '철썩', roman: 'cheolsseok'},
        ],
    },
];
