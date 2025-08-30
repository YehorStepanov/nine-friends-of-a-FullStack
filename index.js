import{a as u,P as m}from"./assets/vendor-BLciYDKo.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const p={exampele:document.querySelector(".exampele"),artistsList:document.querySelector(".artists__list"),artistsLoadButton:document.querySelector(".artists__load-btn")};u.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function g(s=1){try{const{data:e}=await u.get("artists",{params:{limit:8,page:s}});return e}catch(e){throw console.error("Error fetching artists:",e.message),e}}function d(s){document.getElementById(s).classList.remove("hidden")}function n(s){document.getElementById(s).classList.add("hidden")}async function c(s){try{const e=await g(s);d("artists__loader");const i=e.artists.map(a=>`
          <li class="artists__item">
            <img class="artists__image" src="${a.strArtistThumb}" alt="${a.strArtist}" onerror="this.onerror=null;this.src='/img/img-placeholder.svg';">
            <ul class="artists__genre-list">
              ${a.genres.map(t=>`<li class="artists__genre-item">${t}</li>`).join("")}
            </ul>
            <h3 class="artists__title-name">${a.strArtist}</h3>
            <p class="artists__text-biography">${a.strBiographyEN}</p>
            <button class="artists__more-btn" data-artists-id="${a._id}">
              Learn More 
              <svg class="artists-more__caret">
                <use href='/img/sprite.svg#icon-caret-right'></use>
              </svg>
            </button>
          </li>
        `).join("");return p.artistsList.innerHTML=i,n("artists__loader"),e}catch(e){n("artists__loader"),console.error("Error in createArtistsList:",e)}}const f=document.getElementById("pagination");let l=null;async function y(){const s=await c(1);l=new m(f,{totalItems:s.totalArtists,itemsPerPage:s.limit,visiblePages:5,centerAlign:!0,template:{page:'<a href="#" class="custom-page-btn">{{page}}</a>',currentPage:'<strong class="custom-current">{{page}}</strong>',moveButton:'<a href="#" class="custom-move-btn tui-{{type}}"><span class="icon-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="custom-move-btn disabled custom-{{type}}"><span class="icon-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="custom-ellip">...</a>'}}),l.on("afterMove",async e=>{const i=e.page;d("artists__loader"),await c(i)})}y();
//# sourceMappingURL=index.js.map
