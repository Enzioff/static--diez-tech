class Tabs {
	constructor(el) {
		
		this.el = el;
		this.sliders = document.querySelectorAll("[data-current-slide]");
		this.tabsContainer = this.el.querySelectorAll("[data-tabs]");
		this.tabs = null;
		this.track = document.querySelector("[data-track]");
		this.setListeners();
	}
	
	setListeners() {
		this.toggleTab();
		if (window.innerWidth > 1200) {
			this.hideSlider(1);
		}
		window.addEventListener('resize', ()=> {
			if (window.innerWidth < 1200) {
				this.showSlider(1);
				document.querySelector('.section-header__tabs').querySelectorAll('.title')[0].classList.add('tab-active');
				document.querySelector('.section-header__tabs').querySelectorAll('.title')[1].classList.remove('tab-active');
				this.sliders[0].classList.remove('hidden');
			} else {
				this.hideSlider(1);
			}
		})
	}
	
	toggleTab() {
		this.tabsContainer.forEach(tabs => {
			this.tabs = tabs.querySelectorAll("[data-tab]");
			this.tabs.forEach((tab, idx, arr) => {
				tab.addEventListener("click", () => {
					const currentSlide = this.sliders[idx];
					arr.forEach(el => el.classList.remove("tab-active"));
					tab.classList.add("tab-active");
					
					if (window.innerWidth >= 1200) {
						if (tab.dataset.tab === "1") {
							this.track.style.transform = `translate(0)`;
							if (currentSlide.dataset.currentSlide === "1") {
								this.sliders[0].classList.add("hidden");
								this.sliders[1].classList.remove("hidden");
							} else {
								this.sliders[0].classList.remove("hidden");
								this.sliders[1].classList.add("hidden");
							}
						}
						if (tab.dataset.tab === "0") {
							this.track.style.transform = `translate(-130px)`;
							if (currentSlide.dataset.currentSlide === "0") {
								this.hideSlider(1);
								this.showSlider(0);
							} else {
								this.showSlider(1);
								this.hideSlider(0);
							}
						}
					}
				});
			});
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