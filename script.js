window.addEventListener("load", () => {
  // ----------------------------
  // 結婚式当日（yyyy, mm - 1, dd）
  // ----------------------------
  const weddingDate = new Date(2025, 8, 14); // ←9月は「8」
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // 残り日数を計算
  const diffDays = Math.max(0, Math.ceil((weddingDate - today) / (1000 * 60 * 60 * 24)));

  // ----------------------------
  // 日替わり画像リスト（画像は必要に応じて追加）
  // ----------------------------
  const imageUrls = [
  "images/2025-02-03_22-29-49_811.jpeg",
  "images/2022-07-10_15-07-15_398.jpeg",
  "images/2021-12-25_01-14-54_153.jpeg",
  "images/2022-02-05_12-34-17_159.jpeg",
  "images/2022-09-10_13-39-25_672.jpeg",
  "images/2022-09-10_15-47-32_533.jpeg",
  "images/2022-11-04_21-04-14_732.jpeg",
  "images/2022-12-11_13-05-15_545.jpeg",
  "images/2023-07-22_16-22-32_011.jpeg",
  "images/2023-02-07_19-59-08_766.jpeg",
  "images/2023-08-06_16-06-28_232.jpeg",
  "images/2023-08-06_20-20-15_302.jpeg",
  "images/2023-10-15_17-02-45_479.jpeg",
  "images/2023-12-13_17-42-24_928.jpeg",
  "images/2024-02-25_22-42-55_545.jpeg",
  "images/2024-04-28_01-09-45_671.jpeg",
  "images/2024-06-19_17-51-59_190.jpeg",
  "images/2024-07-21_20-49-13_563.jpeg",
  "images/2024-09-13_20-57-12_168.jpeg",
  "images/2024-09-18_13-12-03_286.jpeg",
  "images/2025-03-29_19-21-26_000 (2025-04-03T11_58_36.703).jpeg",
  "images/2025-03-29_19-21-40_000.jpeg",
  "images/2025-03-29_19-26-09_000 (2025-04-03T11_58_30.324).jpeg",
  "images/2025-03-29_19-26-20_000 (2025-04-03T11_58_27.167).jpeg",
  "images/2025-03-29_19-26-33_000 (2025-04-03T11_58_22.865).jpeg",
  "images/2025-04-08_11-53-58_660.jpeg",
  "images/2025-04-08_11-57-57_230.jpeg",
  "images/2025-04-08_12-01-57_440.jpeg",
  "images/2025-04-08_12-02-36_380.jpeg",
  "images2/2022-06-30_15-31-39_816.jpg",
  "images2/2022-07-10_21-24-58_059.jpg",
  "images2/2022-10-29_15-37-00_133.jpg",
  "images2/2022-11-04_00-19-44_852.jpg",
  "images2/2022-12-10_11-39-55_782.jpg",
  "images2/2022-12-10_16-26-26_601.jpg",
  "images2/2023-02-02_19-27-49_947.jpg",
  "images2/2023-02-04_16-06-58_631.jpg",
  "images2/2023-05-06_10-34-17_179.jpg",
  "images2/2023-06-10_15-34-41_047.jpg",
  "images2/2023-07-22_21-20-49_485.jpg",
  "images2/2023-08-19_21-07-34_327.jpg",
  "images2/2023-08-27_16-53-18_603.jpg",
  "images2/2023-11-26_09-03-11_868.jpg",
  "images2/2023-11-26_13-20-23_857.jpg",
  "images2/2024-01-30_16-37-25_236.jpg",
  "images2/2024-02-03_20-59-50_076.jpg",
  "images2/2024-02-04_11-48-25_546.jpg",
  "images2/2024-02-24_21-55-33_820.jpg",
  "images2/2024-04-06_11-19-15_592.jpg",
  "images2/2024-04-25_15-20-42_679.jpg",
  "images2/2024-04-28_15-29-16_629.jpg",
  "images2/2024-05-12_17-59-52_358.jpg",
  "images2/2024-05-26_16-26-01_410.jpg",
  "images2/2024-06-08_16-12-44_555.jpg",
  "images2/2024-06-09_14-33-38_604.jpg",
  "images2/2024-07-03_23-21-59_648.jpg",
  "images2/2024-07-11_15-23-48_800.jpg",
  "images2/2024-07-15_19-49-15_772.jpg",
  "images2/2024-07-28_15-54-22_106.jpg",
  "images2/2024-07-28_23-49-51_393.jpg",
  "images2/2024-08-05_22-06-10_162.jpg",
  "images2/2024-08-07_20-34-20_039.jpg",
  "images2/2024-08-18_18-40-10_249.jpg",
  "images2/2024-08-18_18-43-01_642.jpg",
  "images2/2024-08-18_19-28-04_879.jpg",
  "images2/2024-08-18_19-34-11_907.jpg",
  "images2/2024-09-14_16-19-14_885.jpg",
  "images2/2024-09-15_22-48-48_273.jpg",
  "images2/2024-09-22_23-59-39_216.jpg",
  "images2/2024-10-11_20-05-16_746.jpg",
  "images2/2024-10-27_15-54-42_445.jpg",
  "images2/2024-11-09_16-58-01_899.jpg",
  "images2/2024-11-09_22-47-57_099.jpg",
  "images/2022-06-14_14-23-34_859.jpeg",
  "images2/2024-11-09_22-52-10_989.jpg",
  "images2/2024-11-19_13-55-24_688.jpg",
  "images2/2024-11-19_17-28-04_779.jpg",
  "images2/2024-12-15_11-38-40_998.jpg",
  "images2/2024-12-15_15-35-34_305.jpg",
  "images2/2025-01-01_09-44-17_573.jpg"
];

// ----------------------------
  // 日替わりランダム画像インデックス関数
  // ----------------------------
  function getDailyRandomIndex(arrayLength) {
    const todayStr = new Date().toISOString().slice(0, 10); // 'YYYY-MM-DD'
    let hash = 0;
    for (let i = 0; i < todayStr.length; i++) {
      hash += todayStr.charCodeAt(i);
    }
    return hash % arrayLength;
  }

  const imageIndex = diffDays % imageUrls.length;

  // ----------------------------
  // DOMの画像とカウントダウンに反映
  // ----------------------------
  const image = document.getElementById("daily-image");
  const number = document.getElementById("countdown-number");

  image.src = imageUrls[imageIndex];
  number.textContent = `${diffDays}`;

  // ----------------------------
  // 光筋エフェクト処理
  // ----------------------------
  const wrapper = document.querySelector('.image-wrapper');

  function triggerShine() {
    wrapper.classList.remove('shine-active');
    void wrapper.offsetWidth; // リフローでアニメ再発火
    wrapper.classList.add('shine-active');
  }

  // ページ読み込み後すぐ shine エフェクト起動 + ループ
  triggerShine();
  setInterval(triggerShine, 6000); // 6秒ごとに再発火（調整可）
});
