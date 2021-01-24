// --------- Splash --------- 
let splash = document.querySelector('.splash');
let splashHeader = document.querySelector('.splash-header');
let headerText = document.querySelectorAll('.header-text');

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
        headerText.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            })
        })
    })
});
// --------- End Of Splash --------- 