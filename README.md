# 🫧 Onoma · 世界擬聲詞圖鑑

> 同一個聲音，各國怎麼寫、怎麼唸？
> 狗叫在台灣是「汪汪」、在日本是「ワンワン」、在韓國是「멍멍」——翻開夢幻可愛的卡片，用各國語言把擬聲詞唸給你聽。

純前端、無後端的靜態網站，發聲使用**瀏覽器內建的 Web Speech API**（免費、零後端、可切換各國語言 voice）。

## 特色

- **翻牌卡片**：每張卡正面是一個聲音概念，點一下翻面看各國說法，逐一發聲。
- **夢幻可愛風**：棉花糖粉彩漸層、漂浮泡泡、閃爍星星、果凍質感按鈕。
- **各國語言發聲**：用 `ja-JP` voice 唸「ワンワン」、`ko-KR` voice 唸「멍멍」，真正貼近各國發音。
- **冷知識**：每個聲音附語言學小知識（為什麼狗叫各國聽起來不一樣？）。
- 4 科分類：動物叫聲科 🐾 / 自然天象科 🌧️ / 人聲情緒科 😆 / 物件動作科 🔔。

## 技術棧

Vue 3 + Vue Router 4 + Pinia 3 + Vite 7 + vite-ssg + Tailwind 3 + SCSS。
詳見上層 `../ARCHITECTURE.md`。

## 開發

```bash
nvm use            # Node 22
npm install
npm run serve      # dev server, http://localhost:8084
npm run production # vite-ssg build → public/
npm run images     # 改了 favicon.svg / og-image.svg 後重新產生 PNG
```

## 內容資料

擬聲詞資料分科放在 `resources/js/data/sounds/`（animal / nature / human / thing），
由 `data/sounds.js` 匯總。新增聲音：在對應分科檔加一筆，含 `concept`、`glyph`、`variants[]`
（每筆有 `flag` / `country` / `lang` / `word` / `roman`），`lang` 用標準語言碼以對應發聲 voice。

## 發聲機制

`composables/useSpeech.js` 封裝 SpeechSynthesis：模組層級單例狀態（全站同時只播一個），
依 `variant.lang` 挑最適合的 voice（完全相符 → 語言前綴相符 → 預設）。所有 `window` 存取皆 SSR-guard。
