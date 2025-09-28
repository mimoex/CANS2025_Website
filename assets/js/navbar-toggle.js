document.addEventListener("DOMContentLoaded", function () {
  // --- ハンバーガーメニュー全体のトグル ---
  const toggleButton = document.querySelector(".navbar-toggler");
  const menuContainer = document.querySelector(".menu-container");
  if (toggleButton && menuContainer) {
    toggleButton.setAttribute("aria-expanded", "false");
    toggleButton.addEventListener("click", () => {
      const open = menuContainer.classList.toggle("show");
      toggleButton.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // --- サブメニュー用トグル（親リンク or ▼ ボタンで開閉） ---
  document.querySelectorAll(".menu-list > li").forEach(function (li) {
    const link = li.querySelector("a");                // 親の <a>
    const btn = li.querySelector(".submenu-toggle");   // ▼ボタン
    const dropdown = li.querySelector(".dropdown");    // サブメニュー

    // ▼ボタンで開閉
    if (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        li.classList.toggle("open");
      });
    }

    // 親リンク文字で開閉
    if (link && dropdown) {
      link.addEventListener("click", function (e) {
        e.preventDefault(); // # に飛ばないようにする
        li.classList.toggle("open"); // open があれば閉じる／なければ開く
      });
    }
  });
});
