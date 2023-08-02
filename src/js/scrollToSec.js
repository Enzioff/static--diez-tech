window.addEventListener("DOMContentLoaded", () => {
	const html = document.querySelector("html");
	const scrollContainer = document.querySelector(".oneScroll");
	const sections = scrollContainer.querySelectorAll(".section");
	const desktopWidthMediaQuery = window.matchMedia("(min-width: 1201px)");
	
	let height = sections[0].offsetHeight;
	
	scrollContainer.addEventListener("wheel", (evt) => {
		evt.preventDefault();
		
		let scrollPos = Math.sign(evt.deltaY);
		
		if (scrollPos === 1) {
			window.scrollBy({
				top: height + 1,
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
	
	let options = {
		rootMargin: "0px",
		threshold: 0
	};
	const callback = function(entries) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				html.style.scrollBehavior = "unset";
				setTimeout(() => {
					window.scrollTo(0, 0);
					console.log("true");
				}, 0);
			}
		});
	};
	let observer = null;
	if (desktopWidthMediaQuery.matches) {
		observer = new IntersectionObserver(callback, options);
		observer.observe(sections[1]);
	} else {
		observer = null;
	}
	
});
