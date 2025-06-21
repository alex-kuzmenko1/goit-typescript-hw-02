import { useEffect } from 'react';

interface ModalProps {
  largeImageURL: string;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ largeImageURL, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div onClick={onClose}>
      <img src={largeImageURL} alt="" />
    </div>
  );
};
