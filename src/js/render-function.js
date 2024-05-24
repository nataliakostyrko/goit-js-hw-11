import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const imagesList = document.querySelector('.js-images-container');

let lightbox;

export function addImage(images) {
    const markup = images.map(({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads }) => `
    <a href="${largeImageURL}" class="gallery-list">
      <img src="${webformatURL}" 
           alt="${tags}"
           class="gallery-link"/>
           </a>
      <div class="info-list">
        <p class="info-item"><b>Likes:</b> ${likes}</p>
        <p class="info-item"><b>Views:</b> ${views}</p>
        <p class="info-item"><b>Comments:</b> ${comments}</p>
        <p class="info-item"><b>Downloads:</b> ${downloads}</p>
      </div>
    
  `)
        .join('');
  
  gallery.insertAdjacentHTML('beforeend', markup);

  if (!lightbox) {
    lightbox = new SimpleLightbox('.js-images-container a', { captionsData: 'alt', captionDelay: 250 });
  } else {
    lightbox.refresh();
  }
}

