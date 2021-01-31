$(document).ready(function () {
    const swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        autoplay: {
            delay: 3000,
        },
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });
    swiper.init();
});