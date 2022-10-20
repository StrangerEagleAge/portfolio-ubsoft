var swiper = new Swiper(".mySwiper", {
	// Optional parameters
	direction: 'horizontal',  // vertical, horizontal 
	loop: true,
	speed: 700,
	spaceBetween: 5,

	effect: 'slide', // slide, fade, cube, coverflow, flip, creative, cards
	grabCursor: 'boolean', // false
	loop: 'boolean', // false

	// управление колесом мыши
	mousewheel: {
		invert: false, // false, true
	},

	// управление стрелками клавиатуры
	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},


	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets', // bullets, fraction
		hideOnClick: 'true', // скрыть пагинацию при клике
		clickable: 'true', // переключение при нажатии
		//dynamicBullets: 'true' - не работает

		// кастомный вариант с цифрами на буллетах
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>'
		},

		// Фракция
		//renderFraction: function (currentClass, totalClass) {
		//	return 'Фото <span class="' + currentClass + '"></span>' +
		//		' из ' +
		//		'<span class="' + totalClass + '"></span>';
		//},
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},

	breakpoints: {
		640: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 40,
		},
		1024: {
			slidesPerView: 6,
			spaceBetween: 50,
		},
	}
});



