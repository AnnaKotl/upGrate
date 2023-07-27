!function(){function e(e,t,r,i){Object.defineProperty(e,t,{get:r,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequired7c6=n),n.register("iE7OH",function(t,r){e(t.exports,"register",function(){return i},function(e){return i=e}),e(t.exports,"resolve",function(){return n},function(e){return n=e});var i,n,o={};i=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)o[t[r]]=e[t[r]]},n=function(e){var t=o[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),n.register("aNJCr",function(t,r){e(t.exports,"getBundleURL",function(){return i},function(e){return i=e});var i,n={};i=function(e){var t=n[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),n[e]=t),t}}),n("iE7OH").register(JSON.parse('{"bN78u":"favorites.5f73d60d.js","1BQtz":"heart-defs.9fecb2e2.svg","1prPx":"index.e229201c.js","8GYBO":"index.35a3c831.js"}'));var o={};o=n("aNJCr").getBundleURL("bN78u")+n("iE7OH").resolve("1BQtz");var s=n("89MHW");let a=JSON.parse(localStorage.getItem("favorites"))??[],c=document.querySelector(".favorite-recipes-list"),l=document.querySelector(".favorite-filter-list"),d=document.querySelector(".block-favorit"),u=a.map(({_id:e,title:t,rating:r,category:i,preview:n,tags:s,instructions:a})=>{var c;return`<li class="cards-favorite ${i}">
  <div class="recipe-img">
    <img class="images" src="${n}" alt="${s}" />
  </div>
  <div class="recipe-favorite-desc">
    <h1 class="title-favor">Title: ${t}</h1>
    <h2 class="${i} hidden">category: ${i}</h2>
    <p class="instr-favor">(${a}).slice(0, 50)</p>
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
      <use href="${(c=o)&&c.__esModule?c.default:c}#heart"></use>
    </svg>
  </button>
</li>`}).join(""),f=a.map(({category:e})=>`<li class="favorite-filter-item">
      <button type="button" class="filter-btn btn">${e}</button>
    </li>`).filter((e,t,r)=>r.indexOf(e)===t).join("");l.insertAdjacentHTML("beforeend",f),c.insertAdjacentHTML("beforeend",u),u?d.classList.add("hidden"):l.classList.add("hidden"),l.addEventListener("click",function(e){if("BUTTON"!==e.target.tagName)return;let t=e.target.textContent;[...document.getElementsByClassName("cards-favorite")].forEach(e=>{e.classList.remove("hidden"),e.classList.contains(t)||"All categories"===t||e.classList.add("hidden")})});let v=document.querySelectorAll(".recipe-btn");v.forEach(e=>{e.addEventListener("click",e=>{let t=e.currentTarget.id;(0,s.showModalAboutReciepts)(t)})}),n("i8Q71"),n("d0Tth"),n("4PiVo"),n("334oU"),n("jpWR3"),n("icnFQ"),n("6JPEq")}();
//# sourceMappingURL=favorites.5f73d60d.js.map
