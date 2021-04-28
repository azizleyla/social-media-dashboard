const input = document.querySelector('input');
const cardsSingle = document.querySelectorAll('.card__single');
const cardFollowerCounts = document.querySelectorAll('.card__follower-count');
const cardsOverview = document.querySelectorAll('.card__overview');
const cardsViewText = document.querySelectorAll('.card__view-text');
const cardsViewCount = document.querySelectorAll('.card__view-count');
const toggle = document.querySelector('.slider');
input.addEventListener('change', DarkandLightMode);
function isLightMode(isLight) {
    document.querySelector('.header').style.backgroundColor = isLight ? "#f1f3fa" : "#20222f";
    document.querySelector('.header__heading').style.color = isLight ? "#000" : "#fff";
    document.querySelector('.heading-overview').style.color = isLight ? "#63687d" : "#fff";
    cardsSingle.forEach(card => {
        card.style.backgroundColor = isLight ? "#f1f3fa" : "#252b42";
    })
    cardFollowerCounts.forEach(count => {
        count.style.color = isLight ? "#000" : "#fff";
    })
    cardsOverview.forEach(cardOverview => {
        cardOverview.style.backgroundColor = isLight ? "#f1f3fa" : "#252b42";
    })
    cardsViewCount.forEach(cardViewCount => {
        cardViewCount.style.color = isLight ? "#000" : "#fff";
    })
    cardsViewText.forEach(cardViewText => {
        cardViewText.style.color = isLight ? "#63687D" : "#8c98c6"
    })
    toggle.style.background = isLight ? "#979797" : "linear-gradient(225deg, #40db82 0%, #388fe7 98.02%)";
}
function DarkandLightMode() {
    if (input.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        isLightMode(true);
    }
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
        isLightMode(false)
    }
}