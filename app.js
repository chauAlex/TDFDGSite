const $ = selector => document.querySelector(selector);

const menu = $('#mobile-menu');
const menuLinks = $('.navbar__menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});