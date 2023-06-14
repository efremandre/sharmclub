'use strict'
export function speakersCards() {
	const getCards = async () => {
		const response = await fetch('../../files/speakers.json')
		const data = await response.json()

		return data
	}


	const creatCards = async () => {
		const cardGrid = document.querySelector('.speakers__grid')
		const showMore = document.querySelector('#showMore')
		const DATA = await getCards()

		let current = 6
		const slices = DATA.slice(0, current)

		if (cardGrid) {
			const getOutputCard = (data) => {
				cardGrid.innerHTML += data.map(el => `
				<div class="speakers__card-speacker card-speacker" data-aos="fade-up">
					<div class="card-speacker__body">
						<div class="card-speacker__front">
							<div class="card-speacker__image-block" data-aos="zoom-in">
								<div class="card-speacker__image-wrapper"><img class="hoverEffect" src="${el.image.url}" alt="${el.title.name} ${el.title.surname}" width="340" height="340"></div>
							</div>
							<div class="card-speacker__content">
								<div class="card-speacker__name">
									<h3>${el.title.name} ${el.title.surname}</h3>
								</div>

								<div class="card-speacker__city">
									<p>г. ${el.сity}</p>
								</div>

								<div class="card-speacker__competencies">
									<p>${el.title.competencies}</p>
								</div>

								<div class="card-speacker__buttons">
									<div class="card-speacker__theme">
										<p><span>Тема выступления:</span><br>${el.theme}</p>
									</div>
									${(el.id === 'id') ? `<a target="_blank" href="https://t.me/SHARMFORUM" class="card-speacker__button card-speacker__button_get button">Стать спикером</a> <button value="open" class="card-speacker__button card-speacker__button_get button">Подробнее</button>` : `<button value="open" class="card-speacker__button button">Подробнее о спикере</button>`}
								</div>
							</div>
						</div>
						<div class="card-speacker__back">
							<div class="card-speacker__name">
								<h3>${el.title.name} ${el.title.surname}</h3>
							</div>

							<div class="card-speacker__bio">
								<ul class="card-speacker__list">
								${(el.bio || []).map(bio => `
										<li>${bio.item}</li>
									`).join('')}
								</ul>
							</div>

							<div class="card-speacker__buttons">
								<div class="card-speacker__slogan">
									<p><span>Девиз:</span> ${el.slogan}</p>
								</div>
								<button value="close" class="card-speacker__button card-speacker__button_close button">Закрыть</button>
							</div>
						</div>
					</div>
				</div>`).join('')
			}
			getOutputCard(slices)

			showMore.addEventListener('click', () => {
				current += 3
				const slices = DATA.slice(current, (current + 3))
				if ((current + 3) >= DATA.length) {
					showMore.style.display = 'none'
				}

				getOutputCard(slices)
			})
		}

	}

	creatCards()
}