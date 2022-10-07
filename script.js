const toggle = document.querySelector('.menu');
const navbar = document.querySelector('nav');

toggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});