import './scss/style.scss';

import Swiper from 'swiper/swiper-bundle.min.js';

const swiper = new Swiper('.offer-slider__swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // simulateTouch: false,
    loop: true,

    thumbs: {
        swiper: {
            el: '.offer-slider__mini-slider',
            slidesPerView: 3,
            slideThumbActiveClass: true,
        },
    },
});

document.addEventListener('DOMContentLoaded', function () {
    const deadline = new Date(2022, 10, 10);
    const $hours = document.querySelector('.clock__value_hour');
    const $minutes = document.querySelector('.clock__value_minute');
    const $seconds = document.querySelector('.clock__value_second');
    const plus = document.querySelector('.amount__plus');
    const minus = document.querySelector('.amount__minus');
    const valueNumber = document.querySelector('.amount__value');
    let value = valueNumber.textContent;

    let timerId = null;

    function countdownTimer() {
        // дата

        const diff = deadline - new Date();
        if (diff <= 0) {
            clearInterval(timerId);
        }

        const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
        const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

        $hours.innerHTML = hours;
        $minutes.innerHTML = minutes;
        $seconds.innerHTML = seconds;
    }
    //счетчик
    console.log(valueNumber.textContent);
    plus.addEventListener('click', function () {
        value++;
        valueNumber.innerHTML = value;
    });
    minus.addEventListener('click', function () {
        if (value > 1) {
            value--;
        } else {
            value = 1;
        }
        valueNumber.innerHTML = value;
    });

    timerId = setInterval(countdownTimer, 1000);
    console.log(valueNumber.textContent);
});
