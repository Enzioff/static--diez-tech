const modal = document.querySelector("[data-modal]");

if (modal) {
	const open = document.querySelectorAll("[data-open]");
	const close = modal.querySelector("[data-close]");
	
	const body = document.querySelector("body");
	open.forEach(el => {
		el.addEventListener("click", () => {
			modal.classList.add("active");
			body.style.overflowY = "hidden";
		});
	});
	
	close.addEventListener("click", () => {
		modal.classList.remove("active");
		body.style.overflowY = "visible";
	});
}
