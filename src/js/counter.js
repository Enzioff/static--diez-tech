import { CountUp } from "countup.js";

class Counter {
	constructor(el) {
		this.el = el;
		this.toggle = false;
		this.setListeners();
	}
	
	setListeners() {
		this.initCounter();
	}
	
	initCounter() {
		window.addEventListener("scroll", () => {
			if (this.el && this.el.parentNode.classList.contains("focused")) {
				if (!this.toggle) {
					const options = {
						startVal: 5000,
						duration: 5,
						separator: "",
						decimal: ""
					};
					let demo = new CountUp(this.el, 10345723, options);
					if (!demo.error) {
						demo.start();
					} else {
						console.error(demo.error);
					}
				}
				this.toggle = true;
			}
		});
	}
}

export default Counter;
