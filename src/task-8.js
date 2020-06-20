import galleryItems from './gallery-items.js';

const refs = {
  gallery: document.querySelector('.js-gallery'),
  modal: document.querySelector('.js-lightbox'),
  content: document.querySelector('.lightbox__content'),
  image: document.querySelector('.lightbox__image'),
  button: document.querySelector('.lightbox__button'),
};

refs.gallery.addEventListener('click', handleClick);
refs.content.addEventListener('click', handleOverlay);
refs.button.addEventListener('click', handleClose);

const createGallery = image => {
  const containerRef = document.createElement('li');
  containerRef.classList.add('gallery__item');

  const linkRef = document.createElement('a');
  linkRef.classList.add('gallery__link');

  const imgRef = document.createElement('img');
  imgRef.classList.add('gallery__image');
  imgRef.src = image.preview;
  imgRef.dataSource = image.original;
  imgRef.alt = image.description;

  containerRef.append(linkRef, imgRef);
  return containerRef;
};

const imageGallery = images
  .map(
    image => `li class="gallery__item"><a class="gallery__link">
  <img class="gallery__image" src=${image.preview} alt="${image.description}" 
  dataSource="${image.original}></a></li>`,
  )
  .join('');

refs.insertAdjacentHTML('afterbegin', imageGallery);
