---
draft: false
title: Put Your Files On Cloud
titletc: 把你的檔案都丟上雲端
thumbnail:
    src:
        - https://res.cloudinary.com/tridong/image/upload/v1654545698/post/put-your-files-on-cloud/GoogleDrive%E4%BD%BF%E7%94%A8%E4%BB%8B%E9%9D%A2%E5%AF%AC.webp
    alt: GoogleDrive使用介面
cover:
    - src: https://res.cloudinary.com/tridong/image/upload/v1654545536/post/put-your-files-on-cloud/GoogleDrive%E4%BD%BF%E7%94%A8%E4%BB%8B%E9%9D%A2.webp
      alt: GoogleDrive使用介面
      height: 594
      width: 1200
    - src: https://res.cloudinary.com/tridong/image/upload/v1654545537/post/put-your-files-on-cloud/GoogleDrive%E4%B8%8B%E8%BC%89.webp
      alt: GoogleDrive下載介面
      height: 594
      width: 1200
    - src: https://res.cloudinary.com/tridong/image/upload/v1654545536/post/put-your-files-on-cloud/GoogleDrive%E8%88%87BackupandSync.webp
      alt: GoogleDrive與BackupandSync
      height: 750
      width: 1200
description: Google Drive是大家最熟悉的一款雲端服務，但你知道如何自動化的同步你的檔案到雲端上嗎？更快速的備份、分享你的檔案，使用官方提供的軟體就能達成。
date: 2022-06-06T19:51:15.903Z
lastUpdateDate: 2022-06-07 03:51
category: 教學
tag:
    - 檔案
author:
    - name: 飯糰
      image: https://res.cloudinary.com/webdong/image/upload/v1659486489/global/riceball.png
---

## 前言

自 2021 年 10 月後舊版的備份軟體 “Backup and Sync” 就進入歷史了，取而代之的是整合所有功能的為一的 “Drive” 軟體。這篇文章會紀錄如何使用官方提供的軟體，實現自動化同步你的檔案到雲端上。

-   更好的分享你的檔案
-   更好的自動備份檔案

## 開始使用

1. 到<a href="https://www.google.com/drive/download/"> Google 雲端硬碟</a>網站下載，並登入帳號。
2. 選擇模式 (鏡射 / 串流)
3. 完成

透過雲端硬碟電腦版，可以存取儲存在 Google 雲端硬碟中的檔案。系統會同步處理你對檔案所做的任何變更，實現自動化的檔案備份、預覽。

## 串流 (streaming)

串流處理檔案時，「我的雲端硬碟」中的檔案會儲存在雲端。只有在你開啟檔案並將其設為可離線使用，這些檔案才會占用硬碟空間。如果未將檔案設為可離線使用，你必須連上網路才能存取檔案。所有檔案 (包括可離線使用的檔案) 只有在應用程式執行時才能存取。你可以透過電腦上的掛接磁碟機存取檔案。

-   僅存儲檔案在雲端
-   存取檔案於虛擬磁碟
-   選擇特定的檔案供離線使用

總結就是創建一個虛擬的目錄預覽，只有在觀賞時才會抓必要的檔案下來到指定的緩存中。

## 串流使用時機：

-   有通暢的網路時
-   想節省硬碟空間

## 鏡射 (Mirror)

鏡射檔案時，「我的雲端硬碟」中的所有檔案會一併儲存在雲端和電腦上，並且占用硬碟空間。即使沒有網際網路連線，或並未執行雲端硬碟電腦版應用程式，你依然能夠隨時存取所有檔案。你可以透過電腦上的資料夾存取檔案。

-   存儲檔案在本地和雲端
-   選擇一個資料夾進行同步
-   所有同步過的檔案線下時皆可使用

總結就是把雲端的所有檔案都下載下來，並且只要有任何更動就會更新。

## 鏡射使用時機：

-   網路不好
-   需避免動態載入檔案的場合

## 結語

基本上兩個模式大同小異，串流相比之下更加靈活，是我最常使用的方式。看完了 Drive 這個同步軟體，詳細該如何整理雲端中的資料呢？可以參考我寫的另外一篇文章：[分類好頭疼！如何擺脫檔案整理惡夢？ ](/post/management/fix-your-file-nightmare/)

## 參考資料
