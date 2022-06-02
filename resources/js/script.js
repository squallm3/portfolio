//Variables

const menuButton = document.getElementById('button');
const navMenu = document.getElementById('nav');
const page = document.getElementById('main');

//Functions

const hideMenu = () => {
    navMenu.style.display = "none";
}

const showMenu = () => {
    navMenu.style.display = "block";
}

menuButton.onclick = showMenu;
navMenu.onmouseleave = hideMenu;
page.onclick = hideMenu;
