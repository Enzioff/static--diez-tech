(function initHeader() {
	const mainNav = document.querySelector("[data-main-nav]");
	const burger = document.querySelector('[data-burger]')
	const menu = document.querySelector('[data-menu]')
	const body = document.querySelector('body')
	const indexHeader = document.querySelector('[data-header-index]');
	
	if (mainNav) {
		window.addEventListener("scroll", () => {
			if (window.scrollY >= 857) {
				mainNav.classList.add("main-nav--fixed");
			}
			
			if (window.scrollY <= 873) {
				mainNav.classList.remove("main-nav--fixed");
			}
		});
	}
	
	function toggleMenu() {
		menu.classList.toggle('header-menu--active')
		body.classList.toggle('fixed')
		burger.classList.toggle('burger--active')
	}
	
	burger.addEventListener('click', toggleMenu)
	
	setTimeout(()=> {
		indexHeader.classList.add('active')
	}, 4100)
}());


