import intro from "./config/intro";
import reviews from "./config/reviews";
import blog from "./config/blog";
import reviewsSec from "./config/reviewsSec";
import projects from "./config/projects";

export default function (el) {
  const name = el.getAttribute('data-slider');
  if (name === 'intro') return intro(el);
  if (name === 'reviews') return reviews(el);
  if (name === 'blog') return blog(el);
  if (name === 'reviewsSec') return reviewsSec(el);
  if (name === 'projects') return projects(el);

  console.error('Конфигурационный файл для слайдера не найден');
}
