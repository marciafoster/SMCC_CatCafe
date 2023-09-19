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
      'X-RapidAPI-Key': '1e6f726fcemsh8a15ed39832b6b0p1855a7jsn5244076c03bb',
      'X-RapidAPI-Host': 'cat-breeds.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.get(url, { ...options });
    const data = response.data; // Capture the response data
    console.log(data); // Log the data to the console
    return data; // Return the data
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default CatsApi;
