import { fetchImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('#gallery');
const loadMoreBtn = document.querySelector("#load-more-btn");
const loaderWrapper = document.querySelector("#loader");

const lightbox = new SimpleLightbox('.gallery a');

let currentQuery = "";
let currentPage = 1;
const perPage = 15;
let totalHits = 0;

form.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener("click", onLoadMore);

function showLoader() {
  loaderWrapper.classList.remove("hidden");
}

function hideLoader() {
  loaderWrapper.classList.add("hidden");
}

function showLoadMore() {
  loadMoreBtn.classList.remove("hidden");
}

function hideLoadMore() {
  loadMoreBtn.classList.add("hidden");
}

async function onSearch(event) {
  event.preventDefault();

  const query = event.target.searchQuery.value.trim();
  gallery.innerHTML = '';

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please, enter a search term!',
    });
    return;
  }

  currentQuery = query;
  currentPage = 1;
  totalHits = 0;
  gallery.innerHTML = "";
  hideLoadMore();

  try {
    showLoader();
    const data = await fetchImages(currentQuery, currentPage, perPage);
    hideLoader();

    if (!data.hits || data.hits.length === 0) {
      iziToast.info({
        title: "No Results",
        message: "Sorry, there are no images matching your search query. Please, try again!"
      });
      return;
    }
    totalHits = data.totalHits || 0;

    const markup = renderGallery(data.hits);
    gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();

    const shownSoFar = currentPage * perPage;

    if (shownSoFar < totalHits) {
      showLoadMore();
    } else {
      hideLoadMore();
    }
  } catch (error){
    hideLoader();
    iziToast.error({
      title: "Error",
      message: "Something went wrong while fetching images...",
    });
    console.error(error);
  }
}

async function onLoadMore() {
  currentPage += 1;
  hideLoadMore();

  try {
    showLoader();
    const data = await fetchImages(currentQuery, currentPage, perPage);
    hideLoader();

    if (!data.hits || data.hits.length === 0) {
      iziToast.info({
        title: "No more results",
        message: "You've reached the end of search results.",
      });
      hideLoadMore();
      return;
    }

    const markup = renderGallery(data.hits);
    const previousHeight = gallery.firstElementChild ? gallery.firstElementChild.getBoundingClientRect().height : 0;

    gallery.insertAdjacentHTML("beforeend", markup);
    lightbox.refresh();

    if (previousHeight) {
      window.scrollBy({
        top: previousHeight * 2,
        left: 0,
        behavior: "smooth",
      });
    }

    totalHits = data.totalHits || totalHits;

    const shownSoFar = currentPage * perPage;
    if (shownSoFar < totalHits) {
      showLoadMore();
    } else {
      hideLoadMore();
      iziToast.info({
        title: "End of results",
        message: "You've reached the end of search results.",
      });
    }
  } catch (error) {
    hideLoader();
    iziToast.error({
      title: "Error",
      message: "Something went wrong while fetching more images... Maybe, try again",
    });

    console.error(error);
    showLoadMore();
  }
}