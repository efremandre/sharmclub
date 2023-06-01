'use strict'

export function askBtn() {
	let shareBtn = document.querySelector(".trigger")
	let share = document.querySelectorAll(".sharing-button")

	shareBtn.addEventListener("click", () => {
		share.forEach(el => {
			el.classList.toggle("active")
		})

	})
}