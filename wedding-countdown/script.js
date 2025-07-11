// 結婚式当日（yyyy, mm - 1, dd）
const weddingDate = new Date(2025, 8, 14); // ←9月は「8」
const today = new Date();
today.setHours(0, 0, 0, 0);

// 残り日数を計算
const diffDays = Math.max(0, Math.ceil((weddingDate - today) / (1000 * 60 * 60 * 24)));

// 画像リスト（必要に応じて追加）
const imageUrls = [
  "2021-12-25_01-14-54_153.jpeg",
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
