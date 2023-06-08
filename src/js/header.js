const mainNav = document.querySelector("[data-main-nav]");

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 857) {
    mainNav.classList.add("main-nav--fixed");
  }

  if (window.pageYOffset <= 873) {
    mainNav.classList.remove("main-nav--fixed");
  }
});
