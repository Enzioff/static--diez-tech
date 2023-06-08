class Animate {
	constructor(el) {
		this.el = el;
		this.animateElement = this.el.querySelector('.animate')
		this.elementRect = this.el.getBoundingClientRect();
		this.windowHeight = window.innerHeight
		this.setListeners();
	}
	
	setListeners() {
		this.scrollAnimation();
	}
	
	scrollAnimation() {
		window.addEventListener('scroll', (evt)=> {
			const currentOffset = window.pageYOffset - this.el.offsetTop + 243
			if (currentOffset <= 0) {
				this.animateElement.style.transform = `translateX(${currentOffset}px)`
			}
		})
	}
}

export { Animate }