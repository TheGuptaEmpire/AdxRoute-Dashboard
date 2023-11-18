let toggler = document.querySelector('.sidebar-toggler');
let sidebar = document.querySelector('.sidebar');
let header = document.querySelector('.sidebar-header');
let navbar = document.querySelector('.navbar');

document.querySelector('.sidebar-toggler').onclick = () => {
    toggler.classList.remove('not-active');
    toggler.classList.toggle('active');
    sidebar.classList.toggle('sidebar-close');
    header.classList.toggle('header-open');
    navbar.classList.toggle('navbar-open');
}