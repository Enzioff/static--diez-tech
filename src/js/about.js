const aboutMore = document.querySelector(".about-more");

if (aboutMore) {
	const open = document.querySelectorAll(".article-team");
	const close = aboutMore.querySelector(".about-more__close");
	
	const body = document.querySelector("body");
	open.forEach(el => {
		el.addEventListener("click", () => {
			aboutMore.classList.add("active");
			body.style.overflowY = "hidden";
		});
	});
	
	close.addEventListener("click", () => {
		aboutMore.classList.remove("active");
		body.style.overflowY = "visible";
	});
}
