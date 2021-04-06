import photoCardTpl from '../images/templates/photo-card.hbs';
import getRefs from './get-refs';
const refs = getRefs();

function updateCardsMarkup (hits) {
  const markup = photoCardTpl(hits);
  // console.log(markup);
  refs.cardContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateCardsMarkup;