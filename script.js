// --------- Splash --------- 
let splash = document.querySelector('.splash');
let splashHeader = document.querySelector('.splash-header');
let headerText = document.querySelectorAll('.header-text');
let navbar = document.querySelectorAll('.navbar');


// navbar[0].classList.add('hidden');

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
        

        headerText.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 500)
        });

        setTimeout(() => {
            
        })

        setTimeout(() => {
            headerText.forEach((span, idx) => {
    
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 100)
            })
        }, 3000)
        
        setTimeout(() => {
            splash.style.right = '-100%';
        }, 4300);

        setTimeout(() => {
            navbar[0].classList.remove('hidden');
        }, 4300)
    })
});



const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector(".navbar ul");
const navbarLinks = document.querySelectorAll(".navbar a");

navbarToggler.addEventListener("click", navbarTogglerClick);

function navbarTogglerClick() {
    navbarToggler.classList.toggle("open-navbar-toggler");
    navbarMenu.classList.toggle("open");
}

navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

function navbarLinkClick() {
    if(navbarMenu.classList.contains("open")) {
        navbarToggler.click();
    }
}
