function e(e,t,r,i){Object.defineProperty(e,t,{get:r,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},t.parcelRequired7c6=n),n.register("kyEFX",function(t,r){e(t.exports,"register",function(){return i},function(e){return i=e}),e(t.exports,"resolve",function(){return n},function(e){return n=e});var i,n,s={};i=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)s[t[r]]=e[t[r]]},n=function(e){var t=s[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),n("kyEFX").register(JSON.parse('{"iGlSd":"favorites.150555c8.js","gL9Ct":"heart-defs.9fecb2e2.svg","eYyqD":"index.2cb65997.js","e86Dc":"index.776d3e44.js"}'));var s={};s=new URL(n("kyEFX").resolve("gL9Ct"),import.meta.url).toString();var a=n("9vIbv");const o=JSON.parse(localStorage.getItem("favorites"))??[],l=document.querySelector(".favorite-recipes-list"),d=document.querySelector(".favorite-filter-list"),c=document.querySelector(".block-favorit"),u=o.map(({_id:e,title:t,rating:r,category:i,preview:n,tags:a,instructions:o})=>{var l;return`<li class="cards-favorite ${i}">
  <div class="recipe-img">
    <img class="images" src="${n}" alt="${a}" />
  </div>
  <div class="recipe-favorite-desc">
    <h1 class="title-favor">Title: ${t}</h1>
    <h2 class="${i} hidden">category: ${i}</h2>
    <p class="instr-favor">(${o}).slice(0, 50)</p>
  </div>
  <div class="rating-panel-favorite">
    <div class="raitingAllFoods">${r}</div>
    <div class="rating_blackAllFoods">
      <div class="rating__activeAllFoods"></div>
    </div>
    <button type="button" class="recipe-btn btn" id="${e}">See recipe</button>
  </div>
  <button class="heart-button" type="button">
    <svg class="heart-button-icon" width="20" height="20">
      <use href="${(l=s)&&l.__esModule?l.default:l}#heart"></use>
    </svg>
  </button>
</li>`}).join(""),f=o.map(({category:e})=>`<li class="favorite-filter-item">
      <button type="button" class="filter-btn btn">${e}</button>
    </li>`).filter((e,t,r)=>r.indexOf(e)===t).join("");d.insertAdjacentHTML("beforeend",f),l.insertAdjacentHTML("beforeend",u),u?c.classList.add("hidden"):d.classList.add("hidden"),d.addEventListener("click",function(e){if("BUTTON"!==e.target.tagName)return;let t=e.target.textContent;[...document.getElementsByClassName("cards-favorite")].forEach(e=>{e.classList.remove("hidden"),e.classList.contains(t)||"All categories"===t||e.classList.add("hidden")})});const v=document.querySelectorAll(".recipe-btn");v.forEach(e=>{e.addEventListener("click",e=>{let t=e.currentTarget.id;(0,a.showModalAboutReciepts)(t)})}),n("bUb57"),n("7Iivd"),n("hYZFw"),n("9hmYe"),n("3XOAk"),n("aOwbl"),n("ijHsD");
//# sourceMappingURL=favorites.150555c8.js.map
