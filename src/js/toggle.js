const toggleItem = document.querySelector("[data-toggle]");

if (toggleItem) {
	const openButton = document.querySelectorAll("[data-open]");
	const closeButton = toggleItem.querySelector("[data-close]");
	const body = document.querySelector("body");
	const container = toggleItem.querySelector("[data-container]");
	openButton.forEach(open => {
		open.addEventListener("click", () => {
			toggleItem.classList.add("active");
		});
	});
	
	toggleItem.addEventListener("click", () => toggleItem.classList.remove("active"));
	container.addEventListener("click", (evt) => evt.stopPropagation());
	
	closeButton.addEventListener("click", () => {
		toggleItem.classList.remove("active");
	});
	
}
