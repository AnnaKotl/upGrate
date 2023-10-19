function e(e,t,r,i){Object.defineProperty(e,t,{get:r,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){i[e]=t},t.parcelRequired7c6=a),a.register("kyEFX",function(t,r){e(t.exports,"register",function(){return i},function(e){return i=e}),e(t.exports,"resolve",function(){return a},function(e){return a=e});var i,a,n={};i=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)n[t[r]]=e[t[r]]},a=function(e){var t=n[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),a("kyEFX").register(JSON.parse('{"iGlSd":"favorites.fac1e17a.js","gL9Ct":"heart-defs.9fecb2e2.svg","eoZgM":"index.1c142448.css","cWpg4":"index.54c508b6.js","WliXi":"index.a54b04e3.js"}'));var n={};n=new URL(a("kyEFX").resolve("gL9Ct"),import.meta.url).toString();var s=a("7Iivd"),o=a("9vIbv");const l=document.querySelector(".favorite-recipes-list"),c=document.querySelector(".favorite-filter-list"),d=document.querySelector(".block-favorit");function u(e){e.preventDefault();let t=e.currentTarget.id;(0,o.showModalAboutReciepts)(t)}function f(e){return e.closest(".cards-favorite").dataset.id}async function v(e){try{for(let t of e){let e=await fetch(`https://tasty-treats-backend.p.goit.global/api/recipes/${t}`);if(!e.ok)throw Error(e.status);let r=await e.json(),i=Array.isArray(r)?r:[r],a=i.map(({_id:e,title:t,category:r,rating:i,preview:a,tags:s,instructions:o,area:l,time:c,ingredients:d})=>{var u;return`<li class="cards-favorite ${r}" data-id="${e}">
          <div class="recipe-img">
            <img class="images" src="${a}" alt="${s}" />
          </div>
          <div class="recipe-desc">
            <h2 class="title-recipe">${t}</h2>
            <h3 class="${r} hidden"></h3>
            <p class="instr-recipe">${o.slice(0,65)+"..."}</p>
            <p class="${l} hidden"></p>
            <p class="${c} hidden"></p>
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
              <use href="${(u=n)&&u.__esModule?u.default:u}#heart"></use>
            </svg>
          </button>
        </li>`}).join("");l.insertAdjacentHTML("beforeend",a),c.insertAdjacentHTML("beforeend",function(e){let t=[];return e.forEach(e=>{t.includes(e.category)||t.push(e.category)}),t.map(e=>`<li class="favorite-filter-item">
        <button type="button" class="ff-btn btn">${e}</button>
      </li>`).join("")}(i)),function(){let e=document.querySelectorAll(".raitingAllFoods");e.forEach(e=>{let t=parseFloat(e.textContent),r=e.nextElementSibling.querySelector(".rating__activeAllFoods");r.style.setProperty("width",20*t+"%")})}()}let t=document.querySelectorAll(".heart-button"),r=document.querySelectorAll(".see-recipe-btn");r.forEach(e=>{e.addEventListener("click",u)}),t.forEach(e=>{e.addEventListener("click",e=>{var t,r;(function(e){e.preventDefault();let t=e.currentTarget,r=f(t);if(t.classList.toggle("active"),t.classList.contains("active"))(0,s.favoriteArr).push(r);else{let e=(0,s.favoriteArr).indexOf(r);-1!==e&&(0,s.favoriteArr).splice(e,1)}localStorage.setItem("favorites",JSON.stringify(s.favoriteArr))})(e),t=e.currentTarget,r=f(e.currentTarget),(0,s.favoriteArr).includes(r)?t.classList.add("active"):t.classList.remove("active")})}),function(){let e=document.querySelectorAll(".heart-button");e.forEach(e=>{let t=f(e);(0,s.favoriteArr).includes(t)&&e.classList.add("active")})}()}catch(e){console.warn(e)}}s.favoriteArr.length>0?d.classList.add("hidden"):c.classList.add("hidden"),c.addEventListener("click",function(e){if("BUTTON"!==e.target.tagName)return;let t=e.target.textContent;[...document.getElementsByClassName("cards-favorite")].forEach(e=>{e.classList.remove("hidden"),e.classList.contains(t)||"All categories"===t||e.classList.add("hidden")})}),v(s.favoriteArr),a("bUb57"),a("7Iivd"),a("hYZFw"),a("3XOAk"),a("aOwbl"),a("95rAy"),a("9vIbv"),a("iQg2E");
//# sourceMappingURL=favorites.fac1e17a.js.map
