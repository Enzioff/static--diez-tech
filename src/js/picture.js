const head = document.querySelectorAll('[data-head]')
const content = document.querySelectorAll('[data-content]')
const ACTIVE_CLASS = 'partnership__head--active'
head.forEach((headEl, headID, arr) => {
	headEl.addEventListener('click', ()=> {
		arr.forEach(el => el.classList.remove(ACTIVE_CLASS))
		headEl.classList.add(ACTIVE_CLASS)
		content.forEach(el => el.classList.remove('partnership__item--active'))
		content[headID].classList.add('partnership__item--active')
	})
})