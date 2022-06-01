const menuButton = document.getElementById('button');
const navMenu = document.getElementById('nav');
const page = document.getElementById('picture');

const hideMenu = () => {
    navMenu.style.display = "none";
}

menuButton.onclick = function click() {
    navMenu.style.display = "block";
};

navMenu.onmouseleave = hideMenu;

page.onclick = hideMenu;
