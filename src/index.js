import './styles.css';
import './styles.css';
import apiService from './js/picteres';
import updateCardsMarkup from './js/uppdate-card';

import getRefs from './js/get-refs';
const refs = getRefs();

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  apiService.searchQuery = form.elements.query.value;
  // console.log(inputValue)
  refs.cardContainer.innerHTML = '';

  apiService.resetPage();
  fetchHitsSpinnerVisibility();
  form.reset();
});

refs.loadMoreBtn.addEventListener('click', fetchHitsSpinnerVisibility);

function fetchHitsSpinnerVisibility () {
  refs.loadMoreBtn.classList.add('is-hidden');
  refs.spinner.classList.remove('is-hidden');

  apiService
    .fetchCards()
    .then(hits => {
      updateCardsMarkup(hits);
      refs.loadMoreBtn.classList.remove('is-hidden');
      // посмотреть высоту документа:
      // console.log(document.documentElement.offsetHeight);
      window.scrollTo({
        top: document.documentElement.offsetHeight,
        behavior: 'smooth',
      });
    })
    .finally(() => {
      refs.spinner.classList.add('is-hidden');
    });
}
