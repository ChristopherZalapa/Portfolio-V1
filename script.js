// --------- Splash --------- 
let splash = document.querySelector('.splash');
let splashHeader = document.querySelector('.splash-header');
let headerText = document.querySelectorAll('.header-text');

let header = document.querySelector('.header');
let links = Array.from(document.querySelectorAll('.link'));


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
// --------- End Of Splash --------- 


function animate () {
    
    setTimeout(() => {
        header.classList.add('active');
    }, 5000);

    links.forEach((link, idx) => {
        setTimeout(() => {
            link.classList.add('active');
        }, (idx * 200) + 2500)
    })
}

animate();