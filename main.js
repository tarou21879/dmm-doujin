
// ===== スクロールで自動遷移 =====
window.addEventListener('scroll', () => {
  const redirectUrl = document.body.getAttribute('data-redirect-url');
  if (!redirectUrl) return;

  if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
    setTimeout(() => {
      window.location.href = redirectUrl;
    }, 1000);
  }
});

// ===== ヘッダー挿入 =====
document.addEventListener("DOMContentLoaded", () => {
  const headerHtml = `
    <header>
      <h1>無料で読める漫画サンプル</h1>
      <p>気になった作品をスマホでサクッとチェック📱</p>
    </header>
  `;
  document.body.insertAdjacentHTML('afterbegin', headerHtml);
});

// ===== フッター＆CTAボタン挿入 =====
document.addEventListener("DOMContentLoaded", () => {
  const footerHtml = `
    <div class="cta-section">
      <a class="cta-button" href="${document.body.getAttribute('data-redirect-url')}">
        ▶ 今すぐ続きを読む
      </a>
    </div>

    <footer>
      © 2025 漫画ギャラリー
    </footer>
  `;
  document.body.insertAdjacentHTML('beforeend', footerHtml);
});
