import { Navigation, Pagination } from "swiper";

const images = document.querySelector('[data-images]')

export default function(el) {
  const data = {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    slideVisibleClass: "slider__item--visible",
    watchSlidesProgress: true,
    allowSlidePrevMouse: false,
    allowSlideNextMouse: false,
    allowTouchMove: false,
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
