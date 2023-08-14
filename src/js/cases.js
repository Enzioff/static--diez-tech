class ListLink {
	constructor(el, array) {
		
		this.el = el;
		this.array = array;
		this.activeLinkClass = 'active';
		
		console.log(el, array)
		this.setListeners();
	}
	
	setListeners() {
		this.setActiveLink();
	}
	
	setActiveLink() {
		this.el.addEventListener('click', ()=> {
			this.array.forEach(el => el.classList.remove(this.activeLinkClass))
			this.el.classList.add(this.activeLinkClass)
		})
	}
}

export default ListLink
