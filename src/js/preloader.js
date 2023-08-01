class Preloader {
	constructor(el) {
		this.preloader = el;
		this.indexScreen = document.querySelector(".main-intro");
		this.title = this.indexScreen.querySelector("[data-title]");
		this.subtitle = this.indexScreen.querySelector("[data-subtitle]");
		this.indexHeader = document.querySelector("[data-header-index]");
		this.timeline = this.indexScreen.querySelector(".main-intro__timeline");
		this.body = document.querySelector("body");
		
		this.setListeners();
	}
	
	setListeners() {
		if (!localStorage.getItem("visited")) {
			localStorage.setItem("visited", "false");
		}
		this.checkFirstVisit();
	}
	
	checkFirstVisit() {
		if (localStorage.getItem("visited") === "false") {
			this.preloader.classList.add("animate");
			this.indexScreen.classList.add("animate");
			this.title.classList.add("animate");
			this.subtitle.classList.add("animate");
			this.indexHeader.classList.add("animate");
			this.timeline.classList.add("animate");
			this.body.style.overflowY = "hidden";
			localStorage.setItem("visited", "true");
		}
		setTimeout(()=> {
			this.body.style.overflowY = "auto";
		}, 1500)
	}
}

export { Preloader };
