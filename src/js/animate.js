class Animate {
	constructor(el) {
		this.el = el;
		this.animateElement = this.el.querySelector('.animate');
		this.setListeners();
	}
	
	setListeners() {
		this.scrollAnimation();
		this.showHeader();
	}
	
	scrollAnimation() {
		window.addEventListener('scroll', ()=> {
			const currentOffset = window.scrollY - this.el.offsetTop + 243;
			if (currentOffset <= 0) {
				this.animateElement.style.transform = `translateX(${currentOffset}px)`;
			}
		})
	}

}

export { Animate }
