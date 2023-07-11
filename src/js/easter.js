const coin = document.querySelector("[data-easter-coin]");
if (coin) {
	const boxes = document.querySelectorAll("[data-easter-box]");
	const mushroomContainer = document.querySelector("[data-easter-mushroom]");
	const mushroom = mushroomContainer.querySelector('.mushroom')
	boxes.forEach(box => {
		box.addEventListener("click", () => {
			mushroomContainer.classList.add("active");
			if (window.innerWidth > 1200) {
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
			} else {
					mushroom.classList.add('active');
				setTimeout(()=> {
					coin.classList.add('active')
				}, 1500)
				console.log(mushroom.pageXOffset)
			}
		});
	})
}

