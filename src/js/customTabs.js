const sliders = document.querySelectorAll("[data-current-slide]");
const activeClass = "slider-images__picture--active";

if (sliders) {
	sliders.forEach(slider => {
		const pictures = slider.querySelectorAll("picture");
		const tabs = slider.querySelectorAll("[data-tab]");
		tabs.forEach((tab, tabId) => {
			tab.addEventListener("click", () => {
				try {
					const currentPicture = pictures.item(tabId);
					pictures.forEach(picture => picture.classList.remove(activeClass))
					currentPicture.classList.add(activeClass);
				} catch (e) {
					console.log('Нет соответствующего изображения');
				}
			});
		});
	});
}
