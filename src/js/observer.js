const targetEls = document.querySelectorAll("[data-area]");
if (targetEls) {
	targetEls.forEach(target => {
		let options = {
			rootMargin: "-20%",
			threshold: 0
		};
		if (target.dataset.area === '50') {
			options = {
				rootMargin: "-50%",
				threshold: 0
			};
		}
		const callback = function(entries) {
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
