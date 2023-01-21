import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '31560784-4ad39ddd1804a97882b0045c5';

export async function fetchImages(searchQuery, pageNumber) {
  try {
    const resp = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: pageNumber,
        per_page: 12,
      },
    });
    return resp.data;
  } catch (error) {
    console.log(error);
  }
}