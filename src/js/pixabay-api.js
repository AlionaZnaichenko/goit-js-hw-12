import axios from 'axios';
const KEY = '41516116-cb5e43cfa5be238239384ccbe';

const URL = 'https://pixabay.com/api/';

export const PER_PAGE = 15;

export async function getImagesByQuery(query, page) {
  const response = await axios.get(URL, {
    params: {
      key: KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: PER_PAGE,
      page,
    },
  });
  return response.data;
}
