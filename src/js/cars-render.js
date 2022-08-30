import recentCars from '../data/recentCars';
import recomendationCars from '../data/recomendationCars';
import icons from '../images/icons.svg';
import images from './images.js';

const refs = {
  recentCars: document.querySelector('.recent__list'),
  recomendationCars: document.querySelector('.recomendation__list'),
};

const makeCarItemMarkup = car => {
  let carName = car.name.includes('_')
    ? car.name.replaceAll('_', ' ')
    : car.name;
  const imgSrc = images.find(
    item => item.includes(car.name.split(' ')[0]) && item.includes('desktop_1x')
  );

  let oldPriceMarkup = '';
  if (car.oldPrice) {
    oldPriceMarkup = `
      <div class="card-price__old ">
        $${car.oldPrice}
      </div>`;
  }

  return `
            <li class="cars__item">
              <div class="card">
                <div class="cars__header">
                  <div class="card-title">${carName}</div>
                  <button class="cars__heart" type="submit">
                    <svg class="heart__icon1 ${car.like}">
                      <use href="${icons}#icon-heart1"></use>
                    </svg>
                  </button>
                </div>
                <div class="card-subtitle">Sport</div>
                <div class="thumb">
                
                  <img
                    src=${imgSrc}
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div class="card-body">
                  <ul class="cars__specifications list">
                    <li class="specifications__item">
                      <svg class="cars-icon gas-station-down__icon">
                        <use href="${icons}#icon-gas-station"></use>
                      </svg>
                      <div>${car.fuel}</div>
                    </li>
                    <li class="specifications__item">
                      <svg class="cars-icon car__icon">
                        <use href="${icons}#icon-car"></use>
                      </svg>
                      <div>${car.steering}</div>
                    </li>
                    <li class="specifications__item">
                      <svg class="cars-icon 2user__icon">
                        <use href="${icons}#icon-profile-2user"></use>
                      </svg>
                      <div>${car.capacity}</div>
                    </li>
                  </ul>
                  <div class="card__bottom">
                    <div class="card-price">
                    <div class="card-price__new">
                      $${car.price}/ <span class="card-price__days">day</span>
                    </div>
                      ${oldPriceMarkup}
                    </div>
                    <button type="button" class="btn btn-primary rent-button">
                      Rent Now
                    </button>
                  </div>
                </div>
              </div>
            </li>`;
};

const makeRecentCars = recentCars.map(makeCarItemMarkup).join('');
const makeRecomendationCars = recomendationCars.map(makeCarItemMarkup).join('');
refs.recentCars.innerHTML = makeRecentCars;
refs.recomendationCars.innerHTML = makeRecomendationCars;
