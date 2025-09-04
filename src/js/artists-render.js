'use strict';

import { getArtistsList } from './site-api';
import refs from './refs';
import Pagination from 'tui-pagination';
import sprite from '../img/sprite.svg';
import placeholder_img from '../img/placeholder-img.webp';

// !============================================================================

const ITEMS_PER_PAGE = 8;
refs.artistsList.innerHTML = renderSkeletons(ITEMS_PER_PAGE);

function renderSkeletons(count = ITEMS_PER_PAGE) {
  return new Array(count)
    .fill(0)
    .map(
      () => `
          <li class="artists__item artists__item--skeleton">
            <div class="skeleton-image" aria-hidden="true"></div>
            <ul class="artists__genre-list">
              <li class="artists__genre-item skeleton-genre"></li>
              <li class="artists__genre-item skeleton-genre"></li>
            </ul>
            <h3 class="artists__title-name skeleton-title"></h3>
            <p class="artists__text-biography skeleton-text"></p>

            <div class="skeleton-btn" aria-hidden="true"></div>
          </li>
        `
    )
    .join('');
}

// !============================================================================
async function createArtistsList(page) {
  try {
    const data = await getArtistsList(page);

    const markup = data.artists
      .map(
        item => `
          <li class="artists__item">
            <img class="artists__image" src="${item.strArtistThumb}" alt="${
          item.strArtist
        }" loading="lazy" onerror="this.onerror=null;this.src='${placeholder_img}';">
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
    return data;
  } catch (error) {
    console.error('Error in createArtistsList:', error);

    refs.artistsList.innerHTML = '';
    throw error;
  }
}

// !============================================================================
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
        '<a href="#" class="custom-move-btn tui-{{type}}" aria-label="move button">' +
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
    await createArtistsList(currentPage);

    replaceMoveButtons();

    const top =
      refs.artistsList.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top, behavior: 'smooth' });
  });
}

// !============================================================================
initPagination();
