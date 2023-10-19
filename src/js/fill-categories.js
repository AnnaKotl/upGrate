import { fetchCategories } from '../js/api-kay-js-files/api-scroll-categories';
import TemplateCategories from '../templates/categories.hbs';
import { Notify } from 'notiflix';


const refs = {
  categroyList: document.querySelector('.category-list'),
};

function renderCategoriesList(categories) {
  refs.categroyList.insertAdjacentHTML(
    'beforeend',
    TemplateCategories(categories)
  );
};
  
async function fillCategoriesList() {
  try {
    const categories = await fetchCategories();
    renderCategoriesList(categories);
  } catch (err) {
    console.log(err);
    Notify.failure('Something went wrong. Please try again');
  }
};


fillCategoriesList();


