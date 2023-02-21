import axios from 'axios';

const API_KEY = '32364615-2be80ccdd7afaf06b01934eee';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page) => {
  const { data } = await axios.get(
    `?q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12&key=${API_KEY}`
  );

  return data;
};
