!function(){function e(e,t,i,r){Object.defineProperty(e,t,{get:i,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in i)return i[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var c=Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){r[e]=t},t.parcelRequired7c6=n),n.register("iE7OH",function(t,i){e(t.exports,"register",function(){return r},function(e){return r=e}),e(t.exports,"resolve",function(){return n},function(e){return n=e});var r,n,c={};r=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)c[t[i]]=e[t[i]]},n=function(e){var t=c[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),n.register("aNJCr",function(t,i){e(t.exports,"getBundleURL",function(){return r},function(e){return r=e});var r,n={};r=function(e){var t=n[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),n[e]=t),t}}),n("iE7OH").register(JSON.parse('{"7jcVS":"favorites.2ff33476.js","1BQtz":"heart-defs.9fecb2e2.svg"}'));var c={};c=n("aNJCr").getBundleURL("7jcVS")+n("iE7OH").resolve("1BQtz");let o={addToFavoriteBtn:document.querySelector(".btn-add"),removeFromFavoriteBtn:document.querySelector(".btn-outline-remove"),recieptsTitle:document.querySelector(".reciepts-title"),backdropRecipe:document.querySelector(".backdrop-video-recipes"),modalRecipe:document.querySelector(".modal-video-recipe"),closeBtn:document.querySelector(".modal-video-recipes-close-button"),tagsRecipe:document.querySelector(".tags-recipe"),ratingRecipe:document.querySelector(".rating-recipe"),minutesRecipe:document.querySelector(".minutes-recipe"),ingredientsRecipe:document.querySelector(".ingredients-recipe"),instructionsRecipe:document.querySelector(".instructions-recipe"),videoRecipe:document.querySelector(".video-recipe")};function s(){window.removeEventListener("keydown",a),document.body.classList.remove("overflowHidden"),o.backdropRecipe.classList.remove("active"),o.modalRecipe.classList.remove("active")}function a(e){"Escape"===e.code&&s()}function l(e){d(e).then(e=>{let t;t=`
    <div class="cards__rating rating">
    <div class="rating__value detail">${e.rating}</div>
    <div class="rating__body">
      <div class="rating__active"></div>
    </div>
  </div>`,o.ratingRecipe.innerHTML=t,function(){let e=parseFloat(document.querySelector(".rating__value.detail").textContent),t=document.querySelector(".rating__active");t.style.setProperty("width",20*e+"%")}(),function(e){let t=e.ingredients.map(({measure:e,name:t})=>`
        <li class="recipes-subtitle">
          ${t}
          <p class="recipes-inf">${e}</p>
        </li>
      `).join("");o.ingredientsRecipe.innerHTML=t}(e),function(e){if(0===e.tags.length)return;let t=e.tags.map(e=>` <li class="hashtags">#${e}</li>`).join("");o.tagsRecipe.innerHTML=t}(e),o.recieptsTitle.textContent=e.title,o.videoRecipe.src=e.preview,o.instructionsRecipe.textContent=e.instructions,o.minutesRecipe.textContent=e.time+" min",setTimeout(()=>{window.addEventListener("keydown",a),document.body.classList.add("overflowHidden"),o.backdropRecipe.classList.add("active"),o.modalRecipe.classList.add("active")},50),function(e){var t;let i;let r=`
   <iframe class="video-recipe-instruction"
                src="https://www.youtube.com/embed/${(i=(t=e.youtube).split("").length,t.split("").splice(32,i).join(""))}"
title = "YouTube video player"
frameborder = "0"
allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen
  ></iframe >
`;o.videoRecipe.innerHTML=r}(e),recipeId=e._id})}async function d(e){let t=await fetch(`https://tasty-treats-backend.p.goit.global/api/recipes/${e}`),i=await t.json();return i}o.closeBtn.addEventListener("click",s),o.backdropRecipe.addEventListener("click",function(e){e.currentTarget===e.target&&s()});let u=document.querySelector(".favorite-recipes-list"),p=document.querySelector(".favorite-filter-list"),f=document.querySelector(".block-favorit"),v=new class{fetchRecipes(){return fetch("https://tasty-treats-backend.p.goit.global/api/recipes?limit=12&page=1").then(e=>{if(!e.ok)throw Error(e.status);return e.json()})}};function g(e){if("BUTTON"!==e.target.tagName)return;let t=e.target.textContent;[...document.getElementsByClassName("cards-favorite")].forEach(e=>{e.classList.remove("hidden"),e.classList.contains(t)||"All categories"===t||e.classList.add("hidden")})}v.fetchRecipes().then(e=>{arrayRecipesFilter=e.results;let t=arrayRecipesFilter.map(({_id:e,title:t,rating:i,category:r,preview:n,tags:o,instructions:s})=>{var a;return`<li class="cards-favorite ${r}">
  <div class="recipe-img">
    <img class="images" src="${n}" alt="${o}" />
  </div>

  <div class="recipe-favorite-desc">
    <h1 class="title-favor">Title: ${t}</h1>
    <h2 class="${r} hidden">category: ${r}</h2>
    <p class="instr-favor">(${s}).slice(0, 50)</p>
  </div>
  <div class="rating-panel-favorite">
  <div class="raitingAllFoods">${i}</div>
  <div class="rating_blackAllFoods">
    <div class="rating__activeAllFoods"></div>
  </div>
    <button type="button" class="recipe-btn btn" id="${e}">See recipe</button>
  </div>  
    <button class="heart-button" type="button">
  <svg class="heart-button-icon" width="20" height="20">
  <use href="${(a=c)&&a.__esModule?a.default:a}#heart">
  </use>
  </svg>
  </button>
</li>`}).join(""),i=arrayRecipesFilter.map(({category:e})=>`<li class="favorite-filter-item">
      <button type="button" class="filter-btn btn">${e}</button>
    </li>`).filter((e,t,i)=>i.indexOf(e)===t).join("");p.insertAdjacentHTML("afterbegin",i),u.insertAdjacentHTML("beforeend",t),t?f.classList.add("hidden"):p.classList.add("hidden"),function(){let e=parseFloat(document.querySelector(".raitingAllFoods").textContent),t=document.querySelector(".rating__activeAllFoods");t.style.setProperty("width",20*e+"%")}();let r=document.querySelectorAll(".recipe-btn");r.forEach(e=>{e.addEventListener("click",e=>{let t=e.currentTarget.id;l(t)})}),p.addEventListener("click",g)}).catch(e=>{console.warn(e)});let m=document.querySelectorAll(".recipe-btn");m.forEach(e=>{e.addEventListener("click",e=>{let t=e.currentTarget.id;l(t)})})}();
//# sourceMappingURL=favorites.2ff33476.js.map
