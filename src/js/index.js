import { aos } from "./modules/_aos.js"
import { burger } from './modules/_burger.js'
import { sendForm } from "./modules/_form.js"
import { changeBgScroll } from "./modules/_changeBgScroll.js"
import { hello } from './modules/_hello.js'
import { pressDawn } from "./modules/_pressDawn.js"
import { pressUp } from "./modules/_pressUp.js"
import { scrollHeader } from "./modules/_scrollHeader.js"
import { speakers } from "./modules/_speakers.js"
import { speakersCards } from "./modules/_speakersCards.js"
import { swiper } from "./modules/_swiper.js"

try {
	hello()
	burger()
	aos()
	scrollHeader()
	swiper()
	pressDawn()
	pressUp()
	speakersCards()
	speakers()
	sendForm()
	changeBgScroll()
} catch (error) {
	console.error(error.message)
}