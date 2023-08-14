import { values } from "./helpers/values";

(function initHeader() {
	const mainNav = document.querySelector("[data-main-nav]");
	const burger = document.querySelector("[data-burger]");
	const menu = document.querySelector("[data-menu]");
	const body = document.querySelector("body");
	
	if (mainNav) {
		window.addEventListener("scroll", () => {
			if (window.scrollY >= values.menuTabletEnd) {
				mainNav.classList.add("main-nav--fixed");
			}
			
			if (window.scrollY <= values.menuTabletStart) {
				mainNav.classList.remove("main-nav--fixed");
			}
		});
	}
	
	function toggleMenu() {
		menu.classList.toggle("header-menu--active");
		body.classList.toggle("fixed");
		burger.classList.toggle("burger--active");
	}
	
	burger.addEventListener("click", toggleMenu);
}());


