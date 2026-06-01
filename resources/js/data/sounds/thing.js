/* eslint-disable max-len */
/**
 * 物件動作科 · Res
 * 敲門、鈴響、爆炸、鼓掌——日常物件發出的聲音，是漫畫狀聲字的主場。
 * 收錄各國怎麼把「東西碰在一起」寫成文字。
 */
export const thing = [
    {
        id: 16,
        number: '16',
        familyKey: 'THING',
        concept: '敲門',
        conceptEn: 'Knock',
        glyph: '🚪',
        hook: '叩叩、ton ton、toc toc——敲門聲全球都成雙成對。',
        funFact: '幾乎每個語言的敲門聲都是「兩下一組」，因為人們真的習慣敲兩下，擬聲詞忠實地記錄了這個動作。',
        trivia: '敲門擬聲詞有個有趣的共通點：全球幾乎都是兩個音節成對出現（叩叩、ton ton、toc toc、knock knock、똑똑），因為現實裡人們確實習慣連敲兩下。各語言只在子音上分歧——華語用 k、日語用 t、法語也用 t。',
        variants: [
            {flag: '🇹🇼', country: '台灣', lang: 'zh-TW', word: '叩叩', roman: 'kòu kòu'},
            {flag: '🇯🇵', country: '日本', lang: 'ja-JP', word: 'トントン', roman: 'ton ton', fav: true},
            {flag: '🇺🇸', country: '美國', lang: 'en-US', word: 'Knock knock', roman: 'nok nok'},
            {flag: '🇰🇷', country: '韓國', lang: 'ko-KR', word: '똑똑', roman: 'ttok ttok'},
            {flag: '🇫🇷', country: '法國', lang: 'fr-FR', word: 'Toc toc', roman: 'tok tok'},
        ],
    },
    {
        id: 17,
        number: '17',
        familyKey: 'THING',
        concept: '鈴響',
        conceptEn: 'Bell / Ring',
        glyph: '🔔',
        hook: '電話與門鈴的那一串清脆，各國都用「鼻音 + 顫音」。',
        funFact: '韓語的電話鈴聲「따르릉（ttareureung）」帶捲舌顫音，把老式電話那種震動的金屬感模擬得超傳神。',
        trivia: '鈴聲擬聲詞偏好能延續震動感的音：華語「鈴鈴」、日語「リンリン（rin rin）」、英語「ring ring」都用鼻音 n 收尾來模擬餘音。韓語「따르릉」更進一步加入顫音 r，把老電話的金屬震動寫了出來。',
        variants: [
            {flag: '🇹🇼', country: '台灣', lang: 'zh-TW', word: '鈴鈴', roman: 'líng líng'},
            {flag: '🇯🇵', country: '日本', lang: 'ja-JP', word: 'リンリン', roman: 'rin rin'},
            {flag: '🇺🇸', country: '美國', lang: 'en-US', word: 'Ring ring', roman: 'ring ring'},
            {flag: '🇰🇷', country: '韓國', lang: 'ko-KR', word: '따르릉', roman: 'ttareureung', fav: true},
        ],
    },
    {
        id: 18,
        number: '18',
        familyKey: 'THING',
        concept: '爆炸',
        conceptEn: 'Explosion',
        glyph: '💥',
        hook: '漫畫裡最霸氣的狀聲字，全球都靠爆破音 B / P / D。',
        funFact: '日語「ドカーン（dokān）」拉長的尾音，把爆炸後那團火光與震波的延續感都收進去了。',
        trivia: '爆炸是漫畫狀聲字的王者，各語言都靠重濁的爆破音來營造衝擊：英語 boom / kaboom、日語 ドカーン、韓語 펑（peong）、華語「轟」。差別在尾音——日語愛拉長（ーン）製造餘震感，英語則乾脆俐落地收掉。',
        variants: [
            {flag: '🇹🇼', country: '台灣', lang: 'zh-TW', word: '轟', roman: 'hōng'},
            {flag: '🇯🇵', country: '日本', lang: 'ja-JP', word: 'ドカーン', roman: 'dokān', fav: true},
            {flag: '🇺🇸', country: '美國', lang: 'en-US', word: 'Kaboom', roman: 'ka-boom'},
            {flag: '🇰🇷', country: '韓國', lang: 'ko-KR', word: '펑', roman: 'peong'},
        ],
    },
    {
        id: 19,
        number: '19',
        familyKey: 'THING',
        concept: '鼓掌',
        conceptEn: 'Clap',
        glyph: '👏',
        hook: '啪啪、pachi pachi、jjak jjak——掌聲也成雙。',
        funFact: '日語「パチパチ（pachi pachi）」除了鼓掌，也能形容柴火噼啪、相機快門連拍，是個一字多用的萬能音。',
        trivia: '鼓掌擬聲詞靠清脆的塞音 + 重複來模擬連續拍手：華語「啪啪」、日語「パチパチ」、韓語「짝짝（jjak jjak）」。日語的「パチパチ」甚至延伸到形容任何輕快連續的脆響，例如柴火或眨眼。',
        variants: [
            {flag: '🇹🇼', country: '台灣', lang: 'zh-TW', word: '啪啪', roman: 'pā pā'},
            {flag: '🇯🇵', country: '日本', lang: 'ja-JP', word: 'パチパチ', roman: 'pachi pachi', fav: true},
            {flag: '🇺🇸', country: '美國', lang: 'en-US', word: 'Clap clap', roman: 'klap klap'},
            {flag: '🇰🇷', country: '韓國', lang: 'ko-KR', word: '짝짝', roman: 'jjak jjak'},
        ],
    },
    {
        id: 20,
        number: '20',
        familyKey: 'THING',
        concept: '時鐘滴答',
        conceptEn: 'Clock Tick',
        glyph: '⏰',
        hook: '秒針走動的兩段聲，藏著「一高一低」的小巧思。',
        funFact: '英語「tick tock」前高後低的母音變化，其實對應了秒針來回擺動的兩個方向——這叫「母音象徵」。',
        trivia: '時鐘滴答是「母音象徵（sound symbolism）」的經典案例：英語「tick-tock」用前母音 i 接後母音 o，下意識對應秒針一去一回的兩個方向；日語「カチカチ（kachi kachi）」、韓語「똑딱（ttokttak）」也都用一前一後的兩個音來表現來回擺動。',
        variants: [
            {flag: '🇹🇼', country: '台灣', lang: 'zh-TW', word: '滴答滴答', roman: 'dī dā dī dā'},
            {flag: '🇯🇵', country: '日本', lang: 'ja-JP', word: 'カチカチ', roman: 'kachi kachi'},
            {flag: '🇺🇸', country: '美國', lang: 'en-US', word: 'Tick tock', roman: 'tik tok', fav: true},
            {flag: '🇰🇷', country: '韓國', lang: 'ko-KR', word: '똑딱똑딱', roman: 'ttokttak ttokttak'},
        ],
    },
];
