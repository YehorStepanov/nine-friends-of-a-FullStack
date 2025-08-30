'use strict';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { getFeedbacks } from './site-api';
import Raty from 'raty-js';
import starOn from '/img/starOn.png';
import starOff from '/img/starOff.png';
import refs from './refs';

// fetch feedbacks
async function initLoad() {
    try {
        const feedbacksArray = await getFeedbacks();
        renderFeedbacks(feedbacksArray);
        initSwiper();
        renderStars();
    }
    catch {
        console.log('Network error');
    }
}
initLoad();
// render feedbacks 
function renderFeedbacks(arr) {
    const markup = arr.map(feedbackTemplate).join('');
    refs.swiperWrapper.innerHTML = markup;    
}
function feedbackTemplate({ name, descr, rating }) {    
    return `<div class="swiper-slide">
        <div class="stars" data-raty data-score="${Math.round(rating)}" data-read-only="true"></div>
        <p class="feedback-content">${descr}</p>
        <p class="feedback-name">${name}</p>
        </div>`;
}
// render stars
function renderStars() {
    document.querySelectorAll('[data-raty]').forEach(el => {
        new Raty(el, {
            starOn: starOn,
            starOff: starOff,
            score: parseInt(el.dataset.score, 10),
            readOnly: true,
        }).init();
    });
}
// create swiper
function initSwiper() {
    const swiper = new Swiper(".mySwiper", {
        modules: [Navigation, Pagination],
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            dynamicMainBullets: 1,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

