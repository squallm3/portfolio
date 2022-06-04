//Variables

//Menu
const menuButton = document.getElementById('button');
const navMenu = document.getElementById('nav');
const page = document.getElementById('main');

//Descriptions
const pKelvin = document.getElementById('plusKelvin');
const kelvinDesc = document.getElementById('kelvin');
const pWine = document.getElementById('plusWine');
const wineDesc = document.getElementById('wine');
const pBroadway = document.getElementById('plusBroadway');
const broadwayDesc = document.getElementById('broadway');

//Functions

const hideMenu = () => {
    navMenu.style.display = "none";
}

const showMenu = () => {
    // navMenu.style.display = "block";
    if (navMenu.style.display !== "none") {
        navMenu.style.display = "none";
      } else {
        navMenu.style.display = "block";
      }
}

const showDescription = () => {
    if (kelvinDesc.style.display !== "none") {
        kelvinDesc.style.display = "none";
      } else {
        kelvinDesc.style.display = "block";
      }
}

//Listeners

//Menu
menuButton.onclick = showMenu;
navMenu.onmouseleave = hideMenu;
page.onclick = hideMenu;

//Descriptions
pKelvin.addEventListener('click', showDescription);
// pKelvin.onclick = showDescription;