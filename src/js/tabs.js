import { values } from "./helpers/values";

class Tabs {
	constructor(el) {
		this.el = el;
		this.sliders = document.querySelectorAll("[data-current-slide]");
		this.tabs = document.querySelectorAll("[data-tab]");
		this.tabHeaders = document.querySelectorAll("[data-tab-index]");
		this.setListeners();
	}
	
	setListeners() {
		this.toggleTab();
		if (window.innerWidth > values.desktopWidth) {
			this.hideSlider(1);
		}
		window.addEventListener("resize", () => {
			if (window.innerWidth < values.desktopWidth) {
				this.tabHeaders[0].classList.add("tab-active");
				this.tabHeaders[1].classList.remove("tab-active");
				this.sliders[0].classList.remove("hidden");
			}
		});
	}
	
	toggleTab() {
		this.el.addEventListener("click", () => {
			if (this.el.dataset.tabIndex) {
				this.tabHeaders.forEach(el => el.classList.remove("tab-active"));
				this.el.classList.add("tab-active");
				if (this.el.dataset.tabIndex === "1") {
					this.hideSlider(0);
					this.showSlider(1);
				}
				if (this.el.dataset.tabIndex === "0") {
					this.hideSlider(1);
					this.showSlider(0);
				}
			} else {
				this.tabs.forEach(tab => {
					if (!tab.dataset.tabIndex) {
						tab.classList.remove("tab-active");
					}
				});
				this.el.classList.add("tab-active");
			}
		});
	}
	
	hideSlider(id) {
		this.sliders[id].classList.add("hidden");
	}
	
	showSlider(id) {
		this.sliders[id].classList.remove("hidden");
	}
}

export { Tabs };
