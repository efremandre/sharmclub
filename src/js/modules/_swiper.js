'use strict'
import Swiper, { Autoplay, FreeMode, Lazy, Navigation, Pagination } from 'swiper'

export function swiper() {
	const catalog = document.querySelector('.place__slider-container')
	if (catalog) {
		const port = new Swiper('.mySwiper', {
			modules: [Navigation, Pagination, Autoplay, FreeMode, Lazy],
			lazy: true,
			loop: true,
			speed: 1000,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				dynamicBullets: true
			},
			autoplay: {
				delay: 5000,
			},
			breakpoints: {
				989: {
					slidesPerView: 1,
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					}
				},
			},
		})
	}
}