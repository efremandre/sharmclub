'use strict'
export function speakers() {

	window.addEventListener('load', () => {
		const grid = document.querySelector('.speakers__grid')

		grid.addEventListener('click', (ev) => {
			let target = ev.target

			if (target.classList.contains('card-speacker__button')) {
				let card = ev.target.parentNode.parentNode.parentNode.parentNode
				let cardClose = ev.target.parentNode.parentNode.parentNode
				if (target.value === 'open') {
					card.classList.add('flipped')
				}

				if (target.value === 'close') {
					cardClose.classList.remove('flipped')
				}
			}
		})
	})
}