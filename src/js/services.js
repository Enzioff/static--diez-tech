class Services {
	constructor(el) {
		this.el = el;
		this.list = this.el.querySelector("[data-list]");
		this.allEls = document.querySelectorAll("[data-service]");
		this.activeClass = "services__item--active";
		
		this.setListeners();
	}
	
	setListeners() {
		this.el.addEventListener("click", this.toggleTab.bind(this));
	}
	
	toggleTab() {
		this.allEls.forEach((el, elId) => el.classList.remove(this.activeClass));
		this.el.classList.add(this.activeClass);
	}
}

export { Services };