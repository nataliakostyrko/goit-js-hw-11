import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { searchImages } from './js/pixabay-api.js';
import { addImage } from './js/render-function.js';

const formElem = document.querySelector('.images-form');
const imagesList = document.querySelector('.js-images-container');
const loader = document.querySelector('.loader');



formElem.addEventListener('submit', event => {
    event.preventDefault();
    
    const query = event.target.elements.query.value.trim();

    if (!query) {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search query',
        });
        
        hideLoader();

        return;
    }
    showLoader();
    imagesList.innerHTML = '';

    searchImages(query)
        .then(data => {
            if (data && data.hits && data.hits.length) {
                addImage(data.hits);
            } else {
                throw Error(
                    'Sorry, there are no images matching your search query. Please try again!'
                );
            }
        })

        .catch(error => {
            iziToast.error({
                title: 'Error',
                message: error.message,
            });
        })
        .finally(() => {
            hideLoader();
        });

    formElem.reset();
});




function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
    loader.style.display = 'none';
}

