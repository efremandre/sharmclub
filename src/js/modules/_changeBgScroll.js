'use strict'

export function changeBgScroll() {
	const magicController = new ScrollMagic.Controller()
	const main = document.querySelector('.main')

	document.querySelectorAll('section[data-bg]')
		.forEach(section => {
			const bgColor = section.dataset.bg
			const sectionName = section.dataset.name || ''

			new ScrollMagic.Scene({
				triggerElement: section,
				offset: -50,
			})
				.setClassToggle(document.body, sectionName)
				.on('progress', event => {
					const target = event.target.triggerElement()
					main.style.backgroundColor = bgColor
					target.classList.add('active')
				})
				.duration(function () {
					return this.triggerElement().clientHeight
				})
				.addTo(magicController)
		})
}