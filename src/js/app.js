import Swiper from "swiper";
import sliderFactory from "./sliderFactory";
import { Tabs } from "./tabs";
import { Animate } from "./animate";
import { Track } from "./track";
import { Services } from "./services";
import { CustomTabs } from "./customTabs";
import { Preloader } from "./preloader";

class App {
	constructor() {
		this.createSliders();
		this.initTabs();
		this.initAnimate();
		this.initTrack();
		this.initServices()
		this.initCustomTabs();
		this.initPreloader();
	}
	
	createSliders() {
		const el = document.querySelectorAll("[data-slider]");
		
		if (el) this.sliders = [];
		
		el.forEach(item => {
			
			let slider = this.initSlider(item);
			
			item.onkeydown = evt => {
				if (evt.key === "Tab") {
					evt.preventDefault();
				}
			};
			
			const updateSlider = () => {
				if (!slider) {
					slider = this.initSlider(item);
					slider.update();
				}
			};
			
			const changeStateOfSlider = (width) => {
				if (width <= 1200) {
					if (slider) {
						slider.destroy(true, true);
						slider = undefined;
					}
				} else {
					updateSlider();
				}
			};
			
			if (item.hasAttribute("data-mobile")) {
				changeStateOfSlider(window.innerWidth);
				window.addEventListener("resize", () => {
					changeStateOfSlider(window.innerWidth);
				});
			}
			
			this.sliders.push(slider);
		});
	}
	
	initSlider(item) {
		return new Swiper(
			item.querySelector("[data-slide]"),
			sliderFactory(item),
		);
	}
	
	initTrack() {
		const el = document.querySelectorAll("[data-scroll]");
		el.forEach(item => new Track(item));
	}
	
	initPreloader() {
		const el = document.querySelector("[data-preloader]");
		new Preloader(el);
	}
	
	initServices() {
		const el = document.querySelectorAll("[data-service]");
		el.forEach(item => new Services(item));
	}
	
	initCustomTabs() {
		const el = document.querySelectorAll("[data-current-slide]");
		el.forEach(item => new CustomTabs(item));
	}
	
	initTabs() {
		const el = document.querySelectorAll("[data-tab]");
		el.forEach(item => new Tabs(item));
	}
	
	initAnimate() {
		const el = document.querySelectorAll("[data-animation]");
		el.forEach(item => new Animate(item));
	}
}

export default App;
