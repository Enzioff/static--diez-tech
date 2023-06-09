const container = document.querySelector("[data-scroll]");
const track = document.querySelector("[data-scroll-track]");
const box = document.querySelector("[data-box]");
const scrollStep = 1;
let delay = 10;
let interval;
let clone;
let isDragging = false;
let dragStartPos = 0;
let dragEndPos = 0;

function cloneToEnd() {
	clone = box.cloneNode(true);
	track.appendChild(clone);
}

function cloneToStrat() {
	clone = box.cloneNode(true);
	track.prepend(clone);
}

function startScrolling() {
	interval = setInterval(function() {
		if (track.clientWidth < container.clientWidth + 300) {
			cloneToEnd()
		}
		if (!isDragging) {
			container.scrollLeft += scrollStep;
			if (container.scrollLeft >= (container.scrollWidth - container.clientWidth)) {
				addLastEl()
			}
		}
	}, delay);
}

function stopScrolling() {
	clearInterval(interval);
}

function handleMouseDown(e) {
	isDragging = true;
	dragStartPos = e.clientX;
	container.style.cursor = "grabbing";
	stopScrolling();
}

function addFirstEl() {
	if (container.scrollLeft <= 5) {
		track.removeChild(track.firstChild)
	}
	if (container.scrollLeft <= 5) {
		container.scrollLeft += box.clientWidth;
		cloneToStrat();
	}
}

function addLastEl() {
	if (container.scrollLeft >= (container.scrollWidth - container.clientWidth)) {
		track.removeChild(track.lastChild)
	}
	if (container.scrollLeft >= (container.scrollWidth - container.clientWidth)) {
		cloneToEnd();
	}
}

function handleMouseMove(e) {
	if (isDragging) {
		dragEndPos = e.clientX;
		container.scrollLeft -= dragEndPos - dragStartPos;
		container.style.cursor = "grabbing";
		dragStartPos = dragEndPos;
		if (container.scrollLeft <= container.clientWidth) {
			addFirstEl()
		}
		if (container.scrollLeft >= (container.scrollWidth - container.clientWidth)) {
			addLastEl()
		}
	}
}

function handleMouseUp() {
	isDragging = false;
	container.style.cursor = "auto";
}

container.addEventListener("mousedown", handleMouseDown);
container.addEventListener("mousemove", handleMouseMove);
container.addEventListener("mouseup", handleMouseUp);
container.addEventListener("mouseenter", stopScrolling);
container.addEventListener("mouseleave", startScrolling);
container.addEventListener("touchstart", stopScrolling);
container.addEventListener("touchcancel", startScrolling);

startScrolling();