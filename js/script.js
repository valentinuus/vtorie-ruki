// test PC or mobile
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};
if (isMobile.any()) {
	document.body.classList.add('_touch');
	let menuArrows = document.querySelectorAll('.menu__arrow');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener("click", function (e) {
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}
} else {
	document.body.classList.add('_pc');
}
// test PC or mobile

// testWebP
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support === true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});
// testWebP

//burger
const burger = document.querySelector('[data-burger]');
const nav = document.querySelector('[data-nav]');
const body = document.body;
const navItems = nav.querySelectorAll('a');

burger.addEventListener('click', () => {
	body.classList.toggle('stop--scroll')
	burger.classList.toggle('burger--active');
	nav.classList.toggle('nav--visible');
});

navItems.forEach(el => {
	el.addEventListener('click', () => {
		body.classList.remove('stop--scroll')
		burger.classList.remove('burger--active');
		nav.classList.remove('nav--visible');
	});
});
//burger


//hero slider

const sliderMain = document.querySelector('.swiper-main');
const sliderThumbs = document.querySelector('.swiper-thumbs');
const swiperReviwes = document.querySelector('.swiper-reviwes');

// swiper-main
let mySwiper = new Swiper(sliderMain, {
	slidesPerView: 1,
	spaceBetween: 10,
	pagination: '.swiper-thumbs',
	effect: "fade",
	scrollbar: {
		el: ".swiper-scrollbar"
	},
});

// swiper-thumbs
let mySwiperNav = new Swiper(sliderThumbs, {
	slidesPerView: 1,
	spaceBetween: 10,
	pagination: '.swiper',
	effect: "fade",
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
});

const swipeAllSliders = (index) => {
	mySwiper.slideTo(index);
	mySwiperNav.slideTo(index);
}
mySwiper.on('slideChange', () => swipeAllSliders(mySwiper.activeIndex));
mySwiperNav.on('slideChange', () => swipeAllSliders(mySwiperNav.activeIndex));



// swiper-reviwes
let mySwiperReviwes = new Swiper(swiperReviwes, {
	slidesPerView: 1,
	spaceBetween: 16,
	loop: true,
	navigation: {
		nextEl: ".swiper-reviwes__swiper-button-next",
		prevEl: ".swiper-reviwes__swiper-button-prev",
	},
	breakpoints: {
		900: {
			slidesPerView: 2,
			spaceBetween: 16,
		},
	},
});


//width swiper-scroll
let widthSliderMain = document.querySelector('.swiper-main');
let widthScrollbar = document.querySelector('.swiper-scrollbar');
new ResizeObserver(() => widthScrollbar.style.width = widthSliderMain.offsetWidth + 'px').observe(widthSliderMain);
//width swiper-scroll


//accordion
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
	const itemToggle = this.getAttribute('aria-expanded');

	for (i = 0; i < items.length; i++) {
		items[i].setAttribute('aria-expanded', 'false');
	}
	if (itemToggle == 'false') {
		this.setAttribute('aria-expanded', 'true');
	}
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
//accordion



// // MouseFollower
// const isTouchDevice = 'ontouchstart' in window;

// const createCursorFollower = () => {
// 	const $el = document.querySelector('.cursor-follower');

// 	// Each time the mouse coordinates are updated, we need to pass the values to gsap in order to animate the element
// 	window.addEventListener('mousemove', (e) => {
// 		const { target, x, y } = e;

// 		const isTargetLinkOrBtn = target?.closest('a') || target?.closest('button');

// 		gsap.to($el, {
// 			x: x + 3,
// 			y: y + 3,
// 			duration: 0.8,
// 			ease: 'power4', // More easing options here: https://gsap.com/docs/v3/Eases/
// 			opacity: isTargetLinkOrBtn ? 0.2 : 1,
// 			transform: `scale(${isTargetLinkOrBtn ? 3 : 1})`,
// 		});
// 	});
// }

// // Only create the cursor follower if device isn't touchable
// if (!isTouchDevice) {
// 	createCursorFollower();
// }
// // MouseFollower




/////// temp
console.clear();
const element = document.querySelector(".cursor");
const target = document.querySelector(".target");
const text = document.querySelector(".text");
class Cursor {
	constructor(el, target, text) {
		this.el = el;
		this.bind();
	}

	bind() {
		document.addEventListener("mousemove", this.move.bind(this), false);
	}

	move(e) {
		const cursorPosition = {
			left: e.clientX,
			top: e.clientY
		};
		for (let i = 0; i < document.querySelectorAll(".target").length; i++) {
			let single = document.querySelectorAll(".target")[i];
			const triggerDistance = single.getBoundingClientRect().width;
			const targetPosition = {
				left:
					single.getBoundingClientRect().left +
					single.getBoundingClientRect().width / 2,
				top:
					single.getBoundingClientRect().top +
					single.getBoundingClientRect().height / 2
			};
			const distance = {
				x: targetPosition.left - cursorPosition.left,
				y: targetPosition.top - cursorPosition.top
			};
			const angle = Math.atan2(distance.x, distance.y);
			const hypotenuse = Math.sqrt(
				distance.x * distance.x + distance.y * distance.y
			);
			if (hypotenuse < triggerDistance) {
				if (
					single.getBoundingClientRect().right +
					single.getBoundingClientRect().width / 2 >
					cursorPosition.left
				) {
					TweenMax.to(this.el, 0.2, {
						left: targetPosition.left - (Math.sin(angle) * hypotenuse) / 2,
						top: targetPosition.top - (Math.cos(angle) * hypotenuse) / 2,
						height: single.clientHeight,
						width: single.clientWidth
					});
					TweenMax.to(single.querySelector(".text"), 0.2, {
						x: -((Math.sin(angle) * hypotenuse) / 2),
						y: -((Math.cos(angle) * hypotenuse) / 2)
					});
					break;
				}
			} else {
				TweenMax.to(this.el, 0.2, {
					left: cursorPosition.left,
					top: cursorPosition.top,
					height: "12px",
					width: "12px"
				});

				TweenMax.to(single.querySelector(".text"), 0.2, {
					x: 0,
					y: 0
				});
			}
		}
	}
}
const cursor = new Cursor(element, target);
