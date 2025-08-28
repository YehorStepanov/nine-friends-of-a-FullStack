'use strict';

import { getArtistsList } from './site-api';
import refs from './refs';

async function createArtistsList() {
  try {
    const data = await getArtistsList();

    const markup = data
      .map(
        item => `
          <li class="artists__item">
            <img class="artists__image" src="${item.strArtistThumb}" alt="${item.strArtist}">
            <ul class="artists__genre-list">
              <li class="artists__genre-item">${item.genres[0]}</li>
              <li class="artists__genre-item">${item.genres[1]}</li>
              <li class="artists__genre-item">${item.genres[2]}</li>
              <li class="artists__genre-item">${item.genres[3]}</li>
            </ul>
            <h3 class="artists__title-name">${item.strArtist}</h3>
            <p class="artists__text-biography">${item.strBiographyEN}</p>
            <button class="artists__more-btn" data-artists-id="${item._id}">Learn More</button>
          </li>
        `
      )
      .join('');

    refs.artistsList.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.error('Error in createArtistsList:', error);
  }
}

createArtistsList();
