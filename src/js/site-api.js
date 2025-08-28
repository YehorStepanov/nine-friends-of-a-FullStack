'use strict';

import axios from 'axios';

const ARTISTS_LIST_URL = `https://sound-wave.b.goit.study/api/artists?limit=8&page=`;

export async function getArtistsList(artistsPage = 1) {
  try {
    const response = await axios.get(`${ARTISTS_LIST_URL}${artistsPage}`);

    return response.data;
  } catch (error) {
    console.error('Error');
  }
}
