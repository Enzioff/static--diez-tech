// Выберите секцию, в которой будет происходить прокрутка
const section = document.querySelector("[data-wheel]");

// Выберите секцию, к которой нужно прокрутить
const targetSection = document.querySelector("[data-plates]");
const targetSectionPos = document.querySelector("[data-plates]").offsetTop;

// Функция, которая будет вызываться при событии wheel в секции
function scrollToTargetSection(event) {
	// Определите направление прокрутки колеса
	const delta = Math.sign(event.deltaY);
	
	// Проверьте, находится ли событие wheel в секции
	if (event.target === section) {
		// Если прокрутка вниз, прокрутите до нужной секции
		if (delta === 1) {
			targetSection.scrollTop = targetSectionPos;
		}
	}
}

// Добавьте обработчик события wheel для секции
section.addEventListener("wheel", scrollToTargetSection);

const mouseCircle = document.querySelector('[data-circle]');
const customMouseSection = document.querySelector('[data-custom-mouse]')

customMouseSection.addEventListener('mousemove', moveCursor);
window.addEventListener('scroll', moveCursor);

let mouseX = 0;
let mouseY = 0;

function moveCursor(evt) {
	mouseX = evt.clientX;
	mouseY = evt.clientY;
	mouseCircle.style.left = mouseX + 'px';
	mouseCircle.style.top = mouseY + 'px';
	mouseCircle.style.opacity = 1;
}

setInterval(()=> moveCursor, 60)

