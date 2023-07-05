const head = document.querySelectorAll('[data-head]')
const content = document.querySelectorAll('[data-content]')
const activeClass = 'partnership__head--active'
head.forEach((headEl, headID, arr) => {
	headEl.addEventListener('click', ()=> {
		arr.forEach(el => el.classList.remove(activeClass))
		headEl.classList.add(activeClass)
		content.forEach(el => el.classList.remove('partnership__item--active'))
		content[headID].classList.add('partnership__item--active')
	})
})
