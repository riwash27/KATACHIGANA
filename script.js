// -----------------------------
// ハンバーガーメニュー（全ページ共通）
// -----------------------------

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.querySelector(".hamburger__btn");
  const menuLists = document.querySelector(".menu-lists");

  if (hamburgerBtn && menuLists) {
    hamburgerBtn.addEventListener("click", () => {
      hamburgerBtn.classList.toggle("close");
      menuLists.classList.toggle("show");
    });
  }
});

