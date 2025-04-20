document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".navbar-toggler");
    const menuContainer = document.querySelector(".menu-container");
  
    toggleButton.addEventListener("click", () => {
      menuContainer.classList.toggle("show");
    });
  });
  