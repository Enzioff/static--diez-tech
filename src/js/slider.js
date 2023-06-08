import intro from "./config/intro";
import reviews from "./config/reviews";

export default function (el) {
  const name = el.getAttribute('data-slider');
  if (name === 'intro') return intro(el);
  if (name === 'reviews') return reviews(el);

  console.error('Конфигурационный файл для слайдера не найден');
}
