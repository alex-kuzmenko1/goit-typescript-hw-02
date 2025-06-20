import axios from 'axios';

const ACCESS_KEY = 'tTC-lJpynw8eiPaYDLpQU6uXFibwPe-pyMAbgMVPNys';
const PER_PAGE = 12;

export const fetchImages = async (query, page = 1) => {
  try {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query,
        page,
        per_page: PER_PAGE,
        client_id: ACCESS_KEY,
      },
    });

    const images = response.data.results;
    const totalPages = response.data.total_pages;

    return { images, totalPages };
  } catch (error) {
    console.error('Fetch error:', error);
    return { images: [], totalPages: 0 }; 
  }
};
