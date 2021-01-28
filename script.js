// --------- Splash --------- 
let splash = document.querySelector('.splash');
let splashHeader = document.querySelector('.splash-header');
let headerText = document.querySelectorAll('.header-text');

const navbarToggler = document.querySelector('.navbar-toggler');
const navbarMenu = document.querySelector('.navbar ul');
console.log(navbarTogglerClick);
navbarToggler.addEventListener('click', navbarTogglerClick);



window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
        
        headerText.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 500)
        });

        setTimeout(() => {
            headerText.forEach((span, idx) => {
                
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 100)
            })
        }, 3000)

        setTimeout(() => {
            splash.style.right = '-100%'
        }, 4300)
    })
});



function navbarTogglerClick() {
    navbarToggler.classList.toggle('open-navbar-toggler');
    navbarMenu.classList.toggle('open');
}

// --------- End Of Splash --------- 

// let header = document.querySelector('.header');
// let links = Array.from(document.querySelectorAll('.link'));

// function animate () {
    
//     setTimeout(() => {
//         header.classList.add('active');
//     }, 7000);

//     links.forEach((link, idx) => {
//         setTimeout(() => {
//             link.classList.add('active');
//         }, (idx * 200) + 2500)
//     })
// }

// animate();