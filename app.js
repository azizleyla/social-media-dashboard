const firstData = [
    { socialMedia: 'facebook', account: "@nathanf", followerCount: "1987", todayStats: 12, increase: true, border: "blue" },
    { socialMedia: 'twitter', account: "@nathanf", followerCount: "1044", todayStats: 99, increase: true, border: "blue" },
    { socialMedia: 'instagram', account: "@realnathanf", followerCount: '11k', todayStats: 1099, increase: true, border: "linear" },
    { socialMedia: 'youtube', account: "Nathan F.", followerCount: "8239", todayStats: 144, increase: false, border: "red" }
]
const card = document.querySelector('.card');
firstData.forEach(data => {
    const { socialMedia, account, followerCount, todayStats, increase, border } = data;
    const div = document.createElement('div');
    div.setAttribute('class', border === "blue" ? "card__single card__single--blue" : border === "red" ? "card__single card__single--red" : border === "linear" ? "card__single card__single--linear" : false);
    const accountDiv = document.createElement('div');
    accountDiv.className = "card__account";
    const img = document.createElement('img');
    img.src = `images/icon-${socialMedia}.svg`;

    const span = document.createElement('span')
    span.textContent = account;
    accountDiv.append(img, span);

    const divFollower = document.createElement('div');
    divFollower.className = "card__follower";
    const spanCount = document.createElement('span');
    spanCount.className = "card__follower-count";
    spanCount.textContent = followerCount;
    const spanText = document.createElement('span');
    spanText.textContent = socialMedia === "youtube" ? "Subscribes" : "Followers";
    spanText.className = "card__follower-text";
    divFollower.append(spanCount, spanText);
    const divDate = document.createElement('div');

    divDate.setAttribute('class', `${increase ? "card__date" : "card__date card__date--red"}`)
    const img2 = document.createElement('img');

    const p = document.createElement('p');
    p.textContent = `${todayStats} Today`
    img2.src = `${increase ? "images/arrow.png" : "images/arrow2.png"}`;
    divDate.append(img2, p);

    div.append(accountDiv, divFollower, divDate);

    card.append(div);

})
const card2 = document.querySelectorAll('.card')[1];
const secondData = [
    { types: "Page Views", socialMedia: "facebook", number: "87", percentage: "3%", increase: true },
    { types: "Likes", socialMedia: "facebook", number: "52k", percentage: "2%", increase: false },
    { types: "Likes", socialMedia: "instagram", number: "5462", percentage: "2257%", increase: true },
    { types: "Profile Views", socialMedia: "instagram", number: "52k", percentage: "1375%", increase: true },
    { types: "Retweets", socialMedia: "twitter", number: "117", percentage: "303%", increase: true },
    { types: "Likes", socialMedia: "twitter", number: "507", percentage: "553", increase: true },
    { types: "Likes", socialMedia: "youtube", number: "105", percentage: "19%", increase: false },
    { types: "Total Views", socialMedia: "youtube", number: "1407", percentage: "12%", increase: false },

];
//Overview Cards
secondData.forEach(data => {
    const { types, socialMedia, number, percentage, increase } = data;
    const cardOverview = document.createElement('div');
    cardOverview.setAttribute('class', 'card__overview')

    const viewCard = document.createElement('div');
    viewCard.className = "card__view";
    const viewText = document.createElement('p');
    viewText.setAttribute('class', "card__view-text");
    viewText.textContent = types;
    const viewCount = document.createElement('p');
    viewCount.setAttribute('class', "card__view-count");
    viewCount.textContent = number;
    viewCard.append(viewText, viewCount);

    const socialMediaCard = document.createElement('div');
    socialMediaCard.setAttribute('class', "card__social-media");
    const socialMediaImg = document.createElement('img');
    socialMediaImg.setAttribute('class', 'icon');
    socialMediaImg.src = `images/icon-${socialMedia}.svg`;

    const cardPercentage = document.createElement('div');

    cardPercentage.setAttribute('class', `${increase ? 'card__date' : "card__date card__date--red"}`);
    const iconUporDown = document.createElement('img');
    iconUporDown.src = `${increase ? "images/arrow.png" : "images/arrow2.png"}`;
    const percentageElement = document.createElement('p');
    percentageElement.textContent = percentage;
    cardPercentage.append(iconUporDown, percentageElement);
    socialMediaCard.append(socialMediaImg, cardPercentage);
    cardOverview.append(viewCard, socialMediaCard);
    card2.append(cardOverview);

})




//Light and Dark Mode
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