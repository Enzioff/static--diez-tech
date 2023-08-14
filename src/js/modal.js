class Modal {
	constructor(el) {
		this.el = el;
		
		this.open = document.querySelectorAll("[data-open]");
		this.close = this.el.querySelector("[data-close]");
		this.body = document.querySelector("body");
	
		this.setListeners();
		console.log(this.el)
	}
	
	setListeners() {
		this.openModal();
		this.closeModal();
	}
	
	openModal() {
		this.open.forEach(el => {
			el.addEventListener("click", () => {
				this.el.classList.add("active");
				this.body.style.overflowY = "hidden";
			});
		});
	}
	
	closeModal() {
		this.close.addEventListener("click", () => {
			this.el.classList.remove("active");
			this.body.style.overflowY = "visible";
		});
	}
}

export default Modal;
