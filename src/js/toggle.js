class Toggle {
	constructor(el) {
		this.el = el;
		this.openButton = document.querySelectorAll("[data-open]");
		this.closeButton = this.el.querySelector("[data-close]");
		this.body = document.querySelector("body");
		this.container = this.el.querySelector("[data-container]");
		
		this.setListeners();
	}
	
	setListeners() {
		this.open()
		this.el.addEventListener("click", () => this.el.classList.remove("active"));
		this.container.addEventListener("click", (evt) => evt.stopPropagation());
		this.close();
	}
	
	open() {
		this.openButton.forEach(open => {
			open.addEventListener("click", () => {
				this.el.classList.add("active");
			});
		});
	}
	
	close() {
		this.closeButton.addEventListener("click", () => {
			this.el.classList.remove("active");
		});
	}
}

export default Toggle
