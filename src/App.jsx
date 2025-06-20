import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import { fetchImages } from './api/unplash';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [totalPages, setTotalPages] = useState(0);


  useEffect(() => {
    if (!searchQuery) return;

    async function getImages() {
      try {
        setIsLoading(true);
        const { images: newImages, totalPages } = await fetchImages(searchQuery, page);

        setImages(prevImages => (page === 1 ? newImages : [...prevImages, ...newImages]));
        setTotalPages(totalPages);
        setError(null);
      }catch (err) {
  console.error('ERROR FETCHING IMAGES:', err);
  setError('Oops! Something went wrong. Try again later.');
}
finally {
        setIsLoading(false);
      }
    }

    getImages();
  }, [searchQuery, page]);

  const handleSearch = newQuery => {
    if (newQuery === searchQuery) return; 
    setSearchQuery(newQuery);
    setImages([]);
    setPage(1);
    setError(null);
  };

  const handleLoadMore = () => setPage(prev => prev + 1);
  const handleImageClick = image => setSelectedImage(image);
  const handleCloseModal = () => setSelectedImage(null);

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {isLoading && <Loader />}
      {!isLoading && images.length > 0 && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={handleCloseModal} />
      )}
    </div>
  );
}
