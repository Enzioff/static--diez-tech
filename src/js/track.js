const clients = document.querySelector("[data-clients]");
const track = document.querySelector("[data-client-track]");

const box = document.querySelector("[data-box]");

let clone;
box.style.animationName = "slideSponsors";

function moveTrack() {
	clone = box.cloneNode(true);
	track.insertAdjacentElement("beforeend", clone);
}

for (let i = 0; i < 2; i++) {
	moveTrack();
}

