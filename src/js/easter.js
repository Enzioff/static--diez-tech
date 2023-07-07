const box = document.querySelector("[data-easter-box]");

if (box) {
	const coin = document.querySelector("[data-easter-coin]");
	const mushroomContainer = document.querySelector("[data-easter-mushroom]");
	const mushroom = mushroomContainer.querySelector('.mushroom')
	box.addEventListener("click", () => {
		mushroomContainer.classList.add("active");
		setTimeout(()=> {
			mushroom.classList.add('active');
		}, 1000)
		setTimeout(()=> {
			mushroom.style.backgroundImage = 'url("./assets/images/easter-mushroom-surprised.png")'
			mushroom.classList.add('blink')
		}, 3000)
		setTimeout(()=> {
			coin.classList.add('active')
		}, 3200)
	});
}

