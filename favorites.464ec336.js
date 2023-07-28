function e(e,t,r,i){Object.defineProperty(e,t,{get:r,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},t.parcelRequired7c6=n),n.register("kyEFX",function(t,r){e(t.exports,"register",function(){return i},function(e){return i=e}),e(t.exports,"resolve",function(){return n},function(e){return n=e});var i,n,a={};i=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)a[t[r]]=e[t[r]]},n=function(e){var t=a[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),n("kyEFX").register(JSON.parse('{"iGlSd":"favorites.464ec336.js","gL9Ct":"heart-defs.9fecb2e2.svg","h24Vm":"index.777156ae.js","J1lrd":"index.82509fcf.js"}'));var a={};a=new URL(n("kyEFX").resolve("gL9Ct"),import.meta.url).toString();var o=n("9vIbv");const s=JSON.parse(localStorage.getItem("favorites"))??[],l=document.querySelector(".favorite-recipes-list"),c=document.querySelector(".favorite-filter-list"),d=document.querySelector(".block-favorit"),f=document.querySelectorAll(".recipe-btn"),u=document.querySelectorAll(".heart-fav-button"),v=s.map(({_id:e,title:t,category:r,rating:i,preview:n,tags:o,instructions:s})=>{var l;return`<li class="cards-favorite ${r}" data-id="${e}">

  <div class="favorite-recipe-img">
    <img class="images" src="${n}" alt="${o}" />
  </div>
    
  <div class="recipe-favorite-desc">
    <h2 class="title-favor">${t}</h2>
    <h3 class="${r} hidden"></h3>
    <p class="instr-favor">${s.slice(0,65)+"..."}</p>
  </div>

  <div class="rating-panel-favorite">
    <div class="raitingAllFoods">${i}</div>
    <div class="rating_blackAllFoods">
      <div class="rating__activeAllFoods"></div>
    </div>
    <button type="button" class="recipe-btn btn" id="${e}">See recipe</button>
  </div>
  
  <button class="heart-fav-button" type="button" >
  <svg class="heart-button-icon" width="20" height="20">
  <use href="${(l=a)&&l.__esModule?l.default:l}#heart">
  </use>
  </svg>
  </button>

</li>`}).join(""),g=s.map(({category:e})=>`<li class="favorite-filter-item">
      <button type="button" class="ff-btn btn">${e}</button>
    </li>`).filter((e,t,r)=>r.indexOf(e)===t).join("");function b(e){e.preventDefault();let t=e.currentTarget.id;(0,o.showModalAboutReciepts)(t)}function p(e){e.preventDefault();let t=e.currentTarget,r=findRecipe(t);if(console.log(t),t.classList.add("active"),t.classList.contains("active")){t.classList.remove("active");let e=favoriteArr.findIndex(({_id:e})=>e===r._id);console.log(e),favoriteArr.splice(e,1),localStorage.setItem("favorites",JSON.stringify(favoriteArr))}}c.insertAdjacentHTML("beforeend",g),l.insertAdjacentHTML("beforeend",v),v?d.classList.add("hidden"):c.classList.add("hidden"),c.addEventListener("click",function(e){if("BUTTON"!==e.target.tagName)return;let t=e.target.textContent;[...document.getElementsByClassName("cards-favorite")].forEach(e=>{e.classList.remove("hidden"),e.classList.contains(t)||"All categories"===t||e.classList.add("hidden")})}),f.forEach(e=>{e.addEventListener("click",b)}),u.forEach(e=>{e.addEventListener("click",p)}),n("bUb57"),n("7Iivd"),n("hYZFw"),n("9hmYe"),n("3XOAk"),n("aOwbl");
//# sourceMappingURL=favorites.464ec336.js.map
