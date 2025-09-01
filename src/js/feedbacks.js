'use strict';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getFeedbacks, postFeedback } from './site-api';
import Raty from 'raty-js';
import starOn from '/img/starOn.png';
import starOff from '/img/starOff.png';
import starOnBig from '/img/starOnBig.png';
import starOffBig from '/img/starOffBig.png';
import refs from './refs';
import { showLoader, hideLoader } from './loader';

// fetch feedbacks and init page load
async function initLoad() {
  let feedbacksArray = [];
  try {
    showLoader('feedbacks-loader');

    try {
      const response = await getFeedbacks();
      if (response && Array.isArray(response)) {
        feedbacksArray = response;
      }
    } catch (apiError) {
      console.log('API not available, trying localStorage');
      const storedFeedbacks = localStorage.getItem('feedbacks');
      if (storedFeedbacks) {
        feedbacksArray = JSON.parse(storedFeedbacks);
      }
    }

    if (feedbacksArray.length === 0) {
      hideLoader('feedbacks-loader');
      refs.swiperWrapper.innerHTML = '<p>Ще немає відгуків. Будьте першим!</p>';
      return;
    }

    renderFeedbacks(feedbacksArray);
    initSwiper(feedbacksArray.length);
    renderStars();
  } catch (err) {
    hideLoader('feedbacks-loader');
    iziToast.error({ message: 'Помилка завантаження відгуків' });
    return;
  }
  hideLoader('feedbacks-loader');
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
  document.querySelectorAll('[data-raty]').forEach((el) => {
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
  if (totalSlides <= 0) return;

  const firstBullet = 0;
  const lastBullet = totalSlides - 1;
  const middleBullet = Math.floor(totalSlides / 2);
  const swiper = new Swiper('.mySwiper', {
    modules: [Navigation, Pagination],
    pagination: {
      el: '.swiper-pagination',
      type: 'custom',
      renderCustom: function (swiper, current, total) {
        let activeBullet;
        if (current === firstBullet) {
          activeBullet = firstBullet;
        } else if (current === lastBullet) {
          activeBullet = lastBullet;
        } else {
          activeBullet = middleBullet;
        }
        return `
                    <span class="swiper-pagination-bullet${
                      activeBullet === firstBullet ? ' active' : ''
                    }" data-i="${firstBullet}"></span>
                    <span class="swiper-pagination-bullet${
                      activeBullet === middleBullet ? ' active' : ''
                    }" data-i="${middleBullet}"></span>
                    <span class="swiper-pagination-bullet${
                      activeBullet === lastBullet ? ' active' : ''
                    }" data-i="${lastBullet}"></span>
                    `;
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  if (refs.swiperBtnPrev) refs.swiperBtnPrev.classList.remove('visually-hidden');
  if (refs.swiperBtnNext) refs.swiperBtnNext.classList.remove('visually-hidden');
  hideLoader('feedbacks-loader');

  // handle clicks on custom bullets
  if (swiper.pagination && swiper.pagination.el) {
    swiper.pagination.el.addEventListener('click', (e) => {
      if (!e.target.classList.contains('swiper-pagination-bullet')) {
        return;
      }
      const index = parseInt(e.target.dataset.i, 10);
      swiper.slideTo(index);
    });
  }
}

// MODAL-WINDOW

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.js-feedback-modal');
  const modalInner = modal?.querySelector('.js-feedback-modal-inner');
  const modalLoader = modal?.querySelector('.js-feedback-modal-loader');

  if (!modal || !modalInner) {
    console.warn('[feedback-modal] modal not found in DOM');
    return;
  }

  function renderForm() {
    return `
    <form class="feedback-form js-feedback-form" novalidate>
      <p class="feedback-form-title"> Submit feedback </p>
      <div class="feedback-form-name-message">
        <label class="form-field-name">
          <span>Name</span>
          <input class="form-field-name-place" name="name" type="text" required placeholder="Emily"/>
          <div class="error-message" data-error="name"></div>
        </label>

        <label class="form-field-message">
          <span>Message</span>
          <textarea class="form-field-message-place" name="descr" rows="4" required placeholder="Type your message..."></textarea>
          <div class="error-message" data-error="descr"></div>
        </label>

        <div class="form-field-star">
          <div class="feedback-modal__rating" data-raty data-score="0"></div>
          <span>Rating</span>
        </div>

        <div class="form-actions">
          <button type="submit" class="btn btn--primary">Submit</button>
        </div>
      </div>
    </form>
  `;
  }

  function initFormStars() {
    const ratingNode = modal.querySelector('[data-raty]');
    if (!ratingNode) return;

    ratingNode.innerHTML = '';
    new Raty(ratingNode, {
      starOn: starOnBig,
      starOff: starOffBig,
      score: 0,
      readOnly: false,
    }).init();
  }

  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-feedback-modal-open]')) {
      e.preventDefault();
      openModal();
      return;
    }

    if (e.target.closest('[data-feedback-modal-close]')) {
      e.preventDefault();
      closeModal();
      return;
    }

    if (e.target === modal) {
      closeModal();
      return;
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('is-hidden')) {
      closeModal();
    }
  });

  function bindForm() {
    const form = modal.querySelector('.js-feedback-form');
    if (!form) return;

    form.removeEventListener('submit', handleSubmit);
    form.addEventListener('submit', handleSubmit);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (document.activeElement && document.activeElement.type === 'submit') {
      document.activeElement.blur();
    }

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      name: (fd.get('name') || '').trim(),
      rating: parseInt(modal.querySelector('[data-raty] input[name="score"]')?.value || 0, 10),
      descr: (fd.get('descr') || '').trim(),
    };

    const errorElements = modal.querySelectorAll('.error-message');
    errorElements.forEach((el) => {
      el.textContent = '';
      el.style.display = 'none';
    });

    modal.querySelectorAll('.form-field-name, .form-field-message').forEach((el) => {
      el.classList.remove('error');
    });

    const errors = {
      name: [],
      descr: [],
    };

    if (payload.name.length < 2 || payload.name.length > 16) {
      errors.name.push('The name must be between 2 and 16 characters long');
    }

    if (payload.descr.length < 10 || payload.descr.length > 512) {
      errors.descr.push('The comment must contain between 10 and 512 characters');
    }

    const hasErrors = Object.values(errors).some((errorArray) => errorArray.length > 0);

    Object.keys(errors).forEach((field) => {
      const errorElement = modal.querySelector(`[data-error="${field}"]`);
      if (errorElement && errors[field].length > 0) {
        errorElement.textContent = errors[field].join(', ');
        errorElement.style.display = 'block';

        const parentElement = errorElement.closest(
          field === 'name' ? '.form-field-name' : '.form-field-message',
        );
        if (parentElement) {
          parentElement.classList.add('error');
        }
      }
    });

    if (hasErrors) {
      return;
    }

    try {
      const storedFeedbacks = JSON.parse(localStorage.getItem('feedbacks') || '[]');
      postFeedback(payload)
        .then(function (response) {
          iziToast.success({
            title: 'Success',
            message: 'Your review has been successfully added!',
          });
        })
        .catch(function (error) {
          iziToast.error({
            title: 'Ошибка',
            message: error,
          });
        });

      closeModal();
    } catch (error) {
      iziToast.error({
        title: 'Ошибка',
        message: 'Не удалось сохранить отзыв. Попробуйте еще раз.',
      });
    }
  }

  function openModal() {
    if (!modalInner.querySelector('.js-feedback-form')) {
      modalInner.innerHTML = renderForm();
    } else {
      const errorElements = modal.querySelectorAll('.error-message');
      errorElements.forEach((el) => {
        el.textContent = '';
        el.style.display = 'none';
      });

      modal.querySelectorAll('.form-field-name, .form-field-message').forEach((el) => {
        el.classList.remove('error');
      });

      const form = modal.querySelector('.js-feedback-form');
      if (form) {
        form.reset();
      }

      const ratingNode = modal.querySelector('[data-raty]');
      if (ratingNode) {
        ratingNode.innerHTML = '';
      }
    }

    modal.classList.remove('is-hidden');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    if (modalLoader) modalLoader.style.display = 'none';
    modalInner.style.display = 'block';

    initFormStars();
    bindForm();
  }

  function closeModal() {
    const errorElements = modal.querySelectorAll('.error-message');
    errorElements.forEach((el) => {
      el.textContent = '';
      el.style.display = 'none';
    });

    modal.querySelectorAll('.form-field-name, .form-field-message').forEach((el) => {
      el.classList.remove('error');
    });

    if (document.activeElement && modal.contains(document.activeElement)) {
      document.activeElement.blur();
    }

    modal.classList.add('is-hidden');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  window.__openFeedbackModal = openModal;
});
