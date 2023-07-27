function e(e,t,i,r){Object.defineProperty(e,t,{get:i,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in i)return i[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=n),n.register("kyEFX",function(t,i){e(t.exports,"register",function(){return r},function(e){return r=e}),e(t.exports,"resolve",function(){return n},function(e){return n=e});var r,n,o={};r=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)o[t[i]]=e[t[i]]},n=function(e){var t=o[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),n("kyEFX").register(JSON.parse('{"cXxOA":"favorites.1a711f89.js","gL9Ct":"heart-defs.9fecb2e2.svg"}'));var o={};o=new URL(n("kyEFX").resolve("gL9Ct"),import.meta.url).toString();let c={addToFavoriteBtn:document.querySelector(".btn-add"),removeFromFavoriteBtn:document.querySelector(".btn-outline-remove"),recieptsTitle:document.querySelector(".reciepts-title"),backdropRecipe:document.querySelector(".backdrop-video-recipes"),modalRecipe:document.querySelector(".modal-video-recipe"),closeBtn:document.querySelector(".modal-video-recipes-close-button"),tagsRecipe:document.querySelector(".tags-recipe"),ratingRecipe:document.querySelector(".rating-recipe"),minutesRecipe:document.querySelector(".minutes-recipe"),ingredientsRecipe:document.querySelector(".ingredients-recipe"),instructionsRecipe:document.querySelector(".instructions-recipe"),videoRecipe:document.querySelector(".video-recipe")};function s(){window.removeEventListener("keydown",a),document.body.classList.remove("overflowHidden"),c.backdropRecipe.classList.remove("active"),c.modalRecipe.classList.remove("active")}function a(e){"Escape"===e.code&&s()}async function l(e){let t=await fetch(`https://tasty-treats-backend.p.goit.global/api/recipes/${e}`),i=await t.json();return i}c.closeBtn.addEventListener("click",s),c.backdropRecipe.addEventListener("click",function(e){e.currentTarget===e.target&&s()});const d=JSON.parse(localStorage.getItem("favorites"))??[],u=document.querySelector(".favorite-recipes-list"),p=document.querySelector(".favorite-filter-list"),v=document.querySelector(".block-favorit"),f=d.map(({_id:e,title:t,rating:i,category:r,preview:n,tags:c,instructions:s})=>{var a;return`<li class="cards-favorite ${r}">
  <div class="recipe-img">
    <img class="images" src="${n}" alt="${c}" />
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
      <use href="${(a=o)&&a.__esModule?a.default:a}#heart"></use>
    </svg>
  </button>
</li>`}).join(""),g=d.map(({category:e})=>`<li class="favorite-filter-item">
      <button type="button" class="filter-btn btn">${e}</button>
    </li>`).filter((e,t,i)=>i.indexOf(e)===t).join("");p.insertAdjacentHTML("beforeend",g),u.insertAdjacentHTML("beforeend",f),f?v.classList.add("hidden"):p.classList.add("hidden"),p.addEventListener("click",function(e){if("BUTTON"!==e.target.tagName)return;let t=e.target.textContent;[...document.getElementsByClassName("cards-favorite")].forEach(e=>{e.classList.remove("hidden"),e.classList.contains(t)||"All categories"===t||e.classList.add("hidden")})});const m=document.querySelectorAll(".recipe-btn");m.forEach(e=>{e.addEventListener("click",e=>{let t=e.currentTarget.id;!function(e){l(e).then(e=>{let t;t=`
    <div class="cards__rating rating">
    <div class="rating__value detail">${e.rating}</div>
    <div class="rating__body">
      <div class="rating__active"></div>
    </div>
  </div>`,c.ratingRecipe.innerHTML=t,function(){let e=parseFloat(document.querySelector(".rating__value.detail").textContent),t=document.querySelector(".rating__active");t.style.setProperty("width",20*e+"%")}(),function(e){let t=e.ingredients.map(({measure:e,name:t})=>`
        <li class="recipes-subtitle">
          ${t}
          <p class="recipes-inf">${e}</p>
        </li>
      `).join("");c.ingredientsRecipe.innerHTML=t}(e),function(e){if(0===e.tags.length)return;let t=e.tags.map(e=>` <li class="hashtags">#${e}</li>`).join("");c.tagsRecipe.innerHTML=t}(e),c.recieptsTitle.textContent=e.title,c.videoRecipe.src=e.preview,c.instructionsRecipe.textContent=e.instructions,c.minutesRecipe.textContent=e.time+" min",setTimeout(()=>{window.addEventListener("keydown",a),document.body.classList.add("overflowHidden"),c.backdropRecipe.classList.add("active"),c.modalRecipe.classList.add("active")},50),function(e){var t;let i;let r=`
   <iframe class="video-recipe-instruction"
                src="https://www.youtube.com/embed/${(i=(t=e.youtube).split("").length,t.split("").splice(32,i).join(""))}"
title = "YouTube video player"
frameborder = "0"
allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen
  ></iframe >
`;c.videoRecipe.innerHTML=r}(e),recipeId=e._id})}(t)})});
//# sourceMappingURL=favorites.1a711f89.js.map
