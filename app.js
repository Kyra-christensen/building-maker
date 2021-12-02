// import functions and grab DOM elements
import { makeStatsString } from './utils.js';

const waterfrontDropdown = document.querySelector('#waterfront-dropdown');
const skylineDropdown = document.querySelector('#skyline-dropdown');
const castleDropdown = document.querySelector('#castle-dropdown');
const sloganInputEl = document.querySelector('#slogan-input');
const sloganButton = document.querySelector('#slogan-button');
const sloganListEl = document.querySelector('.list');
const sloganCountEl = document.querySelector('.count');
const waterfrontImg = document.querySelector('#waterfront-img');
const skylineImg = document.querySelector('#skyline-img');
const castleImg = document.querySelector('#castle-img');

// let state
let waterfrontCount = 0;
let skylineCount = 0;
let castleCount = 0;

let sloganArray = [];

// set event listeners
waterfrontDropdown.addEventListener('change', () =>{
// get user input
    const id = waterfrontDropdown.value; 

    waterfrontImg.src = `./assets/waterfront-${id}.jpeg`;
// use user input to update state
    waterfrontCount++;
// update DOM to reflect the new state
    // sloganCountEl.textContent = `You changed the waterfront ${waterfrontCount} times`;
    displayStats();
});

skylineDropdown.addEventListener('change', () => {
    const id = skylineDropdown.value;

    skylineImg.src = `./assets/skyline-${id}.jpeg`;
    
    skylineCount++;
    
    // sloganCountEl.textContent = `You changed the skyline ${skylineCount} times`;
    displayStats();
});

castleDropdown.addEventListener('change', () => {
    const id = castleDropdown.value;

    castleImg.src = `./assets/castle-${id}.jpeg`;
    
    castleCount++;
    
    // sloganCountEl.textContent = `You changed the skyline ${castleCount} times`;
    displayStats();
});

sloganButton.addEventListener('click', () =>{
    const slogan = sloganInputEl.value;

    sloganArray.push(slogan);

    sloganInputEl.value = '';

    // update the dom to show the new slogans ( call a function to do this)
    displaySlogan();
});

function displaySlogan() {
    sloganListEl.textContent = '';

    for (let slogan of sloganArray) {
        const p = document.createElement('p');
        p.classList.add('slogan');
        p.textContent = slogan;

        sloganListEl.append(p);
    }
}

function displayStats() {
    const statsString = makeStatsString(waterfrontCount, skylineCount, castleCount);
    sloganCountEl.textContent = statsString;
}