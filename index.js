//Global
const baseUrl = "https://swapi.dev/api/"
let planets = [];

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
    <div id='planetEntry'>
    <h5 class="center-align">First 10 Planets</h1>
    </div>
    `
}
const peopleTemplate = () => {
    return `
    <h1 class="center-align">People!</h1>
    `
}

//Create Lists
const planetList = planets => {
    const planetDiv = document.getElementById('planetEntry');
    planets.forEach(planet => {
        const planetLi = document.createElement('li')
        const planetElement = document.createElement('a');
        const linkText = document.createTextNode(`${planet.name}`)
        planetLi.appendChild(planetElement)
        planetElement.appendChild(linkText)
        planetElement.title = `${planet.name}`
        planetElement.href = `${planet.url}`
        planetDiv.appendChild(planetLi);
    })
}


//Renderers
const renderHomePage = () => {
    mainDiv().innerHTML = homePageTemplate();
}
const renderPlanetsPage = () => {
    mainDiv().innerHTML = planetsTemplate();
    planetList();
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
        getPlanets();
        renderPlanetsPage();
    })
}
const peopleLinkEvent = () => {
    peopleLink().addEventListener('click', (e) => {
        e.preventDefault();
        renderPeoplePage();
    })
}



//Fetch API Data
const getPlanets = () => {
    fetch(baseUrl + 'planets')
        .then(resp => resp.json())
        .then(planets => planetList(planets.results))
}


//When the DOM Loads

document.addEventListener('DOMContentLoaded', () => {
    renderHomePage();
    homePageLinkEvent();
    planetsLinkEvent();
    peopleLinkEvent();
    getPlanets();
})