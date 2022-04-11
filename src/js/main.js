//SWIPER

var swiper = new Swiper(".registration-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


//GSAP ANIMATIONS
let bomb = TweenMax.from(".radio-img, .reserv-button", {
    y: 400,
    opacity: 0,
    duration: 2,
    ease: 'elastic.inOut',

});




/* BURGER BUTTON */
const drawerBtnElement = document.getElementById('drawer-btn');
const mobileDrawerElement = document.getElementById('mobile-drawer');

function toggleDrawer() {
    mobileDrawerElement.classList.toggle('open');
}

drawerBtnElement.addEventListener('click', toggleDrawer);

/* COUNTDOWN */

const expireDate = new Date("Apr 18, 2022 18:00:00").getTime();

// Intervallo per aggiornare countdown ogni secondo
const x = setInterval(function() {

    // Data e ora odierni
    let now = new Date().getTime();

    // DIfferenza tra la data odiena e la data del contdown 
    let distance = expireDate - now;

    // Calcolo giorni, ore, minuti e secondi
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Inserisco risultato nell'HTML
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // Se il countdown scade:
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "OFFERTA SCADUTA!";
    }
}, 1000);