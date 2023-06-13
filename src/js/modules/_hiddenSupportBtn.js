'use strict'

export function hiddenSupportBtn() {

	const input = document.querySelectorAll('.input')
	const btnUp = document.querySelector('.button-up')
	const btnAsk = document.querySelector('.ask-btn')

	input.forEach(el => {
		el.addEventListener('focus', () => {
			btnUp.style.display = 'none'
			btnAsk.style.display = 'none'
		})
	})

	input.forEach(el => {
		el.addEventListener('blur', () => {
			btnUp.style.display = 'block'
			btnAsk.style.display = 'block'
		})
	})
}