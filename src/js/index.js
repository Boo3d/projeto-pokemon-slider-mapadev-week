const btnNext = document.getElementById('btnNext')
const btnBack = document.getElementById('btnBack')
const cards = document.querySelectorAll('.card')
let selectedCard = 0

const hideSelectedCard = () => {
    const previousCard = document.querySelector('.selected')
    previousCard.classList.remove('selected')
}

const showSelectedCard = (cardIndex) => cards[cardIndex].classList.add('selected')

btnNext.addEventListener('click', () => {
    hideSelectedCard()

    if (selectedCard === cards.length - 1) selectedCard = 0
    else selectedCard++

    showSelectedCard(selectedCard)
})

btnBack.addEventListener('click', () => {
    hideSelectedCard()

    if (!selectedCard) selectedCard = cards.length - 1
    else selectedCard--

    showSelectedCard(selectedCard)
})