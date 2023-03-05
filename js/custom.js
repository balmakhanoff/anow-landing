const gamburger_menu = document.getElementById('gamburger_menu');
let nav_bar = document.querySelector('.nav');
let nav_ul_list = document.querySelector('.nav_list');
let menu_close = document.querySelector('.menu_close');
let menu_open = document.querySelector('.menu_open');

gamburger_menu.addEventListener('click', function () {
    nav_bar.classList.toggle('nav');
    nav_ul_list.classList.toggle('nav_bar_list');
    menu_close.classList.toggle('hide_menu');
    menu_open.classList.toggle('hide_menu');
})

