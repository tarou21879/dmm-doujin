
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
