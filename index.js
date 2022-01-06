//Global


//Node Getters
const mainDiv = () => document.getElementById('main');

//Templates
const homePageTemplate = () => {
    return `
    <h1 class="center-align">Welcome to Star Wars</h1>
    <h1 class="center-align">Planets and People!</h1>
    `
}
const planetsTemplate = () => {
    console.log('planets!')
}
const peopleTemplate = () => {
    console.log('people!')
}

//Renderers
const renderHomePage = () => {
    mainDiv().innerHTML = homePageTemplate();
}

//*****


//When the DOM Loads

document.addEventListener('DOMContentLoaded', () => {
    renderHomePage();
})