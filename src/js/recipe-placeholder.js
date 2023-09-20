import Pagination from 'tui-pagination';
import { showModalAboutReciepts } from './video-recipe';
import svg from '../images/heart-defs.svg';

const recipesList = document.querySelector('.recipes-list');
const maxLength = 65;
let limit = 9;

const favoriteArr = JSON.parse(localStorage.getItem('favorites')) || [];

function onSeeBtnClick(evt) {
  evt.preventDefault();
  const clickedRecipeElement = evt.currentTarget.id;
  showModalAboutReciepts(clickedRecipeElement);
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

function findRecipe(elem) {
  return elem.closest('.cards').dataset.id;
}

function checkOnFavourite(currentBtn, cardId) {
  if (favoriteArr.includes(cardId)) {
    currentBtn.classList.add('active');
  } else {
    currentBtn.classList.remove('active');
  }
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

function getPagination({ page, perPage, totalPages }) {
  const container = document.getElementById('tui-pagination-container');
  const windowWidth = document.documentElement.clientWidth;
  let visiblePages = 0;

  if (windowWidth < 768) {
    visiblePages = 2;
    limit = 6;
  } else if (windowWidth >= 768 && windowWidth < 1280) {
    visiblePages = 3;
    limit = 8;
  } else if (windowWidth > 1280) {
    visiblePages = 3;
    limit = 9;
  }

  const options = {
    totalItems: totalPages * perPage,
    itemsPerPage: perPage,
    visiblePages: 3,
    page: +page,
    centerAlign: false,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };

  const pagination = new Pagination(container, options);

  pagination.on('afterMove', (event) => {
    getRecipes(event.page);
  });
}

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
        return `<li class="cards ${category}" data-id="${_id}">
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

async function getRecipes(page = 1) {
  try {
    const response = await fetch(`https://tasty-treats-backend.p.goit.global/api/recipes?limit=${limit}&page=${page}`);

    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();
    const renderCards = createMarkup(data.results);
    recipesList.innerHTML = renderCards;

    initRating();

    const heartButton = document.querySelectorAll('.heart-button');
    const recipeButtons = document.querySelectorAll('.see-recipe-btn');

    recipeButtons.forEach(button => {
      button.addEventListener('click', onSeeBtnClick);
    });

    heartButton.forEach(button => {
      button.addEventListener('click', (evt) => {
        onHeartButtonClick(evt);
        checkOnFavourite(evt.currentTarget, findRecipe(evt.currentTarget));
      });
    });

    applyFavClassToItems();

    getPagination(data);
  } catch (error) {
    console.warn(error);
  }
}

getRecipes();
