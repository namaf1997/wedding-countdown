// 結婚式当日（yyyy, mm - 1, dd）
const weddingDate = new Date(2025, 8, 14); // ←9月は「8」
const today = new Date();
today.setHours(0, 0, 0, 0);

// 残り日数を計算
const diffDays = Math.max(0, Math.ceil((weddingDate - today) / (1000 * 60 * 60 * 24)));

// 画像リスト（必要に応じて追加）
const imageUrls = [
  "images/2021-12-25_01-14-54_153.jpeg",
  "images/2022-02-05_12-34-17_159.jpeg",
  "images/2022-06-14_14-23-34_859.jpeg",
  "images/2022-07-10_15-07-15_398.jpeg",
  "images/2022-08-28_17-38-53_000.png",
  "images/2022-09-10_13-39-25_672.jpeg",
  "images/2022-09-10_15-47-32_533.jpeg",
  "images/2022-11-04_21-04-14_732.jpeg",
  "images/2022-12-11_13-05-15_545.jpeg",
  "images/2023-02-05_12-28-52_944.jpeg",
  "images/2023-02-07_19-59-08_766.jpeg",
  "images/2023-07-22_16-22-32_011.jpeg",
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
  "images/2025-02-03_22-29-49_811.jpeg",
  "images/2025-03-29_19-21-26_000 (2025-04-03T11_58_36.703).jpeg",
  "images/2025-03-29_19-21-40_000.jpeg",
  "images/2025-03-29_19-26-09_000 (2025-04-03T11_58_30.324).jpeg",
  "images/2025-03-29_19-26-20_000 (2025-04-03T11_58_27.167).jpeg",
  "images/2025-03-29_19-26-33_000 (2025-04-03T11_58_22.865).jpeg",
  "images/2025-04-08_11-53-58_660.jpeg",
  "images/2025-04-08_11-57-57_230.jpeg",
  "images/2025-04-08_12-01-57_440.jpeg",
  "images/2025-04-08_12-02-36_380.jpeg",
];

const imageIndex = Math.min(imageUrls.length - 1, Math.max(0, imageUrls.length - diffDays));

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

// ページ読み込み後すぐ shine
window.addEventListener('load', () => {
  triggerShine();
  setInterval(triggerShine, 3000); // 10秒ごとに再発火
});
