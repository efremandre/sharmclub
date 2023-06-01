'use strict'
export function speakersCards() {
	const getCards = async () => {
		const response = await fetch('../../files/speakers.json')
		const data = await response.json()
		return data
	}

	const creatCards = async () => {
		const DATA = await getCards()

		const cardGrid = document.querySelector('.speakers__grid')
		if (cardGrid) {
			const getOutputCard = (data) => {
				cardGrid.innerHTML = data.map(el =>
					`
					<div class="speakers__card-speacker card-speacker" data-aos="fade-up">
				<div class="card-speacker__body">
					<div class="card-speacker__front">
						<div class="card-speacker__image-block" data-aos="zoom-in">
							<div class="card-speacker__image-wrapper"><img class="hoverEffect" src="${el.image.url}" alt="${el.title.name} ${el.title.surname}"></div>
						</div>
						<div class="card-speacker__content">
							<div class="card-speacker__name">
								<h3>${el.title.name} ${el.title.surname}</h3>
							</div>

							<div class="card-speacker__competencies">
								<p>${el.title.competencies}</p>
							</div>

							<div class="card-speacker__buttons">
								<div class="card-speacker__theme">
									<p><span>Тема выступления:</span><br>${el.theme}</p>
								</div>
								<button value="open" class="card-speacker__button button">Подробнее о спикере</button>
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
								<p><span>Девиз:</span> Возможности женщины безграничны</p>
							</div>
							<button value="close" class="card-speacker__button button">Закрыть</button>
						</div>
					</div>
				</div>
			</div>
					`
				).join('')
			}

			getOutputCard(DATA)
		}
	}

	creatCards()
}