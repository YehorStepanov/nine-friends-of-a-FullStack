import{a as l}from"./assets/vendor-BkCUij8E.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const o={exampele:document.querySelector(".exampele"),artistsList:document.querySelector(".artists__list"),artistsLoadButton:document.querySelector(".artists__load-btn")};l.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function d(i=1){try{const{data:e}=await l.get("artists",{params:{limit:8,page:i}});return e}catch(e){throw console.error("Error fetching artists:",e.message),e}}let c=1;async function u(i){try{const e=await d(i),a=e.artists.map(r=>`
          <li class="artists__item">
            <img class="artists__image" src="${r.strArtistThumb}" alt="${r.strArtist}">
            <ul class="artists__genre-list">
              ${r.genres.map(t=>`<li class="artists__genre-item">${t}</li>`).join("")}
            </ul>
            <h3 class="artists__title-name">${r.strArtist}</h3>
            <p class="artists__text-biography">${r.strBiographyEN}</p>
            <button class="artists__more-btn" data-artists-id="${r._id}">Learn More</button>
          </li>
        `).join("");o.artistsList.insertAdjacentHTML("beforeend",a),e.totalArtists>i*e.limit?f():m()}catch(e){console.error("Error in createArtistsList:",e)}}u(c);o.artistsLoadButton.addEventListener("click",()=>{c+=1,u(c)});function f(){o.artistsLoadButton.classList.remove("hidden")}function m(){o.artistsLoadButton.classList.add("hidden")}
//# sourceMappingURL=index.js.map
