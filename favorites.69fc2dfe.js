!function(){function e(e,t,r,i){Object.defineProperty(e,t,{get:r,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},t.parcelRequired7c6=n),n.register("iE7OH",function(t,r){e(t.exports,"register",function(){return i},function(e){return i=e}),e(t.exports,"resolve",function(){return n},function(e){return n=e});var i,n,a={};i=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)a[t[r]]=e[t[r]]},n=function(e){var t=a[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),n.register("aNJCr",function(t,r){e(t.exports,"getBundleURL",function(){return i},function(e){return i=e});var i,n={};i=function(e){var t=n[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),n[e]=t),t}}),n("iE7OH").register(JSON.parse('{"bN78u":"favorites.69fc2dfe.js","1BQtz":"heart-defs.9fecb2e2.svg","eoZgM":"index.1c142448.css","2Z88f":"index.1664824d.js","i75DX":"index.00f6a351.js"}'));var a={};a=n("aNJCr").getBundleURL("bN78u")+n("iE7OH").resolve("1BQtz");var s=n("d0Tth"),o=n("89MHW");let c=document.querySelector(".favorite-recipes-list"),l=document.querySelector(".favorite-filter-list"),d=document.querySelector(".block-favorit");function u(e){e.preventDefault();let t=e.currentTarget.id;(0,o.showModalAboutReciepts)(t)}function f(e){return e.closest(".cards-favorite").dataset.id}async function v(e){try{for(let t of e){let e=await fetch(`https://tasty-treats-backend.p.goit.global/api/recipes/${t}`);if(!e.ok)throw Error(e.status);let r=await e.json(),i=Array.isArray(r)?r:[r],n=i.map(({_id:e,title:t,category:r,rating:i,preview:n,tags:s,instructions:o,area:c,time:l,ingredients:d})=>{var u;return`<li class="cards-favorite ${r}" data-id="${e}">
          <div class="recipe-img">
            <img class="images" src="${n}" alt="${s}" />
          </div>
          <div class="recipe-desc">
            <h2 class="title-recipe">${t}</h2>
            <h3 class="${r} hidden"></h3>
            <p class="instr-recipe">${o.slice(0,65)+"..."}</p>
            <p class="${c} hidden"></p>
            <p class="${l} hidden"></p>
            <p class="(${d.map(({measure:e})=>e).join(", ")}) hidden"></p>
          </div>
          <div class="rating-panel">
            <div class="raitingAllFoods">${i}</div>
            <div class="rating_blackAllFoods">
              <div class="rating__activeAllFoods"></div>
            </div>
            <button type="button" class="see-recipe-btn btn" id="${e}">See recipe</button>
          </div>
          <button class="heart-button" type="button" data-id-favourite="${e}">
            <svg class="heart-button-icon" width="20" height="20">
              <use href="${(u=a)&&u.__esModule?u.default:u}#heart"></use>
            </svg>
          </button>
        </li>`}).join("");c.insertAdjacentHTML("beforeend",n),l.insertAdjacentHTML("beforeend",function(e){let t=[];return e.forEach(e=>{t.includes(e.category)||t.push(e.category)}),t.map(e=>`<li class="favorite-filter-item">
        <button type="button" class="ff-btn btn">${e}</button>
      </li>`).join("")}(i)),function(){let e=document.querySelectorAll(".raitingAllFoods");e.forEach(e=>{let t=parseFloat(e.textContent),r=e.nextElementSibling.querySelector(".rating__activeAllFoods");r.style.setProperty("width",20*t+"%")})}()}let t=document.querySelectorAll(".heart-button"),r=document.querySelectorAll(".see-recipe-btn");r.forEach(e=>{e.addEventListener("click",u)}),t.forEach(e=>{e.addEventListener("click",e=>{var t,r;(function(e){e.preventDefault();let t=e.currentTarget,r=f(t);if(t.classList.toggle("active"),t.classList.contains("active"))(0,s.favoriteArr).push(r);else{let e=(0,s.favoriteArr).indexOf(r);-1!==e&&(0,s.favoriteArr).splice(e,1)}localStorage.setItem("favorites",JSON.stringify(s.favoriteArr))})(e),t=e.currentTarget,r=f(e.currentTarget),(0,s.favoriteArr).includes(r)?t.classList.add("active"):t.classList.remove("active")})}),function(){let e=document.querySelectorAll(".heart-button");e.forEach(e=>{let t=f(e);(0,s.favoriteArr).includes(t)&&e.classList.add("active")})}()}catch(e){console.warn(e)}}s.favoriteArr.length>0?d.classList.add("hidden"):l.classList.add("hidden"),l.addEventListener("click",function(e){if("BUTTON"!==e.target.tagName)return;let t=e.target.textContent;[...document.getElementsByClassName("cards-favorite")].forEach(e=>{e.classList.remove("hidden"),e.classList.contains(t)||"All categories"===t||e.classList.add("hidden")})}),v(s.favoriteArr),n("i8Q71"),n("d0Tth"),n("4PiVo"),n("jpWR3"),n("icnFQ"),n("4J3Ot"),n("89MHW"),n("lxY1m")}();
//# sourceMappingURL=favorites.69fc2dfe.js.map
