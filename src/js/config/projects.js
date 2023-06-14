import { EffectCoverflow, Navigation, Pagination } from "swiper";

const images = document.querySelector("[data-images]");

export default function(el) {
	const data = {
		modules: [Navigation, Pagination, EffectCoverflow],
		slidesPerView: 'auto',
		spaceBetween: 20,
		effect: "coverflow",
		centeredSlides: true,
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: true,
		}
	};
	
	try {
		if (el.querySelector("[data-nav]")) {
			data.navigation = {
				nextEl: el.querySelector("[data-button-next]"),
				prevEl: el.querySelector("[data-button-prev]"),
				disabledClass: "slider__button--disabled"
			};
			data.pagination = {
				el: el.querySelector("[data-pagination]"),
				type: "fraction"
			};
		}
	} catch (e) {
	}
	
	return data;
}
