export default {
  artistsList: document.querySelector('.artists__list'),
  // artistsLoadButton removed — load-more handled via pagination
  swiperWrapper: document.querySelector('.swiper-wrapper'),
  swiperBtnPrev: document.querySelector('.swiper-button-prev'),
  swiperBtnNext: document.querySelector('.swiper-button-next'), //Це приклад як додавати, не видаляйте
  artistModalElems: {
    artistModalEl: document.querySelector('.js-artist-modal'),
    closeArtistModalBtnEl: document.querySelector('[data-artist-modal-close]'),
    artistModalInnerEl: document.querySelector('.js-artist-modal-inner'),
    artistModalBodyEl: document.querySelector('.js-artist-modal-body'),
    artistModalLoaderEl: document.querySelector('.js-artist-modal-loader'),
  },
  burgerMenuOpenBtn: document.querySelector('.js-burger-menu-open'),
  burgerMenuCloseBtn: document.querySelector('.js-burger-menu-close'),
  burgerMenu: document.querySelector('.burger-overlay'),
  burgerMenuList: document.querySelector('.mobile-menu-list'),
};
