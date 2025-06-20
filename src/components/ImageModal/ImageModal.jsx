import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

export default function ImageModal({ image, onClose }) {
  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      onClick={handleBackdropClick}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <img src={image.urls.regular} alt={image.alt_description} />
      <div className={css.info}>
        <p><strong>Author:</strong> {image.user.name}</p>
        <p><strong>Likes:</strong> {image.likes}</p>
        <p><strong>Description:</strong> {image.alt_description || 'N/A'}</p>
      </div>
    </Modal>
  );
}
