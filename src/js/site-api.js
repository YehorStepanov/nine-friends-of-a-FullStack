'use strict';

import axios from 'axios';

axios.defaults.baseURL = 'https://sound-wave.b.goit.study/api/';

export async function getArtistsList(page = 1) {
  try {
    const { data } = await axios.get('artists', {
      params: {
        limit: 8,
        page,
      },
    });
    console.log(data);
    
    return data;
  } catch (error) {
    console.error('Error fetching artists:', error.message);
    throw error;
  }
}
