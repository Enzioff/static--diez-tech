class Track {
	constructor(el) {
		this.el = el;
		this.track = this.el.querySelector("[data-scroll-track]");
		this.box = this.el.querySelector("[data-box]");
		this.scrollStep = 1;
		this.delay = 10;
		this.interval = null;
		this.clone = null;
		this.isDragging = false;
		this.dragStartPos = 0;
		this.dragEndPos = 0;
		this.direction = this.el.dataset.direction;
		
		this.setListeners();
		
	}
	
	setListeners() {
		this.startScrolling();
		this.el.addEventListener("mousedown", this.handleMouseDown.bind(this));
		this.el.addEventListener("mousemove", this.handleMouseMove.bind(this));
		this.el.addEventListener("mouseup", this.handleMouseUp.bind(this));
		this.el.addEventListener("mouseenter", this.stopScrolling.bind(this));
		this.el.addEventListener("mouseleave", this.startScrolling.bind(this));
	}
	
	cloneToEnd() {
		this.clone = this.box.cloneNode(true);
		this.track.appendChild(this.clone);
	}
	
	cloneToStart() {
		this.clone = this.box.cloneNode(true);
		this.track.prepend(this.clone);
	}
	
	startScrolling() {
		this.interval = setInterval(() => {
			if (this.track.clientWidth <= this.el.clientWidth) {
				this.cloneToEnd();
				this.cloneToEnd();
			}
			if (!this.isDragging) {
				if (this.direction === "right") {
					this.el.scrollLeft -= this.scrollStep;
				} else {
					this.el.scrollLeft += this.scrollStep;
				}
				if (this.el.scrollLeft >= (this.el.scrollWidth - this.el.clientWidth)) {
					this.addLastEl();
				}
				if (this.el.scrollLeft === 0) {
					this.addFirstEl();
				}
			}
		}, this.delay);
		this.isDragging = false;
	}
	
	stopScrolling() {
		clearInterval(this.interval);
	}
	
	handleMouseDown(e) {
		this.isDragging = true;
		this.dragStartPos = e.clientX;
		this.el.style.cursor = "grabbing";
		this.stopScrolling();
	};
	
	addFirstEl() {
		if (this.el.scrollLeft <= 0) {
			this.track.removeChild(this.track.firstChild);
		}
		if (this.el.scrollLeft <= 0) {
			this.cloneToStart();
			this.el.scrollLeft += this.box.clientWidth + 20;
		}
	}
	
	addLastEl() {
		if (this.el.scrollLeft >= (this.el.scrollWidth - this.el.clientWidth)) {
			this.track.removeChild(this.track.lastChild);
		}
		if (this.el.scrollLeft >= (this.el.scrollWidth - this.el.clientWidth)) {
			this.cloneToEnd();
		}
	}
	
	handleMouseMove(e) {
		if (this.isDragging) {
			this.dragEndPos = e.clientX;
			this.el.scrollLeft -= this.dragEndPos - this.dragStartPos;
			this.el.style.cursor = "grabbing";
			this.dragStartPos = this.dragEndPos;
			if (this.el.scrollLeft <= this.el.clientWidth) {
				this.addFirstEl();
			}
			if (this.el.scrollLeft >= (this.el.scrollWidth - this.el.clientWidth)) {
				this.addLastEl();
			}
		}
	}
	
	handleMouseUp() {
		this.isDragging = false;
		this.el.style.cursor = "auto";
	}
}

export { Track };
