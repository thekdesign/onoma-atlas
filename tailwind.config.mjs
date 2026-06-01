export default {
    content: ['./resources/**/*.{vue,html}'],

    theme: {
        extend: {
            colors: {
                // Onoma 世界擬聲詞圖鑑 · 棉花糖夢境
                // 主色＝粉紅棉花糖；薰衣草紫＝次要；天藍＝點綴；薄荷＝成功/動物；暖黃＝星星亮點
                // 文字用偏紫的柔黑（ink），不用純黑，維持夢幻感

                // 棉花糖粉（candy / primary）：主標、主要按鈕、卡片強調
                candy: {
                    100: '#FFF0F7', 200: '#FFD9EC', 300: '#FFB8DC', 400: '#FF8FC8',
                    500: '#FF6BB5', 600: '#F0479B', 700: '#C9367C', 800: '#9C2A60', 900: '#6E1D44',
                },
                // 薰衣草紫（lilac / secondary）：次要強調、漸層另一端、分類
                lilac: {
                    100: '#F4F0FF', 200: '#E4D9FF', 300: '#CDBCFF', 400: '#B49AFF',
                    500: '#9B78FF', 600: '#845CF0', 700: '#6B45CC', 800: '#4F3399', 900: '#352266',
                },
                // 天藍（sky / accent）：雲朵、自然科、連結
                sky: {
                    100: '#EAF7FF', 200: '#CDEBFF', 300: '#A6DBFF', 400: '#76C6FF',
                    500: '#4FB0FF', 600: '#2E94EE', 700: '#2576C2', 800: '#1B5790', 900: '#123A60',
                },
                // 薄荷（mint）：動物科、成功狀態、清新點綴
                mint: {
                    100: '#EBFBF3', 200: '#CDF4E0', 300: '#A3E9C8', 400: '#6FD9A8',
                    500: '#43C589', 600: '#2BA66E', 700: '#208054', 800: '#175B3C', 900: '#0E3A26',
                },
                // 暖黃（sun）：星星、徽章、亮點
                sun: {
                    100: '#FFF8DB', 200: '#FFEFA8', 300: '#FFE070', 400: '#FFCE3D',
                    500: '#FBB91E', 600: '#E09913', 700: '#B0740E', 800: '#7E520B', 900: '#4F3306',
                },
                // 奶油白（cream）：頁底、卡片底
                cream: {
                    100: '#FFFDFB', 200: '#FFF8F2', 300: '#FFF0E6', 400: '#FBE6D6',
                    500: '#F2D6C2', 600: '#DEBBA3', 700: '#B8927A', 800: '#8A6857', 900: '#5C4338',
                },
                // 柔紫黑（ink）：內文、標題、淡字
                ink: {
                    100: '#F3F1F8', 200: '#DED9EC', 300: '#BDB4D4', 400: '#9488B5',
                    500: '#6E6191', 600: '#534873', 700: '#3E3559', 800: '#2C2640', 900: '#1C1829',
                },
            },
            fontFamily: {
                // 內文 Noto Sans TC；display 用 Baloo 2（圓潤可愛）＋ 日文圓體 M PLUS Rounded
                sans: ['"Noto Sans TC"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
                display: ['"Baloo 2"', '"M PLUS Rounded 1c"', '"Noto Sans TC"', 'system-ui', 'sans-serif'],
                rounded: ['"M PLUS Rounded 1c"', '"Noto Sans TC"', 'system-ui', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', '"SF Mono"', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.75rem',
                blob: '42% 58% 63% 37% / 41% 44% 56% 59%',
            },
            boxShadow: {
                // 柔和糖果陰影（偏粉紫，不用灰）
                candy: '0 10px 30px -8px rgba(255, 107, 181, 0.35)',
                lilac: '0 12px 34px -10px rgba(132, 92, 240, 0.38)',
                puff: '0 18px 48px -16px rgba(132, 92, 240, 0.30)',
                'puff-sm': '0 8px 22px -10px rgba(132, 92, 240, 0.28)',
                'inner-soft': 'inset 0 2px 8px rgba(255, 255, 255, 0.6)',
            },
            keyframes: {
                floaty: {
                    '0%, 100%': {transform: 'translateY(0)'},
                    '50%': {transform: 'translateY(-10px)'},
                },
                twinkle: {
                    '0%, 100%': {opacity: '0.35', transform: 'scale(0.85)'},
                    '50%': {opacity: '1', transform: 'scale(1.15)'},
                },
                wobble: {
                    '0%, 100%': {transform: 'rotate(-3deg)'},
                    '50%': {transform: 'rotate(3deg)'},
                },
                pop: {
                    '0%': {transform: 'scale(0.6)', opacity: '0'},
                    '60%': {transform: 'scale(1.08)', opacity: '1'},
                    '100%': {transform: 'scale(1)'},
                },
                'pulse-ring': {
                    '0%': {transform: 'scale(0.9)', opacity: '0.7'},
                    '100%': {transform: 'scale(1.8)', opacity: '0'},
                },
            },
            animation: {
                floaty: 'floaty 5s ease-in-out infinite',
                'floaty-slow': 'floaty 7.5s ease-in-out infinite',
                twinkle: 'twinkle 2.6s ease-in-out infinite',
                wobble: 'wobble 1.6s ease-in-out infinite',
                pop: 'pop 360ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                'pulse-ring': 'pulse-ring 900ms ease-out',
            },
        },
    },

    corePlugins: {
        preflight: false,
    },
};
