class OneScroll {
	constructor(el) {
		this.el = el;
		this.sections = this.el.querySelectorAll(".section");
		this.html = document.querySelector("html");
		this.desktopWidthMediaQuery = window.matchMedia("(min-width: 1201px)");
		this.height = this.sections[0].offsetHeight;
		this.secondSection = this.sections[1];
		this.secondHeight = this.secondSection.offsetHeight;
		this.setListeners();
	}
	
	setListeners() {
		this.scrollContainer();
		this.initObserver();
	}
	
	scrollContainer() {
		this.el.addEventListener("wheel", (evt) => {
			evt.preventDefault();
			let scrollPos = Math.sign(evt.deltaY);
			if (scrollPos === 1) {
				window.scrollBy({
					top: this.height,
					left: 0,
					behavior: "smooth"
				});
			} else if (scrollPos === -1) {
				window.scrollTo({
					top: 0,
					left: 0,
					behavior: "smooth"
				});
			}
		}, false);
	}
	
	initObserver() {
		let options = {
			rootMargin: "-1px",
			threshold: 0
		};
		const callback = function(entries) {
			if (entries[0].isIntersecting) {
				window.addEventListener("scroll", evt => evt.preventDefault(), false);
				requestAnimationFrame(() => {
					window.scrollTo({
						top: 940,
						left: 0,
						behavior: "smooth"
					});
				});
			}
		};
		let observer = null;
		if (this.desktopWidthMediaQuery.matches) {
			observer = new IntersectionObserver(callback, options);
			observer.observe(this.secondSection);
		} else {
			observer = null;
		}
	}
	
}

export default OneScroll;
