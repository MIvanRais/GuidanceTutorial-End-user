const swiper_recommended = new Swiper('.swiper_recommended', {
    slidesPerView: 2,
    spaceBetween: 15,
    slidesPerGroup: 2,
    loop: true,
    centerSlide: 'true',
    loopFillGroupWithBlank: false,
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {

        },
        576: {

        }
    }
});

const swiper_categories = new Swiper('.swiper_categories', {
    slidesPerView: 2.9,
    slidesPerGroup: 2,
    loop: false,
    centerSlide: 'true',
    loopFillGroupWithBlank: false,
    grabCursor: 'true',
    breakpoints: {
        0: {

        },
        576: {

        }
    }
});