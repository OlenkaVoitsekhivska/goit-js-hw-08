// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import '../css/common.css';
import '../css/01-gallery.css';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
const imgGalleryMarkup = galleryItems.map(({preview,original,description})=>{
    return  `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
      `
  }).join('');
  
  
  const galleryRef = document.querySelector('.gallery');
  
  galleryRef.insertAdjacentHTML('beforeend', imgGalleryMarkup);
  

galleryRef.addEventListener('click', (evt)=>{
    evt.preventDefault();
    if(evt.target.classList.contains("gallery__image")){
    let lightbox = new SimpleLightbox('.gallery a', { scrollZoom:false,captionDelay:250, captionsData:'alt',doubleTapZoom:1});
    }
})
