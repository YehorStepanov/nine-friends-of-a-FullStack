import{a as L,P as N,i as k,R as C,S as F,N as Y,b as U}from"./assets/vendor-Bttng-cq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();const c={exampele:document.querySelector(".exampele"),artistsList:document.querySelector(".artists__list"),artistsLoadButton:document.querySelector(".artists__load-btn"),swiperWrapper:document.querySelector(".swiper-wrapper"),swiperBtnPrev:document.querySelector(".swiper-button-prev"),swiperBtnNext:document.querySelector(".swiper-button-next"),artistModalElems:{artistModalEl:document.querySelector(".js-artist-modal"),closeArtistModalBtnEl:document.querySelector("[data-artist-modal-close]"),artistModalInnerEl:document.querySelector(".js-artist-modal-inner"),artistModalBodyEl:document.querySelector(".js-artist-modal-body"),artistModalLoaderEl:document.querySelector(".js-artist-modal-loader")},burgerMenuOpenBtn:document.querySelector(".js-burger-menu-open"),burgerMenuCloseBtn:document.querySelector(".js-burger-menu-close"),burgerMenu:document.querySelector(".burger-overlay"),burgerMenuList:document.querySelector(".mobile-menu-list")};L.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function z(e=1){try{const{data:t}=await L.get("artists",{params:{limit:8,page:e}});return t}catch(t){throw console.error("Error fetching artists:",t.message),t}}//! ============================================================================
const W=async e=>(await L.get(`artists/${e}/albums`)).data;async function G(){try{return(await L.get("feedbacks",{params:{limit:10,page:1}})).data.data}catch(e){console.log("Error fetching feedbacks",e)}}const y="/nine-friends-of-a-FullStack/assets/sprite-DoBGdM4A.svg";function B(e){document.getElementById(e).classList.remove("hidden")}function b(e){document.getElementById(e).classList.add("hidden")}async function x(e){try{const t=await z(e);B("artists__loader");const s=t.artists.map(a=>`
          <li class="artists__item">
            <img class="artists__image" src="${a.strArtistThumb}" alt="${a.strArtist}" loading="lazy" onerror="this.onerror=null;this.src='/img/img-placeholder.svg';">
            <ul class="artists__genre-list">
              ${a.genres.map(r=>`<li class="artists__genre-item">${r}</li>`).join("")}
            </ul>
            <h3 class="artists__title-name">${a.strArtist}</h3>
            <p class="artists__text-biography">${a.strBiographyEN}</p>

            <button class="artists__more-btn js-artist-more-btn" data-artists-id="${a._id}">
              Learn More 
              <svg class="artists-more__caret">
                <use href='${y}#icon-caret-right'></use>
              </svg>
            </button>
          </li>
        `).join("");return c.artistsList.innerHTML=s,b("artists__loader"),t}catch(t){b("artists__loader"),console.error("Error in createArtistsList:",t)}}const $=document.getElementById("pagination");let I=null;async function J(){const e=await x(1);I=new N($,{totalItems:e.totalArtists,itemsPerPage:e.limit,visiblePages:5,centerAlign:!0,template:{page:'<a href="#" class="custom-page-btn">{{page}}</a>',currentPage:'<strong class="custom-current">{{page}}</strong>',moveButton:'<a href="#" class="custom-move-btn tui-{{type}}" aria-label="move button"><span class="icon-{{type}}"></span></a>',disabledMoveButton:'<span class="custom-move-btn disabled tui-{{type}}" aria-label="move button"><span class="icon-{{type}}"></span></span>',moreButton:'<a href="#" class="custom-ellip">...</a>'}});const t={first:'<svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M18 6v12l-8-6 8-6zM6 6h2v12H6V6z"/></svg>',prev:`<svg class="artists__pagination-icon"><use href="${y}#icon-left-arrow"></use></svg>`,next:`<svg class="artists__pagination-icon"><use href="${y}#icon-right-arrow"></use></svg>`,last:'<svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M6 6v12l8-6-8-6zM18 6h-2v12h2V6z"/></svg>'};function s(){["first","prev","next","last"].forEach(a=>{const r=$.querySelector(`.tui-${a} .icon-${a}`);r&&(r.innerHTML=t[a])})}s(),I.on("afterMove",async a=>{const r=a.page;B("artists__loader"),await x(r),s()})}J();const X="data:image/webp;base64,UklGRiYBAABXRUJQVlA4WAoAAAAQAAAAEwAAEwAAQUxQSHkAAAABcFZba9h8EpCAhEqIhEiIhEmIgyEhDjYHq4NKQEIkfD8gySRExARgrYpz9SlnjXydOfkcFZIsJyP8dkSvyrQVDcMnT/3t/KOrn7lCPie3AEDfM+S207GsO201dmz17PhCGe9voGSVpBegOcmWGWcXxE72TE2xVFMAAFZQOCCGAAAAUAUAnQEqFAAUAD6RQpxKJaOioagIALASCWYAnTM0NXCB8u7UGgA547TAPQAAhVrcosEAAP7sJhnuufc6qD3M9Rv/4lPWA8Hj7cu56lJZxmNFw7UResDLdXffb/TfqtA8UiXXwmWMY76ZdvwXm69fq2W3y5zurzjF+PRR4MRmq++XPFwAAAA=",V="data:image/webp;base64,UklGRsYAAABXRUJQVlA4WAoAAAAQAAAAEwAAEwAAQUxQSHkAAAABcFZba9h8EpCAhEqIhEiIhEmIgyEhDjYHq4NKQEIkfD8gySRExARgrYpz9SlnjXydOfkcFZIsJyP8dkSvyrQVDcMnT/3t/KOrn7lCPie3AEDfM+S207GsO201dmz17PhCGe9voGSVpBegOcmWGWcXxE72TE2xVFMAAFZQOCAmAAAA0AIAnQEqFAAUAD6RRJ1KpaOioagIALASCWkAAD2joAD++E0AAAA=",Z="data:image/webp;base64,UklGRmQBAABXRUJQVlA4WAoAAAAQAAAAHgAAHAAAQUxQSLAAAAABgBDbbt1IEMzAYZAwSBkEgiEYgiAIgiEEgiEEgiEYwmt3HX0YRMQEkFHAFHkASBENAAdsADCTX/mH4jcW3a1gfXr1F3Ha8TqzKp+lcmt9QPv0JlyvM1NFbLmDZB8hI9M2Ap5MROl2a7RmJ6Z39piFtNc0jZ30zcRk7CaxTNMwHLAnXXW4dLeD6OZq1o3n6lEdWEoioq0tkDTlX//Quox/p6YCs5KWAVyaJJJIvwnTElZQOCCOAAAAkAQAnQEqHwAdAD6ROpdHpaMiITAIALASCWoAsSVBUn4A84BvIgJD7epsJWcAAP7wCT/+Of/8aL//pZE5TqYlwjfqfX8oJyU7X+09rmDZpzgV4A5N2UXiudfofy1f8G6Wn+ztDPPZ+8Hd2JHvWJCUNAmZdZhaElMtS0q/0LfmY+wqNjvFTVZepP/Fr/AAAA==",K="data:image/webp;base64,UklGRhABAABXRUJQVlA4WAoAAAAQAAAAHwAAHAAAQUxQSLIAAAABgFDbVhDrRngNpMHQABsYgQhGeBGMQAQjEMEILwIR7sz/yIMGETEBcB7NBEsrqUsiySYrCknmBYH/64LcYZpnvWtaZr/JJHleeI1JOrJe5X4aB63eRc+cEhCMSysiFwNljQLQBS3j/znNPuh/bM6z4T3YjCIYDY9P4YyuBm9yUTyXL3mqTz30V0ea0GRMX+64W49prHZsB4BsnXOskWyKfij/6pCQvDcMRvPgKDucuWw9VlA4IDgAAABQAwCdASogAB0APpE6mEelo6KhMAgAsBIJaQAAcby+xpOvAAD+77j//th//7XY//7V4j/huAAAAA==";async function ee(){let e=[];try{B("feedbacks-loader");try{const t=await G();t&&Array.isArray(t)&&(e=t)}catch{console.log("API not available, trying localStorage");const s=localStorage.getItem("feedbacks");s&&(e=JSON.parse(s))}if(e.length===0){b("feedbacks-loader"),c.swiperWrapper.innerHTML="<p>Ще немає відгуків. Будьте першим!</p>";return}te(e),ae(e.length),re()}catch{b("feedbacks-loader"),k.error({message:"Помилка завантаження відгуків"});return}b("feedbacks-loader")}ee();function te(e){const t=e.map(se).join("");c.swiperWrapper.innerHTML=t}function se({name:e,descr:t,rating:s}){return`<div class="swiper-slide">
        <div class="stars" data-raty data-score="${Math.round(s)}" data-read-only="true"></div>
        <p class="feedback-content">${t}</p>
        <p class="feedback-name">${e}</p>
        </div>`}function re(){document.querySelectorAll("[data-raty]").forEach(e=>{new C(e,{starOn:X,starOff:V,score:parseInt(e.dataset.score,10),readOnly:!0}).init()})}function ae(e){if(e<=0)return;const t=0,s=e,a=Math.floor(e/2),r=new F(".mySwiper",{modules:[Y,U],pagination:{el:".swiper-pagination",type:"custom",renderCustom:function(n,i,v){let u;return i-1===t?u=t:i===s?u=s:u=a,`
                    <span class="swiper-pagination-bullet${u===t?" active":""}" data-i="${t}"></span>
                    <span class="swiper-pagination-bullet${u===a?" active":""}" data-i="${a}"></span>
                    <span class="swiper-pagination-bullet${u===s?" active":""}" data-i="${s}"></span>
                    `}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});c.swiperBtnPrev&&c.swiperBtnPrev.classList.remove("visually-hidden"),c.swiperBtnNext&&c.swiperBtnNext.classList.remove("visually-hidden"),b("feedbacks-loader"),r.pagination&&r.pagination.el&&r.pagination.el.addEventListener("click",n=>{if(!n.target.classList.contains("swiper-pagination-bullet"))return;const i=parseInt(n.target.dataset.i,10);r.slideTo(i)})}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".js-feedback-modal"),t=e==null?void 0:e.querySelector(".js-feedback-modal-inner"),s=e==null?void 0:e.querySelector(".js-feedback-modal-loader");if(!e||!t){console.warn("[feedback-modal] modal not found in DOM");return}function a(){return`
    <form class="feedback-form js-feedback-form" novalidate>
      <p class="feedback-form-title"> Submit feedback </p>
      <div class="feedback-form-name-message">
        <label class="form-field-name">
          <span>Name</span>
          <input class="form-field-name-place" name="name" type="text" required placeholder="Emily"/>
          <div class="error-message" data-error="name"></div>
        </label>

        <label class="form-field-message">
          <span>Message</span>
          <textarea class="form-field-message-place" name="descr" rows="4" required placeholder="Type your message..."></textarea>
          <div class="error-message" data-error="descr"></div>
        </label>

        <div class="form-field-star">
          <div class="feedback-modal__rating" data-raty data-score="0"></div>
          <span>Rating</span>
          <div class="error-message" data-error="rating"></div>
        </div>

        <div class="form-actions">
          <button type="submit" class="btn btn--primary">Submit</button>
        </div>
      </div>
    </form>
  `}function r(){const o=e.querySelector("[data-raty]");o&&(o.innerHTML="",new C(o,{starOn:Z,starOff:K,score:0,readOnly:!1,click:function(m){const f=e.querySelector('[data-error="rating"]');f&&(f.textContent="",f.style.display="none");const d=e.querySelector(".form-field-star");d&&d.classList.remove("error")}}).init())}document.addEventListener("click",o=>{if(o.target.closest("[data-feedback-modal-open]")){o.preventDefault(),v();return}if(o.target.closest("[data-feedback-modal-close]")){o.preventDefault(),u();return}if(o.target===e){u();return}}),document.addEventListener("keydown",o=>{o.key==="Escape"&&!e.classList.contains("is-hidden")&&u()});function n(){const o=e.querySelector(".js-feedback-form");o&&(o.removeEventListener("submit",i),o.addEventListener("submit",i))}async function i(o){var q;o.preventDefault(),document.activeElement&&document.activeElement.type==="submit"&&document.activeElement.blur();const m=o.currentTarget,f=new FormData(m),d={name:(f.get("name")||"").trim(),rating:parseInt(((q=e.querySelector('[data-raty] input[name="score"]'))==null?void 0:q.value)||0,10),descr:(f.get("descr")||"").trim()};e.querySelectorAll(".error-message").forEach(l=>{l.textContent="",l.style.display="none"}),e.querySelectorAll(".form-field-name, .form-field-message").forEach(l=>{l.classList.remove("error")}),e.querySelectorAll(".form-field-name, .form-field-message, .form-field-star").forEach(l=>{l.classList.remove("error")});const p={name:[],descr:[],rating:[]};(d.name.length<2||d.name.length>16)&&p.name.push("The name must be between 2 and 16 characters long"),(d.descr.length<10||d.descr.length>512)&&p.descr.push("The comment must contain between 10 and 512 characters"),d.rating<1&&p.rating.push("");const P=Object.values(p).some(l=>l.length>0);if(Object.keys(p).forEach(l=>{const g=e.querySelector(`[data-error="${l}"]`);if(g&&p[l].length>0){g.textContent=p[l].join(", "),g.style.display="block";let E;l==="name"?E=g.closest(".form-field-name"):l==="descr"?E=g.closest(".form-field-message"):l==="rating"&&(E=g.closest(".form-field-star")),E&&E.classList.add("error")}}),!P)try{const l=JSON.parse(localStorage.getItem("feedbacks")||"[]");l.push(d),localStorage.setItem("feedbacks",JSON.stringify(l)),k.success({message:"Review has been added!",position:"bottomCenter",icon:"none",class:"iziToast-center-text"}),u()}catch{k.error({title:"Ошибка",message:"Не удалось сохранить отзыв. Попробуйте еще раз.",class:"iziToast-center-text"})}}function v(){if(!t.querySelector(".js-feedback-form"))t.innerHTML=a();else{e.querySelectorAll(".error-message").forEach(d=>{d.textContent="",d.style.display="none"}),e.querySelectorAll(".form-field-name, .form-field-message, .form-field-star").forEach(d=>{d.classList.remove("error")});const m=e.querySelector(".js-feedback-form");m&&m.reset();const f=e.querySelector("[data-raty]");f&&(f.innerHTML="")}e.classList.remove("is-hidden"),e.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden",s&&(s.style.display="none"),t.style.display="block",r(),n()}function u(){e.querySelectorAll(".error-message").forEach(m=>{m.textContent="",m.style.display="none"}),e.querySelectorAll(".form-field-name, .form-field-message, .form-field-star").forEach(m=>{m.classList.remove("error")}),document.activeElement&&e.contains(document.activeElement)&&document.activeElement.blur(),e.classList.add("is-hidden"),e.setAttribute("aria-hidden","true"),document.body.style.overflow=""}window.__openFeedbackModal=v});let j;//! ============================================================================
const ne=({intFormedYear:e,intDiedYear:t=""})=>{let s="—";const a=Number(e),r=Number(t);return a?t?r>=a&&(s=`${a}-${r}`):s=`${a}-present`:s="information missing",s},ie=()=>window.matchMedia("(min-width: 1440px)").matches?5:window.matchMedia("(min-width: 768px)").matches?4:11,O=()=>{const e=document.querySelector(".about-artist__info-item--bio .about-artist__info-item-text");if(!e)return;e.dataset.fullText||(e.dataset.fullText=e.textContent.trim());const t=e.dataset.fullText;e.style.visibility="hidden";const s=parseFloat(getComputedStyle(e).lineHeight),a=ie(),r=s*a;let n=t.split(" "),i=t;for(e.textContent=i;e.scrollHeight>r&&n.length>0;)n.pop(),i=n.join(" "),e.textContent=i+"...";e.style.maxHeight=`${r}px`,e.style.overflowY=e.scrollHeight>r?"auto":"hidden",e.style.visibility="visible"};function D(){clearTimeout(j),j=setTimeout(O,150)}//! ============================================================================
function oe(e){if(e==null)return"0:00";const t=Math.floor(e/1e3),s=Math.floor(t/60),a=t%60;return`${s}:${a.toString().padStart(2,"0")}`}function le(e,t=!0){return e.reduce((s,a)=>{const r=a.tracks.filter(n=>{var i;return Number(n.intDuration)>0&&((i=n.strTrack)==null?void 0:i.trim())});return t&&r.length===0||s.push({...a,tracks:r}),s},[])}//! ============================================================================
function ce(e){if(typeof e!="string"||e.trim()==="")return!1;try{const t=new URL(e);return t.protocol==="http:"||t.protocol==="https:"}catch{return!1}}//! ============================================================================
function de(e){k.error({message:e,position:"topRight",class:"custom-error-toast",timeout:5e3,onOpening:(t,s)=>{const a=s.querySelector(".iziToast-body");if(a){const n=document.createElement("span");n.classList.add("iziToast-icon"),n.innerHTML=`
          <svg class="toast-error-icon" width="24" height="24">
            <use xlink:href="${y}#icon-toast-error"></use>
          </svg>
        `,a.prepend(n)}const r=s.querySelector(".iziToast-close");r&&(r.innerHTML=`
          <svg class="toast-close-icon" width="16" height="16">
            <use xlink:href="${y}#icon-toast-close"></use>
          </svg>
        `)}})}const w=c.artistModalElems;//! ============================================================================
async function ue(e){Be(),Me();try{const t=await W(e),{albumsList:s}=t;be(t);const a=le(s,!0);ye(a),setTimeout(O,0)}catch(t){de(t.message)}finally{_e()}}//! ============================================================================
const me=e=>{const{strArtist:t,strArtistThumb:s,intFormedYear:a,intDiedYear:r="",strGender:n,intMembers:i,strCountry:v,strBiographyEN:u,genres:o}=e,m=ne({intFormedYear:a,intDiedYear:r}),f=i&&i>1,T=pe([{title:"Years active",key:"activeYears",value:m},{title:"Sex",key:"strGender",value:n,isBand:f},{title:"Members",key:"intMembers",value:i,isBand:f},{title:"Country",key:"strCountry",value:v},{title:"Biography",key:"strBiographyEN",value:u}]),p=ge(o);return`<section class="about-artist js-about-artist">
                <h2 class="about-artist__title">${t}</h2>
                <div class="about-artist__content">
                    <img
                    src="${s}"
                    class="about-artist__image"
                    alt="${t}"
                    />
                    <ul class="about-artist__info-list">
                        ${T}
                        <li class="about-artist__info-item--genres">
                          <ul class="about-artist__music-genres">
                             ${p}
                          </ul>
                        </li>
                    </ul>
                </div>
            </section>`};function fe(e){const{key:t,value:s,title:a,isBand:r=""}=e;if(t==="strGender"&&r||t==="intMembers"&&!r)return"";const i=`<li class="${t==="strBiographyEN"?"about-artist__info-item about-artist__info-item--bio":"about-artist__info-item"}">
                           <b class="about-artist__info-item-title">${a}</b>
                           <p class="about-artist__info-item-text">${s}</p>
                        </li>`;return s?i:""}function pe(e){return e.map(fe).join(`
`)}//! ============================================================================
const Ae=e=>`<li class="about-artist__music-genre">${e}</li>`;function ge(e){return(e==null?void 0:e.length)>0?e.map(Ae).join(`
`):""}//! ============================================================================
const be=e=>{const t=me(e);w.artistModalInnerEl.insertAdjacentHTML("afterbegin",t)};//! ============================================================================
const ye=e=>{const t=he(e);w.artistModalInnerEl.insertAdjacentHTML("beforeend",t)};function he(e){return`<section class="artist-albums js-artist-modal-albums">
            <h2 class="artist-albums__title">Albums</h2>
            <ul class="artist-albums__list js-artist-albums">
              ${ve(e)}
            </ul>
          </section>`}function ve(e){return e.map(Ee).join(`
`)}function Ee(e){const{strAlbum:t="",tracks:s}=e,a=(s==null?void 0:s.length)>0?Le(s):"";return`<li class="artist-album">
            <h3 class="artist-album__title">${t}</h3>
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
function ke(e){const{strTrack:t,intDuration:s,movie:a}=e,r=we(a),n=oe(s);return`<li class="artist-tracks__item">
            <span class="artist-tracks__item-name">${t}</span>
            <span class="artist-tracks__item-duration">${n}</span>
            ${r}
          </li>`}function Le(e){return e.map(ke).join(`
`)}//! ============================================================================
function we(e){return ce(e)?`<a href="${e}" target="_blank" rel="noopener noreferrer" class="artist-tracks__item-link">
                          <svg class="artist-tracks__item-icon" width="21" height="15">
                            <use href="${y}#icon-Youtube"></use>
                          </svg>
                      </a>`:""}//! ============================================================================
const Me=()=>{w.artistModalLoaderEl.classList.add("modal-loader-visible")},_e=()=>{w.artistModalLoaderEl.classList.remove("modal-loader-visible")},A=c.artistModalElems;let _=0;//! ============================================================================
const Se=e=>{const t=e.target.closest(".js-artist-more-btn");t&&ue(t.dataset.artistsId)};//! ============================================================================
function Be(){_=window.scrollY,document.body.style.top=`-${_}px`,document.body.classList.add("scroll-lock"),A.artistModalEl.classList.add("artist-modal--is-open"),document.addEventListener("keydown",H),window.addEventListener("resize",D),A.artistModalEl.addEventListener("click",Q),A.closeArtistModalBtnEl.addEventListener("click",M),A.artistModalBodyEl.scrollTop=0}function M(){A.artistModalEl.classList.remove("artist-modal--is-open"),document.body.classList.remove("scroll-lock"),document.body.style.top="",window.scrollTo(0,_),A.artistModalInnerEl.innerHTML="",document.removeEventListener("keydown",H),window.removeEventListener("resize",D),A.artistModalEl.removeEventListener("click",Q),A.closeArtistModalBtnEl.removeEventListener("click",M)}//! ============================================================================
function H(e){e.key==="Escape"&&M()}//! ============================================================================
function Q(e){e.target===A.artistModalEl&&M()}const{artistsList:Te}=c;//! ============================================================================
Te.addEventListener("click",Se);let S=0;c.burgerMenuOpenBtn.addEventListener("click",e=>{qe()});c.burgerMenuCloseBtn.addEventListener("click",e=>{h()});function R(e){if(e.target.classList=="nav-link-modal"){h();const t=document.querySelector(e.target);t&&t.scrollIntoView({behavior:"smooth"})}}function qe(){S=window.scrollY,document.body.style.top=`-${S}px`,document.body.classList.add("scroll-lock"),c.burgerMenu.classList.add("--open"),document.addEventListener("keydown",e=>{e.key==="Escape"&&h()}),c.burgerMenuList.addEventListener("click",e=>{R(e)}),c.burgerMenuCloseBtn.addEventListener("click",e=>{h()})}function h(){c.burgerMenu.classList.remove("--open"),document.removeEventListener("keydown",e=>{e.key==="Escape"&&h()}),c.burgerMenuList.removeEventListener("click",e=>{R(e)}),c.burgerMenuCloseBtn.removeEventListener("click",e=>{h()}),document.body.classList.remove("scroll-lock"),window.scrollTo(0,S)}
//# sourceMappingURL=index.js.map
