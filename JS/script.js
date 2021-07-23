let stockSlider = new Swiper('.slider-stock__container', {
	loop: true,
	autoHeight: true,
	speed: 600,
	slidesPerView: 4,
	spaceBetween: 30,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

let catalogSlider = new Swiper('.catalog-slider__container', {
	loop: true,
	autoHeight: true,
	speed: 600,
	slidesPerView: 1,
	navigation: {
		nextEl: '.catalog__next',
		prevEl: '.catalog__prev',
	},
	pagination: {
		el: '.catalog__nav_text',
		type: 'fraction'
	},
});

var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
	V = 0.2;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
	linkNav[i].addEventListener('click', function (e) { //по клику на ссылку
		e.preventDefault(); //отменяем стандартное поведение
		var w = window.pageYOffset,  // производим прокрутка прокрутка
			hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
		t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
			start = null;
		requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
		function step(time) {
			if (start === null) start = time;
			var progress = time - start,
				r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
			window.scrollTo(0, r);
			if (r != w + t) {
				requestAnimationFrame(step)
			} else {
				location.hash = hash  // URL с хэшем
			}
		}
	}, false);
}