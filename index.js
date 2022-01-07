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
    <h2>Planets</h2>
    </div>
    `
}
const peopleTemplate = () => {
    return `
    <div id='personEntry'>
    <h2>People</h2>
    </div>
    `
}

//Create Lists
const planetList = planets => {
    const planetDiv = document.getElementById('planetEntry');
    planets.forEach(planet => {
        const planetLi = document.createElement('li')
        const planetElement = document.createElement('button');
        planetElement.innerHTML = `${planet.name}`
        planetElement.onclick = function() {
            alert(`Name:${planet.name}
                   Diameter:${planet.diameter} 
                   Terrain:${planet.terrain}`)
        }
        planetDiv.appendChild(planetLi)
        planetLi.appendChild(planetElement)
    })
}

const peopleList = people => {
    const personDiv = document.getElementById('personEntry');
    people.forEach(people => {
        const personLi = document.createElement('li')
        const personElement = document.createElement('button');
        personElement.innerHTML = `${people.name}`
        personElement.onclick = function() {
            alert(`Name:${people.name}
                   Height:${people.height} 
                   Gender:${people.gender}`)
        }
        personDiv.appendChild(personLi)
        personLi.appendChild(personElement)
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
    peopleList();
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
        getPeople();
        renderPeoplePage();
    })
}



//Fetch API Data
const getPlanets = () => {
    fetch(baseUrl + 'planets')
        .then(resp => resp.json())
        .then(planets => planetList(planets.results))
}

const getPeople = () => {
    fetch(baseUrl + 'people')
        .then(resp => resp.json())
        .then(people => peopleList(people.results))
}


//When the DOM Loads

document.addEventListener('DOMContentLoaded', () => {
    renderHomePage();
    homePageLinkEvent();
    planetsLinkEvent();
    peopleLinkEvent();
    getPlanets();
    getPeople();
})