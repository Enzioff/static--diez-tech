const target = document.querySelector("[data-area]");

if (target) {
	const options = {
		rootMargin: "-25%",
		threshold: 0
	};
	const callback = function(entries, observer) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				target.classList.add("roadmap--show");
			}
		});
	};
	
	const observer = new IntersectionObserver(callback, options);
	
	
	observer.observe(target);
}