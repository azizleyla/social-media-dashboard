const firstData = [
    { socialMedia: 'facebook', account: "@nathanf", followerCount: "1987", todayStats: 12, increase: true, border: "blue" },
    { socialMedia: 'twitter', account: "@nathanf", followerCount: "1044", todayStats: 99, increase: true, border: "blue" },
    { socialMedia: 'instagram', account: "@realnathanf", followerCount: '11k', todayStats: 1099, increase: true, border: "linear" },
    { socialMedia: 'youtube', account: "Nathan F.", followerCount: "8239", todayStats: 144, increase: false, border: "red" }
]
const card = document.querySelector('.card');
firstData.forEach(data => {
    const { socialMedia, account, followerCount, todayStats, increase, border } = data;
    const html = `
     <div class="card__single card__single--${border}">
     <div class="card__account">
        <img src="images/icon-${socialMedia}.svg">
        <span>${account}</span>
    </div>
    <div class="card__follower">
        <span class="card__follower-count">${followerCount}</span>
        <span class="card__follower-text">${socialMedia === 'youtube' ? "Subscribes" : "Followers"}</span>
    </div>
    <div class="${increase ? "card__date" : "card__date card__date--red"}">
        <img src="images/${increase ? "arrow" : "arrow2"}.png" >
            <p>
                ${todayStats} today
        </p>
    </div >
    </div >
        `
    card.insertAdjacentHTML('beforeend', html);

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
    const html = `
        <div class="card__overview" >
    <div class="card__view">
        <p class="card__view-text">${types}</p>
        <p class="card__view-count">${number}</p>
    </div>
    <div class="card__social-media">
        <img src="images/icon-${socialMedia}.svg">
        <div class="${increase ? "card__date" : "card__date card__date--red"}">
            <img src="images/${increase ? "arrow.png" : "arrow2.png"}">
            <p>${percentage}</p>
        </div>
    </div>
 </div>
    `
    card2.insertAdjacentHTML('beforeend', html)

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
const heading = document.querySelector('.heading-overview');
heading.textContent = new Date().toDateString()