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
    return data;
  } catch (error) {
    console.error('Error fetching artists:', error.message);
    throw error;
  }
}

// Fetch artist data and albums by artist ID
//! ============================================================================
export const getArtistDataAndAlbums = async (id) => {
  const res = await axios.get(`artists/${id}/albums`);
  return res.data;
};

//fetch feedbacks
export async function getFeedbacks() {
  try {
    const response = await axios.get('feedbacks', {
      params: {
        limit: 10,
        page: 1,
      },
    });
    const feedbacksArray = response.data.data;
    return feedbacksArray;
  } catch (err) {
    console.log('Error fetching feedbacks', err);
  }
}

//! ============================================================================
//Feedback API

export async function postFeedback(feedback) {
  axios.post('feedbacks', { ...feedback });
}
