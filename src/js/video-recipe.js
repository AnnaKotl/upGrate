import { favoriteArr } from "./recipe-placeholder";

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
  placeForButtonsAdd : document.querySelector('.buttons-add')
};

  refs.closeBtn?.addEventListener('click', closeModalClose);
  refs.backdropRecipe?.addEventListener('click', clickBackdropClick);

  function openModalOpen() {
    setTimeout(() => {
      window.addEventListener('keydown', onEscPress);
      document.body.classList.add('overflowHidden');
      refs.backdropRecipe.classList.add('active');
      refs.modalRecipe.classList.add('active');
    }, 50);
  }

  function closeModalClose() {
    window.removeEventListener('keydown', onEscPress);
    document.body.classList.remove('overflowHidden');
    refs.backdropRecipe.classList.remove('active');
    refs.modalRecipe.classList.remove('active');
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
     
      refs.addToFavoriteBtn = document.querySelector(".btn-add");
  
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
          </button>` 
          refs.placeForButtonsAdd.innerHTML = markupR; 
  }
        
  function renderHashtags(data) {
    if (data.tags.length === 0) {                  
      return;
    }
    const markup = data.tags
      .map(tag => ` <li class="hashtags">#${tag}</li>`)
      .join('');
    refs.tagsRecipe.innerHTML = markup; 
  }

  function addToFavorite(event) {
    event.preventDefault();
    const addToFavoriteBtn = refs.addToFavoriteBtn;
    const id = event.currentTarget.id;
    const addtoFavHeartCard = document.querySelector(`button[data-id-favourite="${id}"]`);

    if (favoriteArr.includes(id)) {
      addToFavoriteBtn.classList.remove('active');
      addToFavoriteBtn.innerHTML = "Add to favourite";
      const index = favoriteArr.indexOf(id);
      if (index !== -1) {
        favoriteArr.splice(index, 1);
        addtoFavHeartCard.classList.remove('active');
      }
    } else {
      addToFavoriteBtn.classList.add('active');
      addToFavoriteBtn.innerHTML = "Remove from favourite";
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
        addToFavoriteBtn.innerHTML = "Remove from favourite";

    } else {
        addToFavoriteBtn.classList.remove('active');
        addToFavoriteBtn.innerHTML = "Add to favourite";

    }
}

  
    
