import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { searchImages } from './js/pixabay-api.js';
import { addImage } from './js/render-function.js';

const formElem = document.querySelector('.images-form');
const imagesList = document.querySelector('.js-images-container');
const loader = document.querySelector('.loader');

formElem.addEventListener('submit', e => {
    e.preventDefault();

    imagesList.innerHTML = '';

    

    const query = e.target.elements.query.value.trim();

    if (!query) {
    return iziToast.warning({
      title: 'Warning',
      message: 'Sorry, there are no images matching your search query. Please try again!lease enter a search query!',
    });
  }

    searchImages(query).then(data => {

    })
});

