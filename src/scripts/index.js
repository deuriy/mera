document.addEventListener('DOMContentLoaded', function() {
	const projectsSwiper = new Swiper('.ProjectsSwiper', {
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},

		navigation: {
			nextEl: '.SwiperBtn-next',
			prevEl: '.SwiperBtn-prev',
			disabledClass: 'SwiperBtn-disabled'
		},
	});
});