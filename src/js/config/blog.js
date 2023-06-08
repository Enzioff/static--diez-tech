import { Navigation, Pagination } from "swiper";

const images = document.querySelector("[data-images]");

export default function(el) {
	const data = {
		modules: [Navigation, Pagination],
		slidesPerView: 1,
		spaceBetween: 20,
		slideVisibleClass: "slider__item--visible",
		breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2,
			}
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
