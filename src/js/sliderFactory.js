import intro from "./config/intro";
import reviews from "./config/reviews";
import blog from "./config/blog";
import reviewsSec from "./config/reviewsSec";
import projects from "./config/projects";
import about from "./config/about";

export default function (el) {
  const name = el.getAttribute('data-slider');
  if (name === 'intro') return intro(el);
  if (name === 'reviews') return reviews(el);
  if (name === 'blog') return blog(el);
  if (name === 'reviewsSec') return reviewsSec(el);
  if (name === 'projects') return projects(el);
  if (name === 'about') return about(el);

  console.error('Конфигурационный файл для слайдера не найден');
}
