//Global


//Node Getters
const mainDiv = () => document.getElementById('main');
const homePageLink = () => document.getElementById('home-link');
const planetsLink = () => document.getElementById('planets-link')
const peopleLink = () => document.getElementById('people-link')

//Templates
const homePageTemplate = () => {
    return `
    <h1 class="center-align">Welcome to Star Wars</h1>
    <h1 class="center-align">Planets and People!</h1>
    `
}
const planetsTemplate = () => {
    return `
    <h1 class="center-align">Planets!</h1>
    `
}
const peopleTemplate = () => {
    return `
    <h1 class="center-align">People!</h1>
    `
}

//Renderers
const renderHomePage = () => {
    mainDiv().innerHTML = homePageTemplate();
}
const renderPlanetsPage = () => {
    mainDiv().innerHTML = planetsTemplate();
}
const renderPeoplePage = () => {
    mainDiv().innerHTML = peopleTemplate();
}

//Events
const homePageLinkEvent = () => {
    homePageLink().addEventListener('click', (e) => {
        e.preventDefault();
        renderHomePage();
    })
}
const planetsLinkEvent = () => {
    planetsLink().addEventListener('click', (e) => {
        e.preventDefault();
        renderPlanetsPage();
    })
}
const peopleLinkEvent = () => {
    peopleLink().addEventListener('click', (e) => {
        e.preventDefault();
        renderPeoplePage();
    })
}

//*****


//When the DOM Loads

document.addEventListener('DOMContentLoaded', () => {
    renderHomePage();
    homePageLinkEvent();
    planetsLinkEvent();
    peopleLinkEvent();
})