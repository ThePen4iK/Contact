document.addEventListener("DOMContentLoaded", function () {
    const rootElement = document.documentElement;

    let swiperAbout = new Swiper(".about__swiper", {
        spaceBetween:23,
        slidesPerView: 4,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    console.log("DOM fully loaded and parsed");
})