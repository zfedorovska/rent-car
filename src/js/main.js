import 'bootstrap';
import './cars-render';

import icons from '../images/icons.svg';

const refs = {
  mainCardRating: document.querySelector('#card-rating'),
  review1Rating: document.querySelector('#reviews__rating1'),
  review2Rating: document.querySelector('#reviews__rating2'),
};

const makeStarsRatingMarkup = rating => {
  let starsMakeUp = '';
  for (let i = 0; i < rating; i++) {
    starsMakeUp += `
    <li class="star__item"> 
        <svg class="icon-actions-star">
            <use href="${icons}#icon-actions-star"></use>
        </svg>
    </li>`;
  }
  for (let i = 0; i < 5 - rating; i++) {
    starsMakeUp += `
    <li class="star__item">              
        <svg class="icon-actions-star">
            <use href="${icons}#icon-empty-star"></use>
        </svg>
    </li>`;
  }
  return starsMakeUp;
};

refs.mainCardRating.innerHTML = makeStarsRatingMarkup(4);
refs.review1Rating.innerHTML = makeStarsRatingMarkup(4);
refs.review2Rating.innerHTML = makeStarsRatingMarkup(4);
