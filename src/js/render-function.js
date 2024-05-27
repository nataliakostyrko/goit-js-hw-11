import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';



let lightbox;

function imageTemplate(image) {
  return `<li class='image-gallery'>
    <a href="${image.largeImageURL}" class="gallery-list">
      <img src="${image.webformatURL}" 
           alt="${image.tags}" loading="lazy"
           class="gallery-link"/>
           </a>
      <div class="info-list">
        <p class="info-item"><b>Likes:</b> ${image.likes}</p>
        <p class="info-item"><b>Views:</b> ${image.views}</p>
        <p class="info-item"><b>Comments:</b> ${image.comments}</p>
        <p class="info-item"><b>Downloads:</b> ${image.downloads}</p>
      </div>
      </li>
      `;
}

function imagesTemplate(arr) {
  return arr.map(imageTemplate).join('');
}


export function addImage(images) {
  const markup = imagesTemplate(images);
  imagesList.insertAdjacentHTML('beforeend', markup);
  if (!lightbox) {
    lightbox = new SimpleLightbox('.js-images-container a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
}