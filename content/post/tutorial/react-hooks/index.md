---
draft: false
title: React Hooks
titletc: React 與 Hooks
thumbnail:
    src:
        - https://res.cloudinary.com/tridong/image/upload/v1654515985/global/%E4%B8%89%E8%A7%92%E6%9D%B1%E6%9D%B1-%E5%93%81%E7%89%8C%E5%B1%95%E7%A4%BA%E5%B0%81%E9%9D%A2.png
    alt: 封面圖片替代文字(請填寫我)
description: React Hook 是
date: 2022-08-02T03:18:16.460Z
lastUpdateDate: 2022-08-02 11:18
category: 教學
tag:
    - react
author:
    - name: 飯糰
---

## 前言

{{<hint type="warning">}}
在學習 Hook 之前，會需要了解基礎的 Function Component
{{</hint>}}

[React Hook](https://zh-hant.reactjs.org/) 官方的文件已有翻譯過並且非常的精簡易讀。在本篇文章相比於普通文檔來說，會更著重於……WHY (為什麼需要學習)再來才是 HOW (如何辦到)，因此特別合適*剛入門 React 的你*。

根據官方文件有分為基礎與進階的 Hook 可供教學，讓我們依循官方的架構從最基礎常用的 Hook 開始～

## 基礎 Hook

### useState

State 是 React 內建的一種物件用於存儲資訊關於元件，是可變的，當其有變化時會觸發整個元件重新渲染。

### useEffect

### useContext

## 額外的 Hook

### useReducer

### useCallback

### useMemo

### useRef

### useImperativeHandle

### useLayoutEffect

### useDebugValue

### useDefferedValue

### useTransition

## 了解 Hook 規定

我是在碰上問題才了解到：｢原來 Hook 不能這樣用！」的，因此學完以上的 Hooks ，可能會想了解一下自製 Hook 與遵守 Hook 的規定。
