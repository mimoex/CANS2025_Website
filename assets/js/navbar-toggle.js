document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".navbar-toggler");
  const menuContainer = document.querySelector(".menu-container");
  if (!toggleButton || !menuContainer) return;

  toggleButton.setAttribute("aria-expanded", "false");
  toggleButton.addEventListener("click", () => {
    const open = menuContainer.classList.toggle("show");
    toggleButton.setAttribute("aria-expanded", open ? "true" : "false");
  });
});
