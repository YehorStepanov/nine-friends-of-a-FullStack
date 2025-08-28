import{a as u}from"./assets/vendor-BkCUij8E.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const i={exampele:document.querySelector(".exampele"),artistsList:document.querySelector(".artists__list"),artistsLoadButton:document.querySelector(".artists__load-btn")},d="https://sound-wave.b.goit.study/api/artists?limit=8&page=";async function f(o=1){try{return(await u.get(`${d}${o}`)).data}catch{console.error("Error")}}let c=1;async function l(o){try{const e=await f(o),a=e.artists.map(r=>`
          <li class="artists__item">
            <img class="artists__image" src="${r.strArtistThumb}" alt="${r.strArtist}">
            <ul class="artists__genre-list">
              ${r.genres.map(t=>`<li class="artists__genre-item">${t}</li>`).join("")}
            </ul>
            <h3 class="artists__title-name">${r.strArtist}</h3>
            <p class="artists__text-biography">${r.strBiographyEN}</p>
            <button class="artists__more-btn" data-artists-id="${r._id}">Learn More</button>
          </li>
        `).join("");i.artistsList.insertAdjacentHTML("beforeend",a),e.totalArtists>o*e.limit?p():m()}catch(e){console.error("Error in createArtistsList:",e)}}l(c);i.artistsLoadButton.addEventListener("click",()=>{c+=1,l(c)});function p(){i.artistsLoadButton.classList.remove("hidden")}function m(){i.artistsLoadButton.classList.add("hidden")}
//# sourceMappingURL=index.js.map
