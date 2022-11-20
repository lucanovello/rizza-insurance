const body = document.getElementById('body');
const navContainer = document.getElementById('nav-container');

navScrollHandler();

window.addEventListener('scroll', navScrollHandler);

function navScrollHandler() {
    window.scrollY <= 10
        ? navContainer.classList.remove('nav-scrolling')
        : navContainer.classList.add('nav-scrolling');
}
