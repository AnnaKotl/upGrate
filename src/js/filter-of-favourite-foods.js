import { all } from 'axios';
import svg from '../images/heart-defs.svg';
import { favoriteArr } from './recipe-placeholder'; 
import { showModalAboutReciepts } from './video-recipe';
import { uniq } from 'lodash';

const favoriteRecipesList = document.querySelector('.favorite-recipes-list');
const favoriteFilterList = document.querySelector('.favorite-filter-list');
const blockFavorit = document.querySelector('.block-favorit');

function seeRecFav(evt) {
  evt.preventDefault()
  const clickedRecipeElement = evt.currentTarget.id
  showModalAboutReciepts(clickedRecipeElement)
}

function findRecipe(elem) {
  return elem.closest('.cards-favorite').dataset.id;
}

function onHeartButtonClick(evt) {
  evt.preventDefault();
  const currentBtn = evt.currentTarget;
  const cardId = findRecipe(currentBtn);
  currentBtn.classList.toggle('active');

  if (currentBtn.classList.contains('active')) {
    favoriteArr.push(cardId);
  } else {
    const recipeIndex = favoriteArr.indexOf(cardId);
    if (recipeIndex !== -1) {
      favoriteArr.splice(recipeIndex, 1);
    }
  }

  localStorage.setItem('favorites', JSON.stringify(favoriteArr));
}

function applyFavClassToItems() {
  const heartButtons = document.querySelectorAll('.heart-button');
  heartButtons.forEach(button => {
    const cardId = findRecipe(button);
    if (favoriteArr.includes(cardId)) {
      button.classList.add('active');
    }
  });
}

function checkOnFavourite(currentBtn, cardId) {
  if (favoriteArr.includes(cardId)) {
    currentBtn.classList.add('active');
  } else {
    currentBtn.classList.remove('active');
  }
}

function initRating() {
  const ratingValueElements = document.querySelectorAll('.raitingAllFoods');
  ratingValueElements.forEach(ratingElem => {
    const ratingValue = parseFloat(ratingElem.textContent);
    const ratingActive = ratingElem.nextElementSibling.querySelector(
      '.rating__activeAllFoods'
    );
    const percentageOfStars = ratingValue * 20 + '%';
    ratingActive.style.setProperty('width', percentageOfStars);
  });
}


const maxLength = 65
function createMarkup(arr) {
  return arr
    .map(
      ({
        _id,
        title,
        category,
        rating,
        preview,
        tags,
        instructions,
        area,
        time,
        ingredients,
      }) => {
        return `<li class="cards-favorite ${category}" data-id="${_id}">
          <div class="recipe-img">
            <img class="images" src="${preview}" alt="${tags}" />
          </div>
          <div class="recipe-desc">
            <h2 class="title-recipe">${title}</h2>
            <h3 class="${category} hidden"></h3>
            <p class="instr-recipe">${instructions.slice(0, maxLength) + '...'}</p>
            <p class="${area} hidden"></p>
            <p class="${time} hidden"></p>
            <p class="(${ingredients.map(({ measure }) => measure).join(', ')}) hidden"></p>
          </div>
          <div class="rating-panel">
            <div class="raitingAllFoods">${rating}</div>
            <div class="rating_blackAllFoods">
              <div class="rating__activeAllFoods"></div>
            </div>
            <button type="button" class="see-recipe-btn btn" id="${_id}">See recipe</button>
          </div>
          <button class="heart-button" type="button" data-id-favourite="${_id}">
            <svg class="heart-button-icon" width="20" height="20">
              <use href="${svg}#heart"></use>
            </svg>
          </button>
        </li>`;
      }
    )
    .join('');
}

function createFilterMarkup(data) {

  return uniqueCategories
    .map(category => {
      return `<li class="favorite-filter-item">
        <button type="button" class="ff-btn btn">${category}</button>
      </li>`;
    })
    .join('');
}


let uniqueCategories = [];

async function getFavouritesRecipes(favoriteArr) {
  try {
    const uniqueCategoriesSet = new Set();

    for (const recipeId of favoriteArr) {
      const response = await fetch(`https://tasty-treats-backend.p.goit.global/api/recipes/${recipeId}`);

      if (!response.ok) {
        throw new Error(response.status);
      }
      const data = await response.json();

      const resultsArray = Array.isArray(data) ? data : [data];

      resultsArray.forEach(recipe => {
        uniqueCategoriesSet.add(recipe.category);
      });

      const renderCards = createMarkup(resultsArray);
      favoriteRecipesList.insertAdjacentHTML('beforeend', renderCards);
       uniqueCategories = Array.from(uniqueCategoriesSet);
    }

   

    favoriteFilterList.insertAdjacentHTML('beforeend', createFilterMarkup(uniqueCategories));

    initRating();

    const heartButton = document.querySelectorAll('.heart-button');
    const recipeFavButtons = document.querySelectorAll('.see-recipe-btn');

    recipeFavButtons.forEach(button => {
      button.addEventListener('click', seeRecFav);
    });

    heartButton.forEach(button => {
      button.addEventListener('click', (evt) => {
        onHeartButtonClick(evt);
        checkOnFavourite(evt.currentTarget, findRecipe(evt.currentTarget));
      });
    });

    applyFavClassToItems();
  } catch (error) {
    console.warn(error);
  }
}



if (favoriteArr.length > 0) {
  blockFavorit.classList.add('hidden');
} else {
  favoriteFilterList.classList.add('hidden');
}

export function onFilterClick(evt) {
  if (evt.target.tagName !== 'BUTTON') return;
  let filterClass = evt.target.textContent;
  let allCards = [...document.getElementsByClassName('cards-favorite')];

  allCards.forEach(elem => {
    elem.classList.remove('hidden');
    if (
      !elem.classList.contains(filterClass) &&
      filterClass !== 'All categories'
    ) {
      elem.classList.add('hidden');
    }
  });
}

favoriteFilterList.addEventListener('click', onFilterClick);
getFavouritesRecipes(favoriteArr);
