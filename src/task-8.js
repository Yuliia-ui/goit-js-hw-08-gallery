import galleryItems from './gallery-items.js';

const refs = {
  gallery: document.querySelector('.js-gallery'),
  openModalBtn: document.querySelector('.js-lightbox'),
  contentModal: document.querySelector('.lightbox__content'),
  imageModal: document.querySelector('.lightbox__image'),
  closeModalBtn: document.querySelector('button[data-action="close-lightbox"]'),
};

refs.gallery.addEventListener('click', handleClick);
refs.contentModal.addEventListener('click', handleOverlay);
refs.closeModalBtn.addEventListener('click', handleClose);

const listGallery = galleryItems.reduce((acc, item) => {
  const itemGallery = `<li class="gallery__item">
<a
  class="gallery__link"
  href="${item.original}"
>
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  />
</a>
</li>`;

  acc += itemGallery;

  return acc;
}, '');

refs.gallery.insertAdjacentHTML('beforeend', listGallery);

function handleClick(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) {
    return;
  }

  refs.imageModal.src = event.target.dataset.source;
  refs.imageModal.alt = event.target.getAttribute('alt');
  refs.openModalBtn.classList.add('is-open');
  window.addEventListener('keydown', handleKeyPress);
}

function handleClose() {
  refs.openModalBtn.classList.remove('is-open');
  refs.imageVodal.src = '';
  refs.imageModal.alt = '';
  window.removeEventListener('keydown', handleKeyPress);
}

function handleOverlay(event) {
  if (event.target !== event.currentTarget) {
    return;
  }

  handleClose();
}

function handleKeyPress(event) {
  if (event.code !== 'Escape') {
    return;
  }

  handleClose();
}
