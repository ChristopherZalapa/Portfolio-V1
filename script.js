// --------- Splash --------- 
let splash = document.querySelector('.splash');
let splashHeader = document.querySelector('.splash-header');
let headerText = document.querySelectorAll('.header-text');

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
        }, 2000)

        setTimeout(() => {
            splash.style.top = '-100vh'
        }, 4500)
    })
});
// --------- End Of Splash --------- 