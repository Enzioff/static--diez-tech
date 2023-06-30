const targetEls = document.querySelectorAll("[data-area]");
if (targetEls) {
	targetEls.forEach(target => {
		const options = {
			rootMargin: "-20%",
			threshold: 0
		};
		const callback = function(entries, observer) {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					target.classList.add("focused");
				}
			});
		};
		
		const observer = new IntersectionObserver(callback, options);
		
		
		observer.observe(target);
	});
}