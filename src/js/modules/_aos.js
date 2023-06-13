'use strict'
import AOS from 'aos'

export function aos() {
	AOS.init({
		duration: 1000,
		anchorPlacement: 'top-bottom',
		once: true
	})
}