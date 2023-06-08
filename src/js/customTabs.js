const sliders = document.querySelectorAll("[data-current-slide]");

sliders.forEach(slider => {
	const sliderImagesBox = slider.querySelector("[data-image-box]");
	const sliderTabsContainer = slider.querySelector("[data-tabs-container]");
	const pictures = sliderImagesBox.querySelectorAll("[data-image-item]");
	const tabs = sliderTabsContainer.querySelectorAll("[data-tabs-slider]");
	
	tabs.forEach((tabs, tabsId) => {
		
		pictures.forEach((pictures, picturesId, picturesArray) => {
			
			if (tabsId === picturesId) {
				const tabItem = tabs.querySelectorAll("li");
				const pictureEl = pictures.querySelectorAll("picture");
				tabItem.forEach((tabItem, tabItemId) => {
					
					pictureEl.forEach((picture, pictureId) => {
						
						tabItem.addEventListener("click", () => {
							if (tabItemId === pictureId) {
								picturesArray.forEach(oldPic => {
									const newPic = oldPic.querySelectorAll("picture");
									oldPic.classList.add("hidden");
									newPic.forEach(pic => {
										pic.classList.remove("slider-images__picture--active");
									});
								});
								picture.classList.add("slider-images__picture--active");
								pictures.classList.remove("hidden");
							}
						});
					});
				});
			}
		});
	});
});