'use strict';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";
import { getFeedbacks } from './site-api';
import Raty from 'raty-js';
import starOn from '/img/starOn.png';
import starOff from '/img/starOff.png';
import refs from './refs';

// fetch feedbacks and init page load
async function initLoad() {
    let feedbacksArray = [];
    try {
        const response = await getFeedbacks();            
        if (response && Array.isArray(response)) {
            feedbacksArray = response;
        } else {
            feedbacksArray = [];
        }
    } catch (err) {
        iziToast.error({ message: 'Network error' });
        return;
    }
    if (feedbacksArray.length === 0) {
        iziToast.error({ message: 'Nothing to show. Please, try again later.' });
        return;
    }
    renderFeedbacks(feedbacksArray);
    initSwiper(feedbacksArray.length);
    renderStars();
}

initLoad();

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

// create swiper with custom bullets
function initSwiper(totalSlides) {
    const firstBullet = 0;
    const lastBullet = totalSlides - 1;
    const middleBullet = Math.floor(totalSlides / 2);
    const swiper = new Swiper(".mySwiper", {
        modules: [Navigation, Pagination],
        pagination: {
            el: ".swiper-pagination",
            type: 'custom',
            renderCustom: (swiper) => {
                let activeBullet;
                if (swiper.activeIndex === firstBullet) {
                    activeBullet = firstBullet;
                } else if (swiper.activeIndex === lastBullet) {
                    activeBullet = lastBullet;
                } else {
                    activeBullet = middleBullet;
                }
                return `
                    <span class="swiper-pagination-bullet${activeBullet === firstBullet ? ' active' : ''}" data-i="${firstBullet}"></span>
                    <span class="swiper-pagination-bullet${activeBullet === middleBullet ? ' active' : ''}" data-i="${middleBullet}"></span>
                    <span class="swiper-pagination-bullet${activeBullet === lastBullet ? ' active' : ''}" data-i="${lastBullet}"></span>
                    `;
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },       
    });
    refs.swiperBtnPrev.classList.remove('visually-hidden');
    refs.swiperBtnNext.classList.remove('visually-hidden');
    // handle clicks on custom bullets
    swiper.pagination.el.addEventListener('click', (e) => {
        if (!e.target.classList.contains('swiper-pagination-bullet')) {
            return;
        }
        const index = parseInt(e.target.dataset.i, 10);
        swiper.slideTo(index);
    });
}
