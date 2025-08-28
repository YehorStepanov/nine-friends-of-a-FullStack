'use strict';

import axios from 'axios';

const ARTISTS_LIST_URL =
  'https://sound-wave.b.goit.study/api/artists?limit=8&page=1';

export async function getArtistsList() {
  try {
    const response = await axios.get(ARTISTS_LIST_URL);
    console.log(response.data.artists);

    return response.data.artists;
  } catch (error) {
    console.error('Error');
  }
}
