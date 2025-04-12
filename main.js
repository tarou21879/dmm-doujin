
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
