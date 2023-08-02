import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", () => {
	
	const body = document.querySelector("body");
	
	body.addEventListener("mousemove", (evt) => {
		mouseCoords(evt)
		cursor.classList.remove('cursor-hidden');
		aura.classList.remove('cursor-hidden');
	});
	
	const cursor = document.getElementById("cursor"),
		aura = document.getElementById("aura"),
		links = document.getElementsByTagName("a"),
		buttons = document.getElementsByTagName("button");
	
	let mouseX = 0, mouseY = 0, posX = 0, posY = 0;
	
	function mouseCoords(evt) {
		mouseX = evt.pageX;
		mouseY = evt.pageY;
	}
	
	gsap.to({}, .01, {
		repeat: -1,
		
		onRepeat: ()=> {
			posX += (mouseX - posX) / 5;
			posY += (mouseY - posY) / 5;
			
			gsap.set(cursor, {
				css: {
					left: mouseX,
					top: mouseY,
				}
			})
			
			gsap.set(aura, {
				css: {
					left: posX - 24,
					top: posY - 24,
				}
			})
		}
	});
	
	
	for (let i = 0; i < links.length; i++) {
		links[i].addEventListener('mouseover', ()=> {
			cursor.classList.add('cursor-active');
			aura.classList.add('cursor-active');
		})
		
		links[i].addEventListener('mouseout', ()=> {
			cursor.classList.remove('cursor-active');
			aura.classList.remove('cursor-active');
		})
	}
	
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('mouseover', ()=> {
			cursor.classList.add('cursor-active');
			aura.classList.add('cursor-active');
		})
		
		buttons[i].addEventListener('mouseout', ()=> {
			cursor.classList.remove('cursor-active');
			aura.classList.remove('cursor-active');
		})
	}
	
	body.addEventListener('mouseout', ()=> {
		cursor.classList.add('cursor-hidden');
		aura.classList.add('cursor-hidden');
	})
});
