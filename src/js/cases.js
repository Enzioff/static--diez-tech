const listLinks = document.querySelectorAll("[data-link]");
const activeLinkClass = 'nav__link--active';
listLinks.forEach((link, idx, arr) => {
	link.addEventListener('click', ()=> {
		arr.forEach(el => el.classList.remove(activeLinkClass))
		link.classList.add(activeLinkClass)
	})
})
