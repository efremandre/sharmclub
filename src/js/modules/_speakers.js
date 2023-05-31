'use strict'
export function speakers() {
	const card = document.querySelector('.card-speacker__body')
	const btn = document.querySelectorAll('.card-speacker__button')

	if (btn) {
		btn.forEach(el => {
			el.addEventListener('click', (ev) => {
				let targest = ev.target.parentNode.parentNode.parentNode.parentNode
				let targestClose = ev.target.parentNode.parentNode.parentNode
				let targestButton = ev.target

				if (targestButton.value === 'open') {
					targest.classList.add('flipped')

					setTimeout(() => {
						targest.classList.remove('flipped')
					}, 7000)
				}

				if (targestButton.value === 'close') {
					targestClose.classList.remove('flipped')
				}
			})
		})
	}
}