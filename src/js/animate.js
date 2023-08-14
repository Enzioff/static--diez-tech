import { values } from "./helpers/values";

class Animate {
	constructor(el) {
		this.el = el;
		this.animateElement = this.el.querySelector('.animate');
		this.setListeners();
	}
	
	setListeners() {
		this.scrollAnimation();
	}
	
	scrollAnimation() {
		window.addEventListener('scroll', ()=> {
			const currentOffset = window.scrollY - this.el.offsetTop + values.animMargin;
			if (currentOffset <= 0) {
				this.animateElement.style.transform = `translateX(${currentOffset}px)`;
			}
		})
	}

}

export { Animate }
