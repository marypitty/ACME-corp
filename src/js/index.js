import gsap from "gsap";
import "../scss/main.scss"


//SWIPER x versione mobile

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



//GSAP & SCROLLTRIGGER animazioni

gsap.registerPlugin(ScrollTrigger);


//bottone prenota ora
gsap.from(".btn1", {
     opacity: 0,
    duration: 2,
    
});
gsap.from(".btn2", {
    scrollTrigger: {
        trigger: ".btn2",
        toggleActions: "restart none restart none",
    },
    opacity: 0,
    duration: 2,
    ease:'bounce'
    
})

gsap.from(".btn3", {
    scrollTrigger: {
        trigger: ".btn3",
        toggleActions: "restart none restart none",
    },
    opacity: 0,
    duration: 2,
    ease: 'bounce'
})

//immagine header
gsap.from(".radio-img", {
    x: 400,
    duration: 2,
    ease: 'bounce'
});


//scrollbar
let scrollbar = gsap.timeline({
    scrollTrigger: {
        trigger: ".gray-section",
        start: "top",
        toggleActions: "restart none restart none",
    }
});
scrollbar.from(".contenuto", { x: 200, opacity: 0, duration: 1 })


//willy
let willy = gsap.timeline({
    scrollTrigger: {
        trigger: ".gray-section",
        start: "top",
        toggleActions: "restart none none none",

    }
});
willy.from(".willy", { x: -200, opacity: 0, duration: 1 })


//immagini servizi
gsap.from(".servizio", {
    scrollTrigger: {
        trigger: ".servizio",
        toggleActions: "restart none none none"
    },
    opacity: 0,
    duration: 5,
    ease:'bounce'
});

//Partners logo
gsap.from(".partner-logo", {
    scrollTrigger: {
        trigger: ".partners",
        toggleActions: "restart none none none"
    },
    opacity: 0,
    duration: 5,
    ease: 'bounce'
});


//Chi siamo
gsap.from(".trigger", {
    scrollTrigger: {
        trigger: ".white-bg",
        toggleActions: "restart none none none"
    },
    opacity: 0,
    duration: 3,
    ease:'bounce'
});



/* BURGER BUTTON (open/close) */
const drawerBtnElement = document.getElementById('drawer-btn');
const mobileDrawerElement = document.getElementById('mobile-drawer');

function toggleDrawer() {
    mobileDrawerElement.classList.toggle('open');
}

drawerBtnElement.addEventListener('click', toggleDrawer);


/* COUNTDOWN */

const expireDate = new Date("Apr 18, 2022 18:00:00").getTime();
const x = setInterval(function () {
   
    let now = new Date().getTime();
    let distance = expireDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
     
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "OFFERTA SCADUTA!";
    }
}, 1000);