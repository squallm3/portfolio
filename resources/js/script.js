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

const showDescription1 = () => {
    if (kelvinDesc.style.display !== "none") {
        kelvinDesc.style.display = "none";
      } else {
        kelvinDesc.style.display = "block";
      }
}

const showDescription2 = () => {
  if (wineDesc.style.display !== "none") {
     wineDesc.style.display = "none";
    } else {
      wineDesc.style.display = "block";
    }
}

const showDescription3 = () => {
  if (broadwayDesc.style.display !== "none") {
    broadwayDesc.style.display = "none";
    } else {
      broadwayDesc.style.display = "block";
    }
}

//Listeners

//Menu
menuButton.onclick = showMenu;
navMenu.onmouseleave = hideMenu;
page.onclick = hideMenu;

//Descriptions
pKelvin.addEventListener('click', showDescription1);
pWine.addEventListener('click', showDescription2);
pBroadway.addEventListener('click', showDescription3);
// pKelvin.onclick = showDescription;