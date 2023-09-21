export let refs = {
  addToFavoriteBtn: document.querySelector('.btn-add'),
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
};

refs.closeBtn?.addEventListener('click', closeModalClose);
refs.backdropRecipe?.addEventListener('click', clickBackdropClick);

function openModalOpen() {
  setTimeout(() => {
    window.addEventListener('keydown', onEscPress);
    document.body.classList.add('overflowHidden');
    refs.backdropRecipe.classList.add('active');
    refs.modalRecipe.classList.add('active');

    const card = findRecipe(refs.addToFavoriteBtn);
    const inStorage = favoriteArr.some(({ _id }) => _id === card._id);
    if (inStorage) {
      refs.addToFavoriteBtn.classList.add('active');
      refs.addToFavoriteBtn.textContent = 'Remove from Favorite';
    } else {
      refs.addToFavoriteBtn.classList.remove('active');
      refs.addToFavoriteBtn.textContent = 'Add to Favorite';
    }
  }, 50);
}

function closeModalClose() {
  window.removeEventListener('keydown', onEscPress);
  document.body.classList.remove('overflowHidden');
  refs.backdropRecipe.classList.remove('active');
  refs.modalRecipe.classList.remove('active');
}

function onEscPress(key) {
  if (key.code === 'Escape') {
    closeModalClose();
  }
}
function clickBackdropClick(element) {
  if (element.currentTarget === element.target) closeModalClose();
}

export function showModalAboutReciepts(id) {
  recieptsOfFood(id).then(data => {
    // isRecieptFavourite(data); 
    renderRanting(data);
    initRating();
    renderIngridient(data);
    renderHashtags(data);
    renderText(data);
    openModalOpen();
    renderVIDEO(data);
    recipeId = data._id;
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

function getKeyYouTybe(url) {
  let indexLast = url.split('').length;
  let key = url.split('').splice(32, indexLast).join('');
  return key;
}
function renderVIDEO(data) {
  const markUp = `
   <iframe class="video-recipe-instruction"
                src="https://www.youtube.com/embed/${getKeyYouTybe(
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
  refs.ratingRecipe.innerHTML = markupR; // Change refs.ratingBox to refs.ratingRecipe
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
  refs.ingredientsRecipe.innerHTML = markup; // Change refs.IngredientBox to refs.ingredientsRecipe
}

function renderHashtags(data) {
  if (data.tags.length === 0) {
    return;
  }
  const markup = data.tags
    .map(tag => ` <li class="hashtags">#${tag}</li>`)
    .join('');
  refs.tagsRecipe.innerHTML = markup; // Change refs.hashtagsBox to refs.tagsRecipe
}


let isFavorite = false;

function onFavouriteBtnClick() {
  isFavorite = !isFavorite; // Инвертируем состояние при каждом клике

  if (isFavorite) {
    refs.addToFavoriteBtn.classList.add('active');
    refs.addToFavoriteBtn.textContent = 'Remove from favorite';
  } else {
    refs.addToFavoriteBtn.classList.remove('active');
    refs.addToFavoriteBtn.textContent = 'Add to Favorite';
  }
}
// const seeRecipe = document.querySelector('.recipe_desc_btn');


// Добавляем слушатель на кнопку
refs.addToFavoriteBtn.addEventListener('click', onFavouriteBtnClick);



// export let refs = {
//   addToFavoriteBtn: document.querySelector('.btn-add'),
//   recieptsTitle: document.querySelector('.reciepts-title'),
//   backdropRecipe: document.querySelector('.backdrop-video-recipes'),
//   modalRecipe: document.querySelector('.modal-video-recipe'),
//   closeBtn: document.querySelector('.modal-video-recipes-close-button'),
//   tagsRecipe: document.querySelector('.tags-recipe'),
//   ratingRecipe: document.querySelector('.rating-recipe'),
//   minutesRecipe: document.querySelector('.minutes-recipe'),
//   ingredientsRecipe: document.querySelector('.ingredients-recipe'),
//   instructionsRecipe: document.querySelector('.instructions-recipe'),
//   videoRecipe: document.querySelector('.video-recipe'),
//   placeForButtonsAdd : document.querySelector('.buttons-add')
// };

// let favoriteArr = JSON.parse(localStorage.getItem('favorites')) || [];

// refs.closeBtn?.addEventListener('click', closeModalClose);
// refs.backdropRecipe?.addEventListener('click', clickBackdropClick);

// function openModalOpen() {
//   setTimeout(() => {
//     window.addEventListener('keydown', onEscPress);
//     document.body.classList.add('overflowHidden');
//     refs.backdropRecipe.classList.add('active');
//     refs.modalRecipe.classList.add('active');
//   }, 50);
// }

// function closeModalClose() {
//   window.removeEventListener('keydown', onEscPress);
//   document.body.classList.remove('overflowHidden');
//   refs.backdropRecipe.classList.remove('active');
//   refs.modalRecipe.classList.remove('active');
// }

// function onEscPress(event) {
//   if (event.code === 'Escape') {
//     closeModalClose();
//   }
// }

// function clickBackdropClick(event) {
//   if (event.currentTarget === event.target) closeModalClose();
// }

// export function showModalAboutReciepts(id) {
//   recieptsOfFood(id).then(data => {
//     renderRanting(data);
//     initRating();
//     renderIngridient(data);
//     renderHashtags(data);
//     renderText(data);
//     openModalOpen();
//     renderVIDEO(data);
//     favouriteCheck(data);
//     buttonsAddToFavuorite(data)
//   });
// }

// async function recieptsOfFood(id) {
//   const resp = await fetch(
//     `https://tasty-treats-backend.p.goit.global/api/recipes/${id}`
//   );
//   const data = await resp.json();
//   return data;
// }

// function renderText(data) {
//   refs.recieptsTitle.textContent = data.title;
//   refs.videoRecipe.src = data.preview;
//   refs.instructionsRecipe.textContent = data.instructions;
//   refs.minutesRecipe.textContent = data.time + ' min';
// }

// function initRating() {
//   const ratingValue = parseFloat(
//     document.querySelector('.rating__value.detail').textContent
//   );
//   const ratingActive = document.querySelector('.rating__active');
//   const percentageOfStars = ratingValue * 20 + '%';

//   ratingActive.style.setProperty('width', percentageOfStars);
// }

// function getKeyYouTube(url) {
//   const urlParams = new URLSearchParams(new URL(url).search);
//   return urlParams.get('v');
// }

// function renderVIDEO(data) {
//   const markUp = `
//    <iframe class="video-recipe-instruction"
//                 src="https://www.youtube.com/embed/${getKeyYouTube(
//                   data.youtube
//                 )}"
// title = "YouTube video player"
// frameborder = "0"
// allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
// allowfullscreen
//   ></iframe >
// `;
//   refs.videoRecipe.innerHTML = markUp;
// }

// function renderRanting(data) {
//   let markupR = `
//     <div class="cards__rating rating">
//     <div class="rating__value detail">${data.rating}</div>
//     <div class="rating__body">
//       <div class="rating__active"></div>
//     </div>
//   </div>`;
//   refs.ratingRecipe.innerHTML = markupR; // Change refs.ratingBox to refs.ratingRecipe
// }

// function renderIngridient(data) {
//   const markup = data.ingredients
//     .map(
//       ({ measure, name }) => `
//         <li class="recipes-subtitle">
//           ${name}
//           <p class="recipes-inf">${measure}</p>
//         </li>
//       `
//     )
//     .join('');
//   refs.ingredientsRecipe.innerHTML = markup; // Change refs.IngredientBox to refs.ingredientsRecipe
// }


// function buttonsAddToFavuorite(data) {
//   let markupR = `<button type="button" id=${data._id} class="btn-add js-addToFavorite-btn">
//           Add to favorite
//         </button>
//         <button type="button" id="give-a-rating" class="give-a-rating">
//           Give a rating
//         </button>` 
//         refs.placeForButtonsAdd.innerHTML = markupR; // Change refs.ratingBox to refs.ratingRecipe
// }
      


// function renderHashtags(data) {
//   if (data.tags.length === 0) {
//     return;
//   }
//   const markup = data.tags
//     .map(tag => ` <li class="hashtags">#${tag}</li>`)
//     .join('');
//   refs.tagsRecipe.innerHTML = markup; // Change refs.hashtagsBox to refs.tagsRecipe
// }

// function checkOnFavouriteModal(addToFavoriteBtn, _id) {
//   if (favoriteArr.includes(_id)) {
//     addToFavoriteBtn.classList.add('active');
//     currentBtn.innerHTML = "Remove from favourite"
//   } else {
//     addToFavoriteBtn.classList.remove('active');
//     currentBtn.innerHTML = "Add to favourite"
//   }
// }

// function addToFavorite(event) {
//   event.preventDefault(); 
//   const currentBtn = event.currentTarget;
//   currentBtn.classList.toggle('active');
//   if (currentBtn.classList.contains('active')) {
//     favoriteArr.push(_id);
//   } else {
//     const recipeIndex = favoriteArr.indexOf(_id);
//     if (recipeIndex !== -1) {
//       favoriteArr.splice(recipeIndex, 1);
//     }
//   }
//   localStorage.setItem('favorites', JSON.stringify(favoriteArr));
// }


// function favouriteCheck() {
//   refs.addToFavoriteBtn.addEventListener('click', (event) => {
//     addToFavorite(event); 
//     console.log(addToFavorite)
//     checkOnFavouriteModal(refs.addToFavoriteBtn, findRecipe(refs.addToFavoriteBtn));
//   });
  
// }

