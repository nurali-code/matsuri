

$('.dropdown li').on('click', function () {
    $(this).find('.content').slideToggle();
    $(this).toggleClass('active');
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
});

particlesJS.load('particles', './js/particles.json', function () {
    console.log('callback - particles.js config loaded');
});
