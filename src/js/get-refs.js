export default function getRefs() {
  return {
    cardContainer: document.querySelector('.gallery'),
    searchForm: document.querySelector('.search-form'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]'),
    spinner: document.querySelector('#spinner'),
    galleryItem: document.querySelectorAll('.gallery-item'),
  };
}

