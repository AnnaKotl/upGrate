!function(){function e(e,t,r,i){Object.defineProperty(e,t,{get:r,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},t.parcelRequired7c6=n),n.register("iE7OH",function(t,r){e(t.exports,"register",function(){return i},function(e){return i=e}),e(t.exports,"resolve",function(){return n},function(e){return n=e});var i,n,a={};i=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)a[t[r]]=e[t[r]]},n=function(e){var t=a[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),n.register("aNJCr",function(t,r){e(t.exports,"getBundleURL",function(){return i},function(e){return i=e});var i,n={};i=function(e){var t=n[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),n[e]=t),t}}),n("iE7OH").register(JSON.parse('{"bN78u":"favorites.d40feeec.js","1BQtz":"heart-defs.9fecb2e2.svg","h7pV2":"index.d2be635e.js","8bCMw":"index.4cc1198e.js"}'));var a={};a=n("aNJCr").getBundleURL("bN78u")+n("iE7OH").resolve("1BQtz");var o=n("89MHW");let s=JSON.parse(localStorage.getItem("favorites"))??[],c=document.querySelector(".favorite-recipes-list"),l=document.querySelector(".favorite-filter-list"),d=document.querySelector(".block-favorit"),f=document.querySelectorAll(".recipe-btn"),u=document.querySelectorAll(".heart-fav-button"),v=s.map(({_id:e,title:t,category:r,rating:i,preview:n,tags:o,instructions:s})=>{var c;return`<li class="cards-favorite ${r}" data-id="${e}">

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
  <use href="${(c=a)&&c.__esModule?c.default:c}#heart">
  </use>
  </svg>
  </button>

</li>`}).join(""),p=s.map(({category:e})=>`<li class="favorite-filter-item">
      <button type="button" class="ff-btn btn">${e}</button>
    </li>`).filter((e,t,r)=>r.indexOf(e)===t).join("");function g(e){e.preventDefault();let t=e.currentTarget.id;(0,o.showModalAboutReciepts)(t)}function b(e){e.preventDefault();let t=e.currentTarget,r=findRecipe(t);if(console.log(t),t.classList.add("active"),t.classList.contains("active")){t.classList.remove("active");let e=favoriteArr.findIndex(({_id:e})=>e===r._id);console.log(e),favoriteArr.splice(e,1),localStorage.setItem("favorites",JSON.stringify(favoriteArr))}}l.insertAdjacentHTML("beforeend",p),c.insertAdjacentHTML("beforeend",v),v?d.classList.add("hidden"):l.classList.add("hidden"),l.addEventListener("click",function(e){if("BUTTON"!==e.target.tagName)return;let t=e.target.textContent;[...document.getElementsByClassName("cards-favorite")].forEach(e=>{e.classList.remove("hidden"),e.classList.contains(t)||"All categories"===t||e.classList.add("hidden")})}),f.forEach(e=>{e.addEventListener("click",g)}),u.forEach(e=>{e.addEventListener("click",b)}),n("i8Q71"),n("d0Tth"),n("4PiVo"),n("334oU"),n("jpWR3"),n("icnFQ")}();
//# sourceMappingURL=favorites.d40feeec.js.map
