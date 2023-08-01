class CustomTabs {
	constructor(el) {
		this.el = el;
		this.pictures = this.el.querySelectorAll("picture");
		this.tabs = this.el.querySelectorAll("[data-tab]");
		
		this.setListeners();
	}
	
	setListeners() {
		window.addEventListener('DOMContentLoaded', ()=> {
			this.checkIndexes(this.tabs, this.pictures);
		})
	}
	
	checkIndexes(tabs, pictures) {
		tabs.forEach((tab, tabId) => {
			tab.addEventListener("click", () => {
				try {
					const currentPicture = pictures.item(tabId);
					pictures.forEach(picture => picture.classList.remove('active'))
					currentPicture.classList.add('active');
				} catch (e) {
					console.error('Нет соответствующего изображения');
				}
			});
		});
	}
}

export {CustomTabs};
