const openMenuButton = document.querySelector('#open_menu');
const closeMenuButton = document.querySelector('#close_menu');
const menu = document.querySelector('.header-menu');

openMenuButton.addEventListener('click', () => {
    menu.classList.add('open');
})

closeMenuButton.addEventListener('click', () => {
    menu.classList.remove('open');
})