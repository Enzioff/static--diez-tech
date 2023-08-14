import { values } from "./helpers/values";

class Coin {
	constructor(el) {
		this.el = el;
		
		this.boxes = document.querySelectorAll("[data-easter-box]");
		this.mushroomContainer = document.querySelector("[data-easter-mushroom]");
		this.mushroom = this.mushroomContainer.querySelector('.mushroom')
	
		this.initEaster()
	}
	
	initEaster() {
		this.boxes.forEach(box => {
			box.addEventListener("click", () => {
				this.mushroomContainer.classList.add("active");
				if (window.innerWidth > values.desktopWidth) {
					setTimeout(()=> {
						this.mushroom.classList.add('active');
					}, 1000)
					setTimeout(()=> {
						this.mushroom.style.backgroundImage = 'url("./assets/images/easter-mushroom-surprised.png")'
						this.mushroom.classList.add('blink')
					}, 3000)
					setTimeout(()=> {
						this.el.classList.add('active')
					}, 3200)
				} else {
					this.mushroom.classList.add('active');
					setTimeout(()=> {
						this.el.classList.add('active')
					}, 1500)
					console.log(this.mushroom.pageXOffset)
				}
			});
		})
	}
	
}

export default Coin;
