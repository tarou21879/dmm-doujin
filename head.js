const imageUrl = document.body.getAttribute('data-og-image');
const pageUrl = window.location.href;

// OGP メタタグ群を直接 innerHTML で追加
document.head.innerHTML += `
  <meta charset='UTF-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <meta property='og:title' content='漫画サンプルギャラリー'>
  <meta property='og:description' content='同人漫画のサンプル画像をまとめたギャラリーです。'>
  <meta property='og:image' content='${imageUrl}'>
  <meta property='og:url' content='${pageUrl}'>
  <meta name='twitter:card' content='summary_large_image'>
  <title>漫画サンプルギャラリー</title>
`;

// ✅ CSSファイルの読み込みを確実にする
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'style.css';
document.head.appendChild(link);
