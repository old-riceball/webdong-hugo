---
draft: false
title: Quick Tools for Front-End Dev
titletc: 給前端開發測試的一些方便小工具
thumbnail:
    src:
        - https://res.cloudinary.com/tridong/image/upload/v1654515985/global/%E4%B8%89%E8%A7%92%E6%9D%B1%E6%9D%B1-%E5%93%81%E7%89%8C%E5%B1%95%E7%A4%BA%E5%B0%81%E9%9D%A2.png
    alt: 封面圖片替代文字(請填寫我)
cover: []
description: 前端開發者在開發過程中一些沒有想到過可能存在的小工具與網站，都打包好放在這裡，優化你的網站開發體驗！
date: 2022-07-29T19:36:10.548Z
lastUpdateDate: 2022-07-29 03:36
category: 資源
tag:
    - 字體
author:
    - name: 飯糰
      image: https://res.cloudinary.com/webdong/image/upload/v1659486489/global/riceball.png
---

## 網頁測試

網頁總是有太多需要留意的技術細節，需要一個更快速簡便的方式來測試網站是某可靠？某項功能是否到位？可以參考底下的工具協助開發。

### Lighthouse

[Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) 是一款自動化網站審計工具幫助提升網頁的品質，舉有效能、無障礙、PWA 與 SEO 等多種評分審核與反饋功能，可以從 [PageSpeed Insights](https://pagespeed.web.dev/) 線上檢測或是使用 [Lighthouse-ci](https://github.com/apps/lighthouse-ci) 來自動化檢測整個流程，如果在 Chrome 瀏覽器也有[內建](https://developer.chrome.com/docs/lighthouse/overview/#devtools)該項功能。

### Observatory

[Mozilla Observatory](https://observatory.mozilla.org/) 協助超過 24 萬個網站藉由給人們提供建議。提供了像是 HTTP 、 TLS 、 SSH 、三方測試的選項。

### OpenGraph.xyz

開發者會使用 `<meta>` 標籤來去更進一步的去描述整個網站，像是 Facebook 的 [Open Graph protocol](https://ogp.me/) 或是 Twitter 的 [ Cards Markup](https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started) 但要如何檢視寫上去的內容有沒有能被正確的讀取呢？

[OpenGraph](https://www.opengraph.xyz/) 是一個網站可以協助檢視上架的網站有沒有正確的的在 Facebook、Twitter、Linkedin、Discord 都有正確的抓取到 `<meta>`。

## 圖片優化

一張圖能抵千言萬語，圖片一直是網頁中不可缺少的元素，但也最常造成優化上的問題。 進入響應式網站的時代，不只版面隨著裝置適應，圖片也勢必要跟著優化，以下推薦的工具可以幫助更快速的撰寫或除錯網站。

### Responsive Image Breakpoints Generator

[Responsive Image Breakpoints Generator](https://www.responsivebreakpoints.com/) 是一個網頁可以幫助前端開發者更快速的撰寫和規、可自訂的響應式圖片標籤，只要輸入以下需求。

1. 解析度範圍 (Resolution)
2. 大小間隔 (Size Step)
3. 最多張圖片數量 (Maximum images)

就可以很快的得到所有尺寸的預覽圖片。

### Respimagelint

[respimagelint](https://ausi.github.io/respimagelint/) 是一個方便的圖片 Linter 可以被存放在你的書籤列中，在現代各大瀏覽器支援上都並沒有問題！

這個工具最棒的地方是*只要無腦的點一下*，便會檢視整個頁面上圖片潛在的問題並條列出來給與解決方案，就好像魔法一樣。

## 開發工具

開發過程中有一些

### Modern Fluid Typography Editor

在新版 CSS 中可以使用 `clamp` 來實作流動尺寸的字體大小，運用 [MFTE](https://modern-fluid-typography.vercel.app/) 可以幫助你輕鬆視覺化的方式去規劃流動字體的範圍與尺寸。
