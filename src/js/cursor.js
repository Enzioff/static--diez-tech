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
		buttons = document.getElementsByTagName("button"),
		listItems = document.querySelectorAll("[data-tab]"),
		closeItems = document.querySelectorAll("[data-close]"),
		openItems = document.querySelectorAll("[data-open]"),
		labels = document.getElementsByTagName("label");
	
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
	
	activeCursor(links)
	activeCursor(buttons)
	activeCursor(listItems)
	activeCursor(labels)
	activeCursor(closeItems)
	activeCursor(openItems)
	
	function activeCursor(element) {
		for (let i = 0; i < element.length; i++) {
			element[i].addEventListener('mouseover', ()=> {
				cursor.classList.add('cursor-active');
				aura.classList.add('cursor-active');
			})
			
			element[i].addEventListener('mouseout', ()=> {
				cursor.classList.remove('cursor-active');
				aura.classList.remove('cursor-active');
			})
		}
	}
	
	body.addEventListener('mouseout', ()=> {
		cursor.classList.add('cursor-hidden');
		aura.classList.add('cursor-hidden');
	})
});
