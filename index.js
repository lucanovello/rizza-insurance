const body = document.getElementById('body');
const introScreen = document.getElementById('intro-screen');

const navContainer = document.getElementById('nav-container');
const navMobileContainer = document.getElementById('nav-mobile-container');

const navMobileLinks = document.querySelectorAll('#nav-mobile-links');

const navMobileLinksContainer = document.getElementById('nav-mobile-links-container');
const navMobileHamburgerContainer = document.getElementById('nav-mobile-hamburger');
const navMobileHamburgerTop = document.getElementById('nav-mobile-hamburger-top');
const navMobileHamburgerBottom = document.getElementById('nav-mobile-hamburger-bottom');
const navMobileCloseItems = document.querySelectorAll(`[data-nav="true"]`);

const fadeUpArr = document.querySelectorAll('.fade-up');
const fadeLeftArr = document.querySelectorAll('.fade-left');
const fadeRightArr = document.querySelectorAll('.fade-right');

let isNavMenuOpen = false;

// INIT PAGE ------------------------------------------------------------------------------------
navScrollHandler();

// intro screen ------------------
setTimeout(() => {
    introScreen.classList.add('fade-out');
}, 500);
setTimeout(() => {
    body.classList.remove('overflow-hidden');
    introScreen.style.display = 'none';
}, 1500);

// FADE IN LOADING EFFECT ------------------------------------------------------------------------------------
let options = {
    rootMargin: '0px',
    threshold: 0.2,
};

let fadeUpObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('fade-up');
            fadeUpObserver.unobserve(entry.target);
        }
    });
}, options);

let fadeLeftObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('fade-left');
            fadeUpObserver.unobserve(entry.target);
        }
    });
}, options);

let fadeRightObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('fade-right');
            fadeUpObserver.unobserve(entry.target);
        }
    });
}, options);

fadeUpArr.forEach((fadeUp) => {
    fadeUpObserver.observe(fadeUp);
});
fadeLeftArr.forEach((fadeLeft) => {
    fadeLeftObserver.observe(fadeLeft);
});
fadeRightArr.forEach((fadeRight) => {
    fadeRightObserver.observe(fadeRight);
});

// EVENT HANDLERS ------------------------------------------------------------------------------------
// handles bg color of nav bar on scroll
window.addEventListener('scroll', navScrollHandler);

function navScrollHandler() {
    if (window.scrollY <= 100) {
        navContainer.classList.remove('nav-scrolling');
        navMobileContainer.classList.remove('nav-scrolling');
    } else {
        navContainer.classList.add('nav-scrolling');
        navMobileContainer.classList.add('nav-scrolling');
    }
}

// mobile nav menu handler to open menu
navMobileHamburgerContainer.addEventListener('touchstart', (e) => {
    e.preventDefault();
    isNavMenuOpen = !isNavMenuOpen;
    mobileNavCloseHandler();
});
navMobileHamburgerContainer.addEventListener('click', (e) => {
    e.preventDefault();
    isNavMenuOpen = !isNavMenuOpen;
    mobileNavCloseHandler();
});

// event listeners and functions to close mobile nav menu on click/touch
navMobileCloseItems.forEach((item) => {
    item.addEventListener('touchstart', (e) => {
        isNavMenuOpen && (isNavMenuOpen = false);
        mobileNavCloseHandler();
    });

    item.addEventListener('click', (e) => {
        isNavMenuOpen && (isNavMenuOpen = false);
        mobileNavCloseHandler();
    });
});

function mobileNavCloseHandler() {
    if (!isNavMenuOpen) {
        navMobileHamburgerTop.classList.remove('nav-mobile-hamburger-top-close');
        navMobileHamburgerBottom.classList.remove('nav-mobile-hamburger-bottom-close');
        navMobileLinksContainer.classList.remove('nav-mobile-links-open');
    } else {
        navMobileHamburgerTop.classList.add('nav-mobile-hamburger-top-close');
        navMobileHamburgerBottom.classList.add('nav-mobile-hamburger-bottom-close');
        navMobileLinksContainer.classList.add('nav-mobile-links-open');
    }
}
