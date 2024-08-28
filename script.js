const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const navbar = document.getElementById('navbar');
const hamitems = document.querySelectorAll('.ham-items');
const hamlogo = document.querySelector('.ham');

function navtoggle() {
    nav.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll');
    navbar.classList.toggle('opac');
    hamlogo.classList.toggle('fa-xmark');
}

btn.addEventListener('click', navtoggle);

hamitems.forEach((item)=>{item.addEventListener('click', navtoggle)})
