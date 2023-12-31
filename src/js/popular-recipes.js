import { showModalAboutReciepts } from './video-recipe';

const url = 'https://tasty-treats-backend.p.goit.global/api/recipes/popular';

const pop_recipe_info = document.querySelector('.popular-recipes');

function fetchPopularRecipes() {
  return fetch(`${url}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

fetchPopularRecipes()
  .then(data => {
    //pop_recipe_info.insertAdjacentHTML('beforeend', renderPopularRecipes(data));
    pop_recipe_info.innerHTML = renderPopularRecipes(data);
  })
  .catch(error => {
    console.log(error);
  });

function renderPopularRecipes(recipes) {
  return recipes
    .map(({ _id, preview, title, description }) => {
      return `<li class="pop-recipe-link" id="${_id}">
      <div class="pop-recipe-card">
    <img class="img-pop-recipe" src="${preview}" width="64" height="64" alt="">
    <div class="text-pop-recipe">
    <h3 class="title-pop-recipe" data-change-color='true'>${title}</h3>
    <p class="description-pop-recipe" data-change-color='true'>${description}</p>
    </div>
    </div>
  </li>`;
    })
    .join('');
}

const openResipesCards = document.getElementById('popularRecipeList');
openResipesCards.addEventListener('click', event => {
  const clickedEl = event.target.closest('.pop-recipe-link');
  showModalAboutReciepts(clickedEl.id);
});
