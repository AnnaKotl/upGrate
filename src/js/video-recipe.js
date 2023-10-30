import { favoriteArr } from './recipe-placeholder';
import Notiflix from 'notiflix';
import 'notiflix/src/notiflix.css';
import { setRecipeRating } from './api-kay-js-files/api-rating';

let refs = {
  recieptsTitle: document.querySelector('.reciepts-title'),
  backdropRecipe: document.querySelector('.backdrop-video-recipes'),
  modalRecipe: document.querySelector('.modal-video-recipe'),
  closeBtn: document.querySelector('.modal-video-recipes-close-button'),
  tagsRecipe: document.querySelector('.tags-recipe'),
  ratingRecipe: document.querySelector('.rating-recipe'),
  minutesRecipe: document.querySelector('.minutes-recipe'),
  ingredientsRecipe: document.querySelector('.ingredients-recipe'),
  instructionsRecipe: document.querySelector('.instructions-recipe'),
  videoRecipe: document.querySelector('.video-recipe'),
  placeForButtonsAdd: document.querySelector('.buttons-add'),
  openModalBtn: document.querySelectorAll('.give-a-rating'),
  tagsRatingMinuts: document.querySelector('.tags-rating-minuts'),
  closeModalBtn: document.querySelectorAll('.close-rating-btn'),
  modal: document.querySelector('.modal-rating'),
  form: document.querySelector('.modal-rating-content'),
  scrollButton: document.getElementById('scroll-up-button'),
};

let isModalOpen = false;

refs.closeBtn?.addEventListener('click', closeModalClose);
refs.backdropRecipe?.addEventListener('click', clickBackdropClick);

function openModalOpen() {
  setTimeout(() => {
    window.addEventListener('keydown', onEscPress);

    // Включити заборону прокрутки фону
    if (!isModalOpen) {
      document.body.style.overflow = 'hidden';
      isModalOpen = true;
    }

    refs.backdropRecipe.classList.add('active');
    refs.modalRecipe.classList.add('active');

    // scroll
    refs.scrollButton.style.display = 'none';
  }, 50);
}

function closeModalClose() {
  window.removeEventListener('keydown', onEscPress);
  document.body.classList.remove('overflowHidden');
  refs.backdropRecipe.classList.remove('active');
  refs.modalRecipe.classList.remove('active');

  // Вимкнути заборону прокрутки фону
  if (isModalOpen) {
    document.body.style.overflow = 'auto';
    isModalOpen = false;
  }

  // scroll
  refs.scrollButton.style.display = 'block';
}

function onEscPress(event) {
  if (event.code === 'Escape') {
    closeModalClose();
  }
}

function clickBackdropClick(event) {
  if (event.currentTarget === event.target) closeModalClose();
}

export function showModalAboutReciepts(id) {
  recieptsOfFood(id).then(data => {
    renderRanting(data);
    initRating();
    renderIngridient(data);
    renderHashtags(data);
    renderText(data);
    openModalOpen();
    renderVIDEO(data);
    buttonsAddToFavuorite(data);

    refs.addToFavoriteBtn = document.querySelector('.btn-add');

    document
      .getElementById('give-a-rating')
      .addEventListener('click', openModalRating);

    refs.form.addEventListener('submit', sendForm);

    refs.addToFavoriteBtn?.addEventListener('click', addToFavorite);

    updateFavoriteButton(data);
  });
}

async function recieptsOfFood(id) {
  const resp = await fetch(
    `https://tasty-treats-backend.p.goit.global/api/recipes/${id}`
  );
  const data = await resp.json();
  return data;
}

function renderText(data) {
  refs.recieptsTitle.textContent = data.title;
  refs.videoRecipe.src = data.preview;
  refs.instructionsRecipe.textContent = data.instructions;
  refs.minutesRecipe.textContent = data.time + ' min';
}

function initRating() {
  const ratingValue = parseFloat(
    document.querySelector('.rating__value.detail').textContent
  );
  const ratingActive = document.querySelector('.rating__active');
  const percentageOfStars = ratingValue * 20 + '%';

  ratingActive.style.setProperty('width', percentageOfStars);
}

function getKeyYouTube(url) {
  const urlParams = new URLSearchParams(new URL(url).search);
  return urlParams.get('v');
}

function renderVIDEO(data) {
  const markUp = `
    <iframe class="video-recipe-instruction"
                  src="https://www.youtube.com/embed/${getKeyYouTube(
                    data.youtube
                  )}"
  title = "YouTube video player"
  frameborder = "0"
  allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
    ></iframe >
  `;
  refs.videoRecipe.innerHTML = markUp;
}

function renderRanting(data) {
  let markupR = `
      <div class="cards__rating rating">
      <div class="rating__value detail">${data.rating}</div>
      <div class="rating__body">
        <div class="rating__active"></div>
      </div>
    </div>`;
  refs.ratingRecipe.innerHTML = markupR;
}

function renderIngridient(data) {
  const markup = data.ingredients
    .map(
      ({ measure, name }) => `
          <li class="recipes-subtitle">
            ${name}
            <p class="recipes-inf">${measure}</p>
          </li>
        `
    )
    .join('');
  refs.ingredientsRecipe.innerHTML = markup;
}

function buttonsAddToFavuorite(data) {
  let markupR = `<button type="button" id=${data._id} class="btn-add js-addToFavorite-btn">
            Add to favorite
          </button>
          <button type="button" id="give-a-rating" class="give-a-rating">
            Give a rating
          </button>`;
  refs.placeForButtonsAdd.innerHTML = markupR;
}

function renderHashtags(data) {
  if (data.tags.length === 0) {
    return;
  }
  if (data.tags.length >= 3) {
    refs.tagsRatingMinuts.style.flexDirection = 'column';
  } else refs.tagsRatingMinuts.style.flexDirection = 'row';
  const markup = data.tags
    .map(tag => ` <li class="hashtags">#${tag}</li>`)
    .join('');
  refs.tagsRecipe.innerHTML = markup;
}

function addToFavorite(event) {
  event.preventDefault();
  const addToFavoriteBtn = refs.addToFavoriteBtn;
  const id = event.currentTarget.id;
  const addtoFavHeartCard = document.querySelector(
    `button[data-id-favourite="${id}"]`
  );

  if (favoriteArr.includes(id)) {
    addToFavoriteBtn.classList.remove('active');
    addToFavoriteBtn.innerHTML = 'Add to favourite';
    const index = favoriteArr.indexOf(id);
    if (index !== -1) {
      favoriteArr.splice(index, 1);
      addtoFavHeartCard.classList.remove('active');
    }
  } else {
    addToFavoriteBtn.classList.add('active');
    addToFavoriteBtn.innerHTML = 'Remove from favourite';
    favoriteArr.push(id);
    addtoFavHeartCard.classList.add('active');
  }
  localStorage.setItem('favorites', JSON.stringify(favoriteArr));
}

function updateFavoriteButton(data) {
  const addToFavoriteBtn = refs.addToFavoriteBtn;
  const recipeId = data._id;
  if (favoriteArr.includes(recipeId)) {
    addToFavoriteBtn.classList.add('active');
    addToFavoriteBtn.innerHTML = 'Remove from favourite';
  } else {
    addToFavoriteBtn.classList.remove('active');
    addToFavoriteBtn.innerHTML = 'Add to favourite';
  }
}

// let isModalOpen = false;
refs.closeModalBtn.forEach(btn => btn.addEventListener('click', closeModal));

function openModalRating(e) {
  setTimeout(() => {
    e.preventDefault();

    closeModalClose(); //закрити модалку на фоні

    document.addEventListener('keydown', keyDownRate);
    refs.modal.classList.remove('is-hidden');
    refs.modal.addEventListener('click', closeBackdrop);
    document.body.classList.add('modal-open');

    clearRating();
    setRatingValue(0.0);

    // Включити заборону прокрутки фону
    if (!isModalOpen) {
      document.body.style.overflow = 'hidden';
      isModalOpen = true;
    }

    // scroll
    refs.scrollButton.style.display = 'none';
  }, 150);
}

function closeModal() {
  document.removeEventListener('keydown', keyDownRate);
  refs.modal.removeEventListener('click', closeBackdrop);
  refs.modal.classList.add('is-hidden');
  document.body.classList.remove('modal-open');

  clearRating();
  setRatingValue(0.0);
  clearEmailInput();

  // Вимкнути заборону прокрутки фону
  if (isModalOpen) {
    document.body.style.overflow = 'auto';
    isModalOpen = false;
  }

  // scroll
  refs.scrollButton.style.display = 'block';
}

function closeBackdrop(e) {
  if (e.target === refs.modal) {
    closeModal();
  }
}

function keyDownRate(e) {
  if (e.key === 'Escape') {
    closeModal();
    e.target.blur();
  }
}

function clearEmailInput() {
  const emailInput = document.getElementById('emailInput');
  emailInput.value = '';
}

function clearRating() {
  const ratingIcons = document.querySelectorAll('.rating-modal-form-icon');
  ratingIcons.forEach(icon => icon.classList.remove('active'));
}

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}

async function sendForm(e) {
  try {
    e.preventDefault();
    const idButton = document.getElementById('idButton');
    const id = idButton.getAttribute('data-recipe-id');

    const result = await setRecipeRating(id, getArgs(e.currentTarget.elements));
    if (!result) return Notiflix.Notify.failure('Send rating failure');
    Notiflix.Notify.success('Thank you for your rating');
    clearRating();
    refs.form.reset();
    toggleModal();
    clearEmailInput();
  } catch (err) {
    onError(err);
    // console.log(err);
  }
}

function getArgs({ 'user-email-for-rating': user_email, ratingValue }) {
  if (user_email.value.trim() === '' || ratingValue.value < 1)
    return Notiflix.Notify.failure('Please fill in all the fields!');
  return {
    rate: Number(ratingValue.value),
    email: user_email.value,
  };
}

function onError(error) {
  Notiflix.Notify.failure(error.message);
}

function setRatingValue(ratingValue) {
  const ratingValueInput = document.getElementById('ratingValue');
  ratingValueInput.value = ratingValue;
}

// stars
const ratingIcons = document.querySelectorAll('.rating-modal-form-icon');

ratingIcons.forEach(function (icon) {
  icon.addEventListener('click', function () {
    const ratingValue = this.getAttribute('data-rating');

    ratingIcons.forEach(function (icon) {
      if (icon.getAttribute('data-rating') <= ratingValue) {
        icon.classList.add('active');
      } else {
        icon.classList.remove('active');
      }
    });
    setRatingValue(ratingValue);
  });
});
