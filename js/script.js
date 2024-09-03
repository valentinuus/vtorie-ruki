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


//WIDTH SWIPER-SCROLL
let widthSliderMain = document.querySelector('.swiper-main');
let widthScrollbar = document.querySelector('.swiper-scrollbar');
new ResizeObserver(() => widthScrollbar.style.width = widthSliderMain.offsetWidth + 'px').observe(widthSliderMain);
//WIDTH SWIPER-SCROLL


//ACCORDION
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
//ACCORDION



// // MOUSEFOLLOWER
const isTouchDevice = 'ontouchstart' in window;

const createCursorFollower = () => {
	const $el = document.querySelector('.cursor-follower');

	// Each time the mouse coordinates are updated, we need to pass the values to gsap in order to animate the element
	window.addEventListener('mousemove', (e) => {
		const { target, x, y } = e;
		const isTargetLinkOrBtn = target?.closest('a') || target?.closest('button');
		gsap.to($el, {
			x: x + 3,
			y: y + 3,
			duration: 0.8,
			ease: 'power4', // More easing options here: https://gsap.com/docs/v3/Eases/
			opacity: isTargetLinkOrBtn ? 0.2 : 1,
			transform: `scale(${isTargetLinkOrBtn ? 3 : 1})`,
		});
	});
}

// Only create the cursor follower if device isn't touchable
if (!isTouchDevice) {
	createCursorFollower();
}
// // MOUSEFOLLOWER


// // GSAP
// gsap.to('.gsap-btn', {

// })

let btn = document.querySelectorAll('.move-btn').forEach(btn => {
	btn.addEventListener('mousemove', (e) => {
		let x = e.offsetX;
		let y = e.offsetY;
		let btnWidht = btn.clientWidth;
		let btnHeight = btn.clientHeight;
		let transX = (x - btnWidht / 2);
		let transY = (y - btnHeight / 2);
		btn.style.transform = `translateX(${transX}px) translateY(${transY}px)`
	})
	btn.addEventListener('mouseout', (e) => {
		btn.style.transform = '';
	})
})

let btnLarge = document.querySelectorAll('.move-btn-large').forEach(btn => {
	btn.addEventListener('mousemove', (e) => {
		let x = e.offsetX;
		let y = e.offsetY;
		let btnWidht = btn.clientWidth;
		let btnHeight = btn.clientHeight;
		let transX = (x - btnWidht / 1);
		let transY = (y - btnHeight / 1);
		btn.style.transform = `translateX(${transX}px) translateY(${transY}px)`
	})
	btn.addEventListener('mouseout', (e) => {
		btn.style.transform = '';
	})
})

let btnRevievs = document.querySelectorAll('.reviwes__btn').forEach(btn => {
	btn.addEventListener('mousemove', (e) => {
		let x = e.offsetX;
		let y = e.offsetY;
		let btnWidht = btn.clientWidth;
		let btnHeight = btn.clientHeight;
		let transX = (x - btnWidht / 4);
		let transY = (y - btnHeight / 2);
		btn.style.transform = `translateX(${transX}px) translateY(${transY}px)`
	})
	btn.addEventListener('mouseout', (e) => {
		btn.style.transform = '';
	})
})







	///////////////////////////////
	