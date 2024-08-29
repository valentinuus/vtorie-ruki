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
	// autoplay: {
	// 	delay: 2500,
	// 	disableOnInteraction: false,
	// },
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

let link = document.querySelector('.swiper-main__swiper-wrapper');
let border = document.querySelector('.swiper-scrollbar');
new ResizeObserver(() => border.style.width = link.offsetWidth + 'px').observe(link);



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