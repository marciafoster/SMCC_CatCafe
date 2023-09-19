import React, { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Fetches cat data from the API.
 * @returns {Array} The cat data.
 */
const CatsApi = async () => {
  const url = 'https://cat-breeds.p.rapidapi.com/cat_breeds';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '06dac55145msh43ca0f365b5b73cp138cdfjsn37f31adbc82f',
      'X-RapidAPI-Host': 'cat-breeds.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.get(url, { ...options });
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default CatsApi;


