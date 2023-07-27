function e(e,t,r,i){Object.defineProperty(e,t,{get:r,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},t.parcelRequired7c6=n),n.register("kyEFX",function(t,r){e(t.exports,"register",function(){return i},function(e){return i=e}),e(t.exports,"resolve",function(){return n},function(e){return n=e});var i,n,s={};i=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)s[t[r]]=e[t[r]]},n=function(e){var t=s[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),n("kyEFX").register(JSON.parse('{"iGlSd":"favorites.f5fa43cd.js","gL9Ct":"heart-defs.9fecb2e2.svg","eYyqD":"index.2cb65997.js","e86Dc":"index.776d3e44.js"}'));var s={};s=new URL(n("kyEFX").resolve("gL9Ct"),import.meta.url).toString();var a=n("9vIbv");const o=JSON.parse(localStorage.getItem("favorites"))??[],l=document.querySelector(".favorite-recipes-list"),d=document.querySelector(".favorite-filter-list"),c=document.querySelector(".block-favorit"),f=document.querySelectorAll(".see-recipe-btn"),u=o.map(({_id:e,title:t,category:r,rating:i,preview:n,tags:a,instructions:o})=>{var l;return`<li class="cards-favorite ${r}" data-id="${e}">

  <div class="favorite-recipe-img">
    <img class="images" src="${n}" alt="${a}" />
  </div>
    
  <div class="recipe-favorite-desc">
    <h2 class="title-favor">${t}</h2>
    <h3 class="${r} hidden"></h3>
    <p class="instr-favor">${o.slice(0,65)+"..."}</p>
  </div>

  <div class="rating-panel-favorite">
    <div class="raitingAllFoods">${i}</div>
    <div class="rating_blackAllFoods">
      <div class="rating__activeAllFoods"></div>
    </div>
    <button type="button" class="see-recipe-btn btn" id="${e}">See recipe</button>
  </div>
  
  <button class="heart-button" type="button" >
  <svg class="heart-button-icon" width="20" height="20">
  <use href="${(l=s)&&l.__esModule?l.default:l}#heart">
  </use>
  </svg>
  </button>

</li>`}).join(""),v=o.map(({category:e})=>`<li class="favorite-filter-item">
      <button type="button" class="ff-btn btn">${e}</button>
    </li>`).filter((e,t,r)=>r.indexOf(e)===t).join("");function b(e){e.preventDefault();let t=e.currentTarget.id;(0,a.showModalAboutReciepts)(t)}d.insertAdjacentHTML("beforeend",v),l.insertAdjacentHTML("beforeend",u),u?c.classList.add("hidden"):d.classList.add("hidden"),d.addEventListener("click",function(e){if("BUTTON"!==e.target.tagName)return;let t=e.target.textContent;console.log(t),[...document.getElementsByClassName("cards-favorite")].forEach(e=>{e.classList.remove("hidden"),e.classList.contains(t)||"All categories"===t||e.classList.add("hidden")})}),f.forEach(e=>{e.addEventListener("click",b)}),n("bUb57"),n("7Iivd"),n("hYZFw"),n("9hmYe"),n("3XOAk"),n("aOwbl"),n("ijHsD");
//# sourceMappingURL=favorites.f5fa43cd.js.map
