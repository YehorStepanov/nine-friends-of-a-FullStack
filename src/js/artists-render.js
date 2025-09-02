'use strict';

import { getArtistsList } from './site-api';
import refs from './refs';
import Pagination from 'tui-pagination';
import sprite from '../img/sprite.svg';
import { showLoader, hideLoader } from './loader';

async function createArtistsList(page) {
  try {
    const data = await getArtistsList(page);
    showLoader('artists__loader');
    const markup = data.artists
      .map(
        item => `
          <li class="artists__item">
            <img class="artists__image" src="${item.strArtistThumb}" alt="${
          item.strArtist
        }" loading="lazy" onerror="this.onerror=null;this.src='/img/img-placeholder.svg';">
            <ul class="artists__genre-list">
              ${item.genres
                .map(g => `<li class="artists__genre-item">${g}</li>`)
                .join('')}
            </ul>
            <h3 class="artists__title-name">${item.strArtist}</h3>
            <p class="artists__text-biography">${item.strBiographyEN}</p>

            <button class="artists__more-btn js-artist-more-btn" data-artists-id="${
              item._id
            }">
              Learn More 
              <svg class="artists-more__caret">
                <use href='${sprite}#icon-caret-right'></use>
              </svg>
            </button>
          </li>
        `
      )
      .join('');

    refs.artistsList.innerHTML = markup;
    hideLoader('artists__loader');
    return data;
  } catch (error) {
    hideLoader('artists__loader');
    console.error('Error in createArtistsList:', error);
  }
}

const paginationEl = document.getElementById('pagination');
let pagination = null;

async function initPagination() {
  const firstData = await createArtistsList(1);

  pagination = new Pagination(paginationEl, {
    totalItems: firstData.totalArtists,
    itemsPerPage: firstData.limit,
    visiblePages: 5,
    centerAlign: true,
    template: {
      page: '<a href="#" class="custom-page-btn">{{page}}</a>',
      currentPage: '<strong class="custom-current">{{page}}</strong>',
      moveButton:
        '<a href="#" class="custom-move-btn tui-{{type}}">' +
        '<span class="icon-{{type}}"></span>' +
        '</a>',
      disabledMoveButton:
        '<span class="custom-move-btn disabled tui-{{type}}">' +
        '<span class="icon-{{type}}"></span>' +
        '</span>',
      moreButton: '<a href="#" class="custom-ellip">...</a>',
    },
  });

  const icons = {
    first:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M18 6v12l-8-6 8-6zM6 6h2v12H6V6z"/></svg>',
    prev: `<svg class="artists__pagination-icon"><use href="${sprite}#icon-left-arrow"></use></svg>`,
    next: `<svg class="artists__pagination-icon"><use href="${sprite}#icon-right-arrow"></use></svg>`,
    last: '<svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M6 6v12l8-6-8-6zM18 6h-2v12h2V6z"/></svg>',
  };

  function replaceMoveButtons() {
    ['first', 'prev', 'next', 'last'].forEach(type => {
      const btn = paginationEl.querySelector(`.tui-${type} .icon-${type}`);
      if (btn) btn.innerHTML = icons[type];
    });
  }

  replaceMoveButtons();

  pagination.on('afterMove', async event => {
    const currentPage = event.page;
    showLoader('artists__loader');
    await createArtistsList(currentPage);

    replaceMoveButtons();
  });
}
initPagination();
