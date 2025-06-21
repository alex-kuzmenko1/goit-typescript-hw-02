

export interface Image {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  tags: string;

}

export interface PixabayResponse {
  hits: Image[];
  totalHits: number;
}

export interface SearchbarProps {
  onSubmit: (query: string) => void;
}

export interface ImageGalleryProps {
  images: Image[];
  onImageClick: (largeImageURL: string) => void;
}

export interface ImageGalleryItemProps {
  image: Image;
  onClick: (largeImageURL: string) => void;
}

export interface ButtonProps {
  onClick: () => void;
}

export interface LoaderProps {
  // Можно добавить параметры если надо, например size
}
