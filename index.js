//Global
const baseUrl = "https://swapi.dev/api/"
const infoDiv = document.getElementById('info')
infoDiv.className = 'container information'

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
    <img src="https://cdn.pixabay.com/photo/2017/09/22/15/26/figures-2775971_1280.png" alt="star wars image">
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
    infoDiv.innerHTML = ''
    planets.forEach(planet => {
        const planetLi = document.createElement('li')
        const planetElement = document.createElement('button');
        planetElement.innerHTML = `${planet.name}`
        planetElement.onclick = () => {
            infoDiv.innerHTML = ''
            const infoName = document.createElement('h3')
            infoName.innerText = `Name: ${planet.name}`
            infoDiv.appendChild(infoName)
            const infoDiameter = document.createElement('h3')
            infoDiameter.innerText = `Diameter: ${planet.diameter}`
            infoDiv.appendChild(infoDiameter)
            const infoTerrain = document.createElement('h3')
            infoTerrain.innerText = `Terrain: ${planet.terrain}`
            infoDiv.appendChild(infoTerrain)
            const infoClimate = document.createElement('h3')
            infoClimate.innerText = `Climate: ${planet.climate}`
            infoDiv.appendChild(infoClimate)
            const infoPopulation = document.createElement('h3')
            infoPopulation.innerText = `Population: ${planet.population}`
            infoDiv.appendChild(infoPopulation)
        }
        planetDiv.appendChild(planetLi)
        planetLi.appendChild(planetElement)
    })
}

const peopleList = people => {
    const personDiv = document.getElementById('personEntry');
    infoDiv.innerHTML = ''
    people.forEach(people => {
        const personLi = document.createElement('li')
        const personElement = document.createElement('button');
        personElement.innerHTML = `${people.name }`
        personElement.onclick = () => {
            infoDiv.innerHTML = ''
            const infoPeopleName = document.createElement('h3')
            infoPeopleName.innerText = `Name: ${people.name}`
            infoDiv.appendChild(infoPeopleName)
            const infoHeight = document.createElement('h3')
            infoHeight.innerText = `Height: ${people.height}`
            infoDiv.appendChild(infoHeight)
            const infoGender = document.createElement('h3')
            infoGender.innerText = `Gender: ${people.gender}`
            infoDiv.appendChild(infoGender)
            const infoHairColor = document.createElement('h3')
            infoHairColor.innerText = `Hair Color: ${people.hair_color}`
            infoDiv.appendChild(infoHairColor)
            const infoBirthYear = document.createElement('h3')
            infoBirthYear.innerText = `Birth Year: ${people.birth_year}`
            infoDiv.appendChild(infoBirthYear)
        }
        personDiv.appendChild(personLi)
        personLi.appendChild(personElement)
    })
}


//Renderers
const renderHomePage = () => {
    mainDiv().innerHTML = homePageTemplate();
    infoDiv.innerHTML = ''
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