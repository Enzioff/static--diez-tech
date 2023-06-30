import { CountUp } from "countup.js";
let toggle = false;
window.addEventListener('scroll', ()=> {
	const target = document.querySelector(".nums");
	if (target.classList.contains('focused')) {
		if (!toggle) {
			const options = {
				startVal: 5000,
				duration: 5,
				separator: "",
				decimal: ""
			};
			let demo = new CountUp(target, 10345723, options);
			if (!demo.error) {
				demo.start();
			} else {
				console.error(demo.error);
			}
		}
		toggle = true;
	}
})