import galleryItems from './gallery-items.js';

const refs = {
  gallery: document.querySelector('.js-gallery'),
  modal: document.querySelector('.js-lightbox'),
  content: document.querySelector('.lightbox__content'),
  image: document.querySelector('.lightbox__image'),
  button: document.querySelector('lightbox__button'),
};

refs.gallery.addEventListener('click', handleClick);
refs.content.addEventListener('click', handleOverlay);
refs.button.addEventListener('click', handleClose);
