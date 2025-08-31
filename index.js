import{a as m,P as x,i as S}from"./assets/vendor-Cir5bjeI.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const c={exampele:document.querySelector(".exampele"),artistsList:document.querySelector(".artists__list"),artistsLoadButton:document.querySelector(".artists__load-btn"),artistModalElems:{artistModalEl:document.querySelector(".js-artist-modal"),closeArtistModalBtnEl:document.querySelector("[data-artist-modal-close]"),artistModalInnerEl:document.querySelector(".js-artist-modal-inner"),artistModalBodyEl:document.querySelector(".js-artist-modal-body"),artistModalLoaderEl:document.querySelector(".js-artist-modal-loader")}};m.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function j(t=1){try{const{data:e}=await m.get("artists",{params:{limit:8,page:t}});return e}catch(e){throw console.error("Error fetching artists:",e.message),e}}//! ============================================================================
const I=async t=>(await m.get(`artists/${t}/albums`)).data,l="/seven-friends-of-a-FullStack/assets/sprite-mTqa9sFe.svg";function y(t){document.getElementById(t).classList.remove("hidden")}function f(t){document.getElementById(t).classList.add("hidden")}async function g(t){try{const e=await j(t);y("artists__loader");const r=e.artists.map(a=>`
          <li class="artists__item">
            <img class="artists__image" src="${a.strArtistThumb}" alt="${a.strArtist}" onerror="this.onerror=null;this.src='/img/img-placeholder.svg';">
            <ul class="artists__genre-list">
              ${a.genres.map(s=>`<li class="artists__genre-item">${s}</li>`).join("")}
            </ul>
            <h3 class="artists__title-name">${a.strArtist}</h3>
            <p class="artists__text-biography">${a.strBiographyEN}</p>

            <button class="artists__more-btn js-artist-more-btn" data-artists-id="${a._id}">
              Learn More 
              <svg class="artists-more__caret">
                <use href='${l}#icon-caret-right'></use>
              </svg>
            </button>
          </li>
        `).join("");return c.artistsList.innerHTML=r,f("artists__loader"),e}catch(e){f("artists__loader"),console.error("Error in createArtistsList:",e)}}const q=document.getElementById("pagination");let h=null;async function C(){const t=await g(1);h=new x(q,{totalItems:t.totalArtists,itemsPerPage:t.limit,visiblePages:5,centerAlign:!0,template:{page:'<a href="#" class="custom-page-btn">{{page}}</a>',currentPage:'<strong class="custom-current">{{page}}</strong>',moveButton:'<a href="#" class="custom-move-btn tui-{{type}}"><span class="icon-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="custom-move-btn disabled custom-{{type}}"><span class="icon-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="custom-ellip">...</a>'}}),h.on("afterMove",async e=>{const r=e.page;y("artists__loader"),await g(r)})}C();let b;//! ============================================================================
const H=({intFormedYear:t,intDiedYear:e=""})=>{let r="—";const a=Number(t),s=Number(e);return a?e?s>=a&&(r=`${a}-${s}`):r=`${a}-present`:r="information missing",r},P=()=>window.matchMedia("(min-width: 1440px)").matches?5:window.matchMedia("(min-width: 768px)").matches?4:11,v=()=>{const t=document.querySelector(".about-artist__info-item--bio .about-artist__info-item-text");if(!t)return;t.dataset.fullText||(t.dataset.fullText=t.textContent.trim());const e=t.dataset.fullText;t.style.visibility="hidden";const r=parseFloat(getComputedStyle(t).lineHeight),a=P(),s=r*a;let i=e.split(" "),o=e;for(t.textContent=o;t.scrollHeight>s&&i.length>0;)i.pop(),o=i.join(" "),t.textContent=o+"...";t.style.maxHeight=`${s}px`,t.style.overflowY=t.scrollHeight>s?"auto":"hidden",t.style.visibility="visible"};function L(){clearTimeout(b),b=setTimeout(v,150)}//! ============================================================================
function N(t){if(t==null)return"0:00";const e=Math.floor(t/1e3),r=Math.floor(e/60),a=e%60;return`${r}:${a.toString().padStart(2,"0")}`}function Y(t,e=!0){return t.reduce((r,a)=>{const s=a.tracks.filter(i=>{var o;return Number(i.intDuration)>0&&((o=i.strTrack)==null?void 0:o.trim())});return e&&s.length===0||r.push({...a,tracks:s}),r},[])}//! ============================================================================
function G(t){if(typeof t!="string"||t.trim()==="")return!1;try{const e=new URL(t);return e.protocol==="http:"||e.protocol==="https:"}catch{return!1}}//! ============================================================================
function z(t){S.error({message:t,position:"topRight",class:"custom-error-toast",timeout:5e3,onOpening:(e,r)=>{const a=r.querySelector(".iziToast-body");if(a){const i=document.createElement("span");i.classList.add("iziToast-icon"),i.innerHTML=`
          <svg class="toast-error-icon" width="24" height="24">
            <use xlink:href="${l}#icon-toast-error"></use>
          </svg>
        `,a.prepend(i)}const s=r.querySelector(".iziToast-close");s&&(s.innerHTML=`
          <svg class="toast-close-icon" width="16" height="16">
            <use xlink:href="${l}#icon-toast-close"></use>
          </svg>
        `)}})}const u=c.artistModalElems;//! ============================================================================
async function O(t){it(),st();try{const e=await I(t),{albumsList:r}=e;V(e);const a=Y(r,!0);W(a),setTimeout(v,0)}catch(e){z(e.message)}finally{rt()}}//! ============================================================================
const D=t=>{const{strArtist:e,strArtistThumb:r,intFormedYear:a,intDiedYear:s="",strGender:i,intMembers:o,strCountry:E,strBiographyEN:A,genres:T}=t,$=H({intFormedYear:a,intDiedYear:s}),p=o&&o>1,w=R([{title:"Years active",key:"activeYears",value:$},{title:"Sex",key:"strGender",value:i,isBand:p},{title:"Members",key:"intMembers",value:o,isBand:p},{title:"Country",key:"strCountry",value:E},{title:"Biography",key:"strBiographyEN",value:A}]),B=K(T);return`<section class="about-artist js-about-artist">
                <h2 class="about-artist__title">${e}</h2>
                <div class="about-artist__content">
                    <img
                    src="${r}"
                    class="about-artist__image"
                    alt="${e}"
                    />
                    <ul class="about-artist__info-list">
                        ${w}
                        <li class="about-artist__info-item--genres">
                          <ul class="about-artist__music-genres">
                             ${B}
                          </ul>
                        </li>
                    </ul>
                </div>
            </section>`};function F(t){const{key:e,value:r,title:a,isBand:s=""}=t;if(e==="strGender"&&s||e==="intMembers"&&!s)return"";const o=`<li class="${e==="strBiographyEN"?"about-artist__info-item about-artist__info-item--bio":"about-artist__info-item"}">
                           <b class="about-artist__info-item-title">${a}</b>
                           <p class="about-artist__info-item-text">${r}</p>
                        </li>`;return r?o:""}function R(t){return t.map(F).join(`
`)}//! ============================================================================
const U=t=>`<li class="about-artist__music-genre">${t}</li>`;function K(t){return(t==null?void 0:t.length)>0?t.map(U).join(`
`):""}//! ============================================================================
const V=t=>{const e=D(t);u.artistModalInnerEl.insertAdjacentHTML("afterbegin",e)};//! ============================================================================
const W=t=>{const e=J(t);u.artistModalInnerEl.insertAdjacentHTML("beforeend",e)};function J(t){return`<section class="artist-albums js-artist-modal-albums">
            <h2 class="artist-albums__title">Albums</h2>
            <ul class="artist-albums__list js-artist-albums">
              ${Q(t)}
            </ul>
          </section>`}function Q(t){return t.map(X).join(`
`)}function X(t){const{strAlbum:e="",tracks:r}=t,a=(r==null?void 0:r.length)>0?tt(r):"";return`<li class="artist-album">
            <h3 class="artist-album__title">${e}</h3>
            <div class="artist-album__tracks">
              <ul class="artist-tracks__header">
                <li class="artist-tracks__header-item header-track">Track</li>
                <li class="artist-tracks__header-item header-duration">Time</li>
                 <li class="artist-tracks__header-item header-link">Link</li>
              </ul>
              <ul class="artist-tracks__list">
                ${a}
              </ul>
            </div>
          </li>`}//! ============================================================================
function Z(t){const{strTrack:e,intDuration:r,movie:a}=t,s=et(a),i=N(r);return`<li class="artist-tracks__item">
            <span class="artist-tracks__item-name">${e}</span>
            <span class="artist-tracks__item-duration">${i}</span>
            ${s}
          </li>`}function tt(t){return t.map(Z).join(`
`)}//! ============================================================================
function et(t){return G(t)?`<a href="${t}" target="_blank" rel="noopener noreferrer" class="artist-tracks__item-link">
                          <svg class="artist-tracks__item-icon" width="21" height="15">
                            <use href="${l}#icon-Youtube"></use>
                          </svg>
                      </a>`:""}//! ============================================================================
const st=()=>{u.artistModalLoaderEl.classList.add("modal-loader-visible")},rt=()=>{u.artistModalLoaderEl.classList.remove("modal-loader-visible")},n=c.artistModalElems;let _=0;//! ============================================================================
const at=t=>{t.target.classList.contains("js-artist-more-btn")&&O(t.target.dataset.artistsId)};//! ============================================================================
function it(){_=window.scrollY,document.body.style.top=`-${_}px`,document.body.classList.add("scroll-lock"),n.artistModalEl.classList.add("artist-modal--is-open"),document.addEventListener("keydown",k),window.addEventListener("resize",L),n.artistModalEl.addEventListener("click",M),n.closeArtistModalBtnEl.addEventListener("click",d),n.artistModalBodyEl.scrollTop=0}function d(){n.artistModalEl.classList.remove("artist-modal--is-open"),document.body.classList.remove("scroll-lock");const t=Math.abs(parseInt(document.body.style.top||"0",10));document.body.style.top="",window.scrollTo(0,t),n.artistModalInnerEl.innerHTML="",document.removeEventListener("keydown",k),window.removeEventListener("resize",L),n.artistModalEl.removeEventListener("click",M),n.closeArtistModalBtnEl.removeEventListener("click",d)}//! ============================================================================
function k(t){t.key==="Escape"&&d()}//! ============================================================================
function M(t){t.target===n.artistModalEl&&d()}const{artistsList:ot}=c;//! ============================================================================
ot.addEventListener("click",at);
//# sourceMappingURL=index.js.map
