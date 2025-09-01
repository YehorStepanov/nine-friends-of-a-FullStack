import{a as d,P as S,i as f,R,S as I,N,b as j}from"./assets/vendor-Bttng-cq.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const l={exampele:document.querySelector(".exampele"),artistsList:document.querySelector(".artists__list"),artistsLoadButton:document.querySelector(".artists__load-btn"),swiperWrapper:document.querySelector(".swiper-wrapper"),swiperBtnPrev:document.querySelector(".swiper-button-prev"),swiperBtnNext:document.querySelector(".swiper-button-next"),artistModalElems:{artistModalEl:document.querySelector(".js-artist-modal"),closeArtistModalBtnEl:document.querySelector("[data-artist-modal-close]"),artistModalInnerEl:document.querySelector(".js-artist-modal-inner"),artistModalBodyEl:document.querySelector(".js-artist-modal-body"),artistModalLoaderEl:document.querySelector(".js-artist-modal-loader")}};d.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function C(t=1){try{const{data:e}=await d.get("artists",{params:{limit:8,page:t}});return e}catch(e){throw console.error("Error fetching artists:",e.message),e}}//! ============================================================================
const Q=async t=>(await d.get(`artists/${t}/albums`)).data;async function U(){try{return(await d.get("feedbacks",{params:{limit:10,page:1}})).data.data}catch(t){console.log("Error fetching feedbacks",t)}}const u="/seven-friends-of-a-FullStack/assets/sprite-CAtVymKN.svg";function g(t){document.getElementById(t).classList.remove("hidden")}function c(t){document.getElementById(t).classList.add("hidden")}async function h(t){try{const e=await C(t);g("artists__loader");const s=e.artists.map(a=>`
          <li class="artists__item">
            <img class="artists__image" src="${a.strArtistThumb}" alt="${a.strArtist}" onerror="this.onerror=null;this.src='/img/img-placeholder.svg';">
            <ul class="artists__genre-list">
              ${a.genres.map(r=>`<li class="artists__genre-item">${r}</li>`).join("")}
            </ul>
            <h3 class="artists__title-name">${a.strArtist}</h3>
            <p class="artists__text-biography">${a.strBiographyEN}</p>

            <button class="artists__more-btn js-artist-more-btn" data-artists-id="${a._id}">
              Learn More 
              <svg class="artists-more__caret">
                <use href='${u}#icon-caret-right'></use>
              </svg>
            </button>
          </li>
        `).join("");return l.artistsList.innerHTML=s,c("artists__loader"),e}catch(e){c("artists__loader"),console.error("Error in createArtistsList:",e)}}const P=document.getElementById("pagination");let y=null;async function q(){const t=await h(1);y=new S(P,{totalItems:t.totalArtists,itemsPerPage:t.limit,visiblePages:5,centerAlign:!0,template:{page:'<a href="#" class="custom-page-btn">{{page}}</a>',currentPage:'<strong class="custom-current">{{page}}</strong>',moveButton:'<a href="#" class="custom-move-btn tui-{{type}}"><span class="icon-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="custom-move-btn disabled custom-{{type}}"><span class="icon-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="custom-ellip">...</a>'}}),y.on("afterMove",async e=>{const s=e.page;g("artists__loader"),await h(s)})}q();const H="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF2SURBVHgBpZQ/TsMwFMa/5/6Zww0CF6BsiIXAxkRvAJwgrYRQt7Zb1Q5Nb5AbUDYmkg7MHIEcgRlRm+eSIOePikk+KYr9bP9iv3zPgIUG3tLVj81cYQPrkog6JN647TQGdgCPXy4BThu4bQwkEuPfySRuGgHvvaWnd2eEemmsHhAVRyS0xvsWkNlJk+5w3hzJO2uReKxapJS8U0DyxU8QD5MckI8QCqJzbu5gqC2VQGHd5kQzLJenmiKXz9sXQskL7iVorkSzxIxz8KnkCftjjfraaIZm5X7Kw+VqwnkY/4ekFFaL2B9k/ZY5+Pr+HJ8dXR3wV05hI4Upw0ZmqORDkjKG7e4gk2KsBGT/9WGv3p9AttExLMV1fr0XmN55vYq1G66Mp4q4W7zScsBuGbbz1jzyvUXk93XJoeDZTiFFOaD6ufu0Ptj109RbcTa+iIchww/1WBajQpW1zQ57KNgq/ZbBLMoXvan5iz8Z8R2whRjwmtAc+wa4Q3bUdA0IrQAAAABJRU5ErkJggg==",O="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADjSURBVHgBrZQNDYMwEIWvU4CEOtgcjCkYEpiTSpiEOQAHw8EkUAeTcHsXSgKM/kD5khcIbT9KW44oAWbWEjoCJ+uRL1LE+p8oToloRGQ15eJmN/KhHCAo+Z+S9oLBrxXhOzRGLQSyTmM00njGPRArUUrZmVBmget1ItqLRVoR9m42R2Dl2NycPVvmXMPaIQ3vp+O1Q4+HhrfzDM5bOmyQmeX4tV+vo23rFhVWlM4lRXimdO7BVh5KlW8XW09bERJWi849T4oB7mueVx+hDgnHHZZianxv5/nxMhT5ZJFqiuDr+wPMSqqKNMf6xQAAAABJRU5ErkJggg==";async function Y(){let t=[];try{const e=await U();g("feedbacks-loader"),e&&Array.isArray(e)?t=e:t=[]}catch{c("feedbacks-loader"),f.error({message:"Network error"});return}if(t.length===0){c("feedbacks-loader"),f.error({message:"Nothing to show. Please, try again later."});return}G(t),V(t.length),z()}Y();function G(t){const e=t.map(X).join("");l.swiperWrapper.innerHTML=e}function X({name:t,descr:e,rating:s}){return`<div class="swiper-slide">
        <div class="stars" data-raty data-score="${Math.round(s)}" data-read-only="true"></div>
        <p class="feedback-content">${e}</p>
        <p class="feedback-name">${t}</p>
        </div>`}function z(){document.querySelectorAll("[data-raty]").forEach(t=>{new R(t,{starOn:H,starOff:O,score:parseInt(t.dataset.score,10),readOnly:!0}).init()})}function V(t){const s=t-1,a=Math.floor(t/2),r=new I(".mySwiper",{modules:[N,j],pagination:{el:".swiper-pagination",type:"custom",renderCustom:i=>{let n;return i.activeIndex===0?n=0:i.activeIndex===s?n=s:n=a,`
                    <span class="swiper-pagination-bullet${n===0?" active":""}" data-i="0"></span>
                    <span class="swiper-pagination-bullet${n===a?" active":""}" data-i="${a}"></span>
                    <span class="swiper-pagination-bullet${n===s?" active":""}" data-i="${s}"></span>
                    `}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});l.swiperBtnPrev.classList.remove("visually-hidden"),l.swiperBtnNext.classList.remove("visually-hidden"),c("feedbacks-loader"),r.pagination.el.addEventListener("click",i=>{if(!i.target.classList.contains("swiper-pagination-bullet"))return;const n=parseInt(i.target.dataset.i,10);r.slideTo(n)})}let v;//! ============================================================================
const D=({intFormedYear:t,intDiedYear:e=""})=>{let s="—";const a=Number(t),r=Number(e);return a?e?r>=a&&(s=`${a}-${r}`):s=`${a}-present`:s="information missing",s},W=()=>window.matchMedia("(min-width: 1440px)").matches?5:window.matchMedia("(min-width: 768px)").matches?4:11,k=()=>{const t=document.querySelector(".about-artist__info-item--bio .about-artist__info-item-text");if(!t)return;t.dataset.fullText||(t.dataset.fullText=t.textContent.trim());const e=t.dataset.fullText;t.style.visibility="hidden";const s=parseFloat(getComputedStyle(t).lineHeight),a=W(),r=s*a;let i=e.split(" "),n=e;for(t.textContent=n;t.scrollHeight>r&&i.length>0;)i.pop(),n=i.join(" "),t.textContent=n+"...";t.style.maxHeight=`${r}px`,t.style.overflowY=t.scrollHeight>r?"auto":"hidden",t.style.visibility="visible"};function w(){clearTimeout(v),v=setTimeout(k,150)}//! ============================================================================
function K(t){if(t==null)return"0:00";const e=Math.floor(t/1e3),s=Math.floor(e/60),a=e%60;return`${s}:${a.toString().padStart(2,"0")}`}function J(t,e=!0){return t.reduce((s,a)=>{const r=a.tracks.filter(i=>{var n;return Number(i.intDuration)>0&&((n=i.strTrack)==null?void 0:n.trim())});return e&&r.length===0||s.push({...a,tracks:r}),s},[])}//! ============================================================================
function F(t){if(typeof t!="string"||t.trim()==="")return!1;try{const e=new URL(t);return e.protocol==="http:"||e.protocol==="https:"}catch{return!1}}//! ============================================================================
function Z(t){f.error({message:t,position:"topRight",class:"custom-error-toast",timeout:5e3,onOpening:(e,s)=>{const a=s.querySelector(".iziToast-body");if(a){const i=document.createElement("span");i.classList.add("iziToast-icon"),i.innerHTML=`
          <svg class="toast-error-icon" width="24" height="24">
            <use xlink:href="${u}#icon-toast-error"></use>
          </svg>
        `,a.prepend(i)}const r=s.querySelector(".iziToast-close");r&&(r.innerHTML=`
          <svg class="toast-close-icon" width="16" height="16">
            <use xlink:href="${u}#icon-toast-close"></use>
          </svg>
        `)}})}const m=l.artistModalElems;//! ============================================================================
async function tt(t){bt(),ft();try{const e=await Q(t),{albumsList:s}=e;nt(e);const a=J(s,!0);ot(a),setTimeout(k,0)}catch(e){Z(e.message)}finally{At()}}//! ============================================================================
const et=t=>{const{strArtist:e,strArtistThumb:s,intFormedYear:a,intDiedYear:r="",strGender:i,intMembers:n,strCountry:E,strBiographyEN:M,genres:B}=t,T=D({intFormedYear:a,intDiedYear:r}),b=n&&n>1,$=rt([{title:"Years active",key:"activeYears",value:T},{title:"Sex",key:"strGender",value:i,isBand:b},{title:"Members",key:"intMembers",value:n,isBand:b},{title:"Country",key:"strCountry",value:E},{title:"Biography",key:"strBiographyEN",value:M}]),x=it(B);return`<section class="about-artist js-about-artist">
                <h2 class="about-artist__title">${e}</h2>
                <div class="about-artist__content">
                    <img
                    src="${s}"
                    class="about-artist__image"
                    alt="${e}"
                    />
                    <ul class="about-artist__info-list">
                        ${$}
                        <li class="about-artist__info-item--genres">
                          <ul class="about-artist__music-genres">
                             ${x}
                          </ul>
                        </li>
                    </ul>
                </div>
            </section>`};function st(t){const{key:e,value:s,title:a,isBand:r=""}=t;if(e==="strGender"&&r||e==="intMembers"&&!r)return"";const n=`<li class="${e==="strBiographyEN"?"about-artist__info-item about-artist__info-item--bio":"about-artist__info-item"}">
                           <b class="about-artist__info-item-title">${a}</b>
                           <p class="about-artist__info-item-text">${s}</p>
                        </li>`;return s?n:""}function rt(t){return t.map(st).join(`
`)}//! ============================================================================
const at=t=>`<li class="about-artist__music-genre">${t}</li>`;function it(t){return(t==null?void 0:t.length)>0?t.map(at).join(`
`):""}//! ============================================================================
const nt=t=>{const e=et(t);m.artistModalInnerEl.insertAdjacentHTML("afterbegin",e)};//! ============================================================================
const ot=t=>{const e=lt(t);m.artistModalInnerEl.insertAdjacentHTML("beforeend",e)};function lt(t){return`<section class="artist-albums js-artist-modal-albums">
            <h2 class="artist-albums__title">Albums</h2>
            <ul class="artist-albums__list js-artist-albums">
              ${ct(t)}
            </ul>
          </section>`}function ct(t){return t.map(ut).join(`
`)}function ut(t){const{strAlbum:e="",tracks:s}=t,a=(s==null?void 0:s.length)>0?mt(s):"";return`<li class="artist-album">
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
function dt(t){const{strTrack:e,intDuration:s,movie:a}=t,r=pt(a),i=K(s);return`<li class="artist-tracks__item">
            <span class="artist-tracks__item-name">${e}</span>
            <span class="artist-tracks__item-duration">${i}</span>
            ${r}
          </li>`}function mt(t){return t.map(dt).join(`
`)}//! ============================================================================
function pt(t){return F(t)?`<a href="${t}" target="_blank" rel="noopener noreferrer" class="artist-tracks__item-link">
                          <svg class="artist-tracks__item-icon" width="21" height="15">
                            <use href="${u}#icon-Youtube"></use>
                          </svg>
                      </a>`:""}//! ============================================================================
const ft=()=>{m.artistModalLoaderEl.classList.add("modal-loader-visible")},At=()=>{m.artistModalLoaderEl.classList.remove("modal-loader-visible")},o=l.artistModalElems;let A=0;//! ============================================================================
const gt=t=>{const e=t.target.closest(".js-artist-more-btn");e&&tt(e.dataset.artistsId)};//! ============================================================================
function bt(){A=window.scrollY,document.body.style.top=`-${A}px`,document.body.classList.add("scroll-lock"),o.artistModalEl.classList.add("artist-modal--is-open"),document.addEventListener("keydown",_),window.addEventListener("resize",w),o.artistModalEl.addEventListener("click",L),o.closeArtistModalBtnEl.addEventListener("click",p),o.artistModalBodyEl.scrollTop=0}function p(){o.artistModalEl.classList.remove("artist-modal--is-open"),document.body.classList.remove("scroll-lock"),document.body.style.top="",window.scrollTo(0,A),o.artistModalInnerEl.innerHTML="",document.removeEventListener("keydown",_),window.removeEventListener("resize",w),o.artistModalEl.removeEventListener("click",L),o.closeArtistModalBtnEl.removeEventListener("click",p)}//! ============================================================================
function _(t){t.key==="Escape"&&p()}//! ============================================================================
function L(t){t.target===o.artistModalEl&&p()}const{artistsList:ht}=l;//! ============================================================================
ht.addEventListener("click",gt);
//# sourceMappingURL=index.js.map
