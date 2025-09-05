import{a as W,P as $,i as h,R as q,S as j,N as H,b as P}from"./assets/vendor-Bttng-cq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();const l={artistsList:document.querySelector(".artists__list"),swiperWrapper:document.querySelector(".swiper-wrapper"),swiperBtnPrev:document.querySelector(".swiper-button-prev"),swiperBtnNext:document.querySelector(".swiper-button-next"),artistModalElems:{artistModalEl:document.querySelector(".js-artist-modal"),closeArtistModalBtnEl:document.querySelector("[data-artist-modal-close]"),artistModalInnerEl:document.querySelector(".js-artist-modal-inner"),artistModalBodyEl:document.querySelector(".js-artist-modal-body"),artistModalLoaderEl:document.querySelector(".js-artist-modal-loader")},burgerMenuOpenBtn:document.querySelector(".js-burger-menu-open"),burgerMenuCloseBtn:document.querySelector(".js-burger-menu-close"),burgerMenu:document.querySelector(".burger-overlay"),burgerMenuList:document.querySelector(".mobile-menu-list")};W.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function U(e=1){try{const{data:t}=await W.get("artists",{params:{limit:8,page:e}});return t}catch(t){throw console.error("Error fetching artists:",t.message),t}}//! ============================================================================
const R=async e=>(await W.get(`artists/${e}/albums`)).data;async function N(){try{return(await W.get("feedbacks",{params:{limit:10,page:1}})).data.data}catch(e){console.log("Error fetching feedbacks",e)}}//! ============================================================================
async function z(e){W.post("feedbacks",{...e})}const x="/nine-friends-of-a-FullStack/assets/sprite-DoBGdM4A.svg";function w(e){document.getElementById(e).classList.remove("hidden")}function F(e){document.getElementById(e).classList.add("hidden")}const X="data:image/webp;base64,UklGRq4FAABXRUJQVlA4IKIFAADwlwCdASrQA1gCPpFImUylpCIiIPcQsBIJaW7hd2Eb86WjgAUVh6yRkFP5RjiaFlItNK6xYsWLFixYsWLFixYsWLFixYnL0mzgC/6C/hqTxbuP8yrCFlItNK6xYsWLFixYsWLFixYsWLFixXwUXg+5lWELKRaaV1ixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixOByw1a3BiegbgxPQNwYgX88NVpFppXWLFixYsWLFixYsWLFixYsWJyNH0mewwUIDBQoOGBl0M4LKRaaV1ixYsWLFixYsWLFixYsWLFic3tb05B8iKEAuwOryqIN/jMqwhZSLTSusWLFixYsWLFixYsWK+U40gOSbH4tvEaFsvg3NZT8aFlItNK6xYsWLFixYsWLFixYsWLE5vZooDOvIiwaoBDZ3smjhP+yWn40LKRaaV1ixYsWLFixYsWLFixYsWJzeaG+/UE53TMQadzRqgQfdTxXscJvzKQLHcOFt1PxoWUi00rrFixYsWLFixYsWLFixYsTm0M7gcc/O55K5MAQZ9agwGKvGDKV1ixYsWLFixYsWLFixYsWLFixYr5Ry/WcHun/1bzE9A3BiefI4gEYMpXWLFixYsWLFixYsWLFixYsWLFivhW/DLtlTv+aOFWzgIDsHgEHNrFixYsWLFixYsWLFixYsWLFixYsV8r3Mr9GebAbbmVYQspFppXWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFbx92LFixYsWLFixYsWLFixYsWLFixYsWLFixXzBtlm8NhZqxYsWLFixYsWLFixYsWLFixYsWLFixYsV8IrAc9DOmFtBFb9qPOLFixYsWLFixYsWLFixYsWLFixYsWLFixOER2qiQPAAA/v6z58QXq0TQrPiFrGBaKA4oM4ndvpoEUMDQZt8oy/psIAQbJwCUMESAAAAAAAAAAAAAAAAAAAAAAAAJVCgyGXFbr7zAD/yCfTYwAAAA4/yHwtNboAdCAj/HVw+7DM+qBe6/0/qW0SazPALYPif5LKhzf/VPVGBK6m/e1A9rUIgLF4QsE+sUABvL76pApo4EZf8n7Ogpx26gAAAAAAAAAAAAAAAAAAAAAAAAfy4bk4BwLJZ0Qh5Iw4h+HuPJHYAhLRas4aUR0hziLCmQAhn1f46dUTBsdaAAAA==";async function _(e){try{const t=await U(e);w("artists__loader");const s=t.artists.map(r=>`
          <li class="artists__item">
            <img class="artists__image" src="${r.strArtistThumb}" alt="${r.strArtist}" loading="lazy" onerror="this.onerror=null;this.src='${X}';">
            <ul class="artists__genre-list">
              ${r.genres.map(i=>`<li class="artists__genre-item">${i}</li>`).join("")}
            </ul>
            <h3 class="artists__title-name">${r.strArtist}</h3>
            <p class="artists__text-biography">${r.strBiographyEN}</p>

            <button class="artists__more-btn js-artist-more-btn" data-artists-id="${r._id}">
              Learn More 
              <svg class="artists-more__caret">
                <use href='${x}#icon-caret-right'></use>
              </svg>
            </button>
          </li>
        `).join("");return l.artistsList.innerHTML=s,F("artists__loader"),t}catch(t){F("artists__loader"),console.error("Error in createArtistsList:",t)}}const S=document.getElementById("pagination");let T=null;async function V(){const e=await _(1);T=new $(S,{totalItems:e.totalArtists,itemsPerPage:e.limit,visiblePages:5,centerAlign:!0,template:{page:'<a href="#" class="custom-page-btn">{{page}}</a>',currentPage:'<strong class="custom-current">{{page}}</strong>',moveButton:'<a href="#" class="custom-move-btn tui-{{type}}" aria-label="move button"><span class="icon-{{type}}"></span></a>',disabledMoveButton:'<span class="custom-move-btn disabled tui-{{type}}"><span class="icon-{{type}}"></span></span>',moreButton:'<a href="#" class="custom-ellip">...</a>'}});const t={first:'<svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M18 6v12l-8-6 8-6zM6 6h2v12H6V6z"/></svg>',prev:`<svg class="artists__pagination-icon"><use href="${x}#icon-left-arrow"></use></svg>`,next:`<svg class="artists__pagination-icon"><use href="${x}#icon-right-arrow"></use></svg>`,last:'<svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M6 6v12l8-6-8-6zM18 6h-2v12h2V6z"/></svg>'};function s(){["first","prev","next","last"].forEach(r=>{const i=S.querySelector(`.tui-${r} .icon-${r}`);i&&(i.innerHTML=t[r])})}s(),T.on("afterMove",async r=>{const i=r.page;w("artists__loader"),await _(i),s();const a=l.artistsList.getBoundingClientRect().top+window.scrollY-100;window.scrollTo({top:a,behavior:"smooth"})})}V();const G="data:image/webp;base64,UklGRiYBAABXRUJQVlA4WAoAAAAQAAAAEwAAEwAAQUxQSHkAAAABcFZba9h8EpCAhEqIhEiIhEmIgyEhDjYHq4NKQEIkfD8gySRExARgrYpz9SlnjXydOfkcFZIsJyP8dkSvyrQVDcMnT/3t/KOrn7lCPie3AEDfM+S207GsO201dmz17PhCGe9voGSVpBegOcmWGWcXxE72TE2xVFMAAFZQOCCGAAAAUAUAnQEqFAAUAD6RQpxKJaOioagIALASCWYAnTM0NXCB8u7UGgA547TAPQAAhVrcosEAAP7sJhnuufc6qD3M9Rv/4lPWA8Hj7cu56lJZxmNFw7UResDLdXffb/TfqtA8UiXXwmWMY76ZdvwXm69fq2W3y5zurzjF+PRR4MRmq++XPFwAAAA=",J="data:image/webp;base64,UklGRsYAAABXRUJQVlA4WAoAAAAQAAAAEwAAEwAAQUxQSHkAAAABcFZba9h8EpCAhEqIhEiIhEmIgyEhDjYHq4NKQEIkfD8gySRExARgrYpz9SlnjXydOfkcFZIsJyP8dkSvyrQVDcMnT/3t/KOrn7lCPie3AEDfM+S207GsO201dmz17PhCGe9voGSVpBegOcmWGWcXxE72TE2xVFMAAFZQOCAmAAAA0AIAnQEqFAAUAD6RRJ1KpaOioagIALASCWkAAD2joAD++E0AAAA=",Z="data:image/webp;base64,UklGRmQBAABXRUJQVlA4WAoAAAAQAAAAHgAAHAAAQUxQSLAAAAABgBDbbt1IEMzAYZAwSBkEgiEYgiAIgiEEgiEEgiEYwmt3HX0YRMQEkFHAFHkASBENAAdsADCTX/mH4jcW3a1gfXr1F3Ha8TqzKp+lcmt9QPv0JlyvM1NFbLmDZB8hI9M2Ap5MROl2a7RmJ6Z39piFtNc0jZ30zcRk7CaxTNMwHLAnXXW4dLeD6OZq1o3n6lEdWEoioq0tkDTlX//Quox/p6YCs5KWAVyaJJJIvwnTElZQOCCOAAAAkAQAnQEqHwAdAD6ROpdHpaMiITAIALASCWoAsSVBUn4A84BvIgJD7epsJWcAAP7wCT/+Of/8aL//pZE5TqYlwjfqfX8oJyU7X+09rmDZpzgV4A5N2UXiudfofy1f8G6Wn+ztDPPZ+8Hd2JHvWJCUNAmZdZhaElMtS0q/0LfmY+wqNjvFTVZepP/Fr/AAAA==",K="data:image/webp;base64,UklGRhABAABXRUJQVlA4WAoAAAAQAAAAHwAAHAAAQUxQSLIAAAABgFDbVhDrRngNpMHQABsYgQhGeBGMQAQjEMEILwIR7sz/yIMGETEBcB7NBEsrqUsiySYrCknmBYH/64LcYZpnvWtaZr/JJHleeI1JOrJe5X4aB63eRc+cEhCMSysiFwNljQLQBS3j/znNPuh/bM6z4T3YjCIYDY9P4YyuBm9yUTyXL3mqTz30V0ea0GRMX+64W49prHZsB4BsnXOskWyKfij/6pCQvDcMRvPgKDucuWw9VlA4IDgAAABQAwCdASogAB0APpE6mEelo6KhMAgAsBIJaQAAcby+xpOvAAD+77j//th//7XY//7V4j/huAAAAA==";async function ee(){let e=[];try{w("feedbacks-loader");try{const t=await N();t&&Array.isArray(t)&&(e=t)}catch{console.log("API not available, trying localStorage");const s=localStorage.getItem("feedbacks");s&&(e=JSON.parse(s))}if(e.length===0){F("feedbacks-loader"),l.swiperWrapper.innerHTML="<p>Ще немає відгуків. Будьте першим!</p>";return}te(e),ie(e.length),re()}catch{F("feedbacks-loader"),h.error({message:"Помилка завантаження відгуків"});return}F("feedbacks-loader")}ee();function te(e){const t=e.map(se).join("");l.swiperWrapper.innerHTML=t}function se({name:e,descr:t,rating:s}){return`<div class="swiper-slide">
        <div class="stars" data-raty data-score="${Math.round(s)}" data-read-only="true"></div>
        <p class="feedback-content">${t}</p>
        <p class="feedback-name">${e}</p>
        </div>`}function re(){document.querySelectorAll("[data-raty]").forEach(e=>{new q(e,{starOn:G,starOff:J,score:parseInt(e.dataset.score,10),readOnly:!0}).init()})}function ie(e){if(e<=0)return;const t=0,s=e,r=Math.floor(e/2),i=new j(".mySwiper",{modules:[H,P],pagination:{el:".swiper-pagination",type:"custom",renderCustom:function(a,o,f){let c;return o-1===t?c=t:o===s?c=s:c=r,`
                    <span class="swiper-pagination-bullet${c===t?" active":""}" data-i="${t}"></span>
                    <span class="swiper-pagination-bullet${c===r?" active":""}" data-i="${r}"></span>
                    <span class="swiper-pagination-bullet${c===s?" active":""}" data-i="${s}"></span>
                    `}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});l.swiperBtnPrev&&l.swiperBtnPrev.classList.remove("visually-hidden"),l.swiperBtnNext&&l.swiperBtnNext.classList.remove("visually-hidden"),F("feedbacks-loader"),i.pagination&&i.pagination.el&&i.pagination.el.addEventListener("click",a=>{if(!a.target.classList.contains("swiper-pagination-bullet"))return;const o=parseInt(a.target.dataset.i,10);i.slideTo(o)})}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".js-feedback-modal"),t=e==null?void 0:e.querySelector(".js-feedback-modal-inner"),s=e==null?void 0:e.querySelector(".js-feedback-modal-loader");if(!e||!t){console.warn("[feedback-modal] modal not found in DOM");return}function r(){return`
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
  `}function i(){const n=e.querySelector("[data-raty]");n&&(n.innerHTML="",new q(n,{starOn:Z,starOff:K,score:0,readOnly:!1,click:function(u){const A=e.querySelector('[data-error="rating"]');A&&(A.textContent="",A.style.display="none");const m=e.querySelector(".form-field-star");m&&m.classList.remove("error")}}).init())}document.addEventListener("click",n=>{if(n.target.closest("[data-feedback-modal-open]")){n.preventDefault(),f();return}if(n.target.closest("[data-feedback-modal-close]")){n.preventDefault(),c();return}if(n.target===e){c();return}}),document.addEventListener("keydown",n=>{n.key==="Escape"&&!e.classList.contains("is-hidden")&&c()});function a(){const n=e.querySelector(".js-feedback-form");n&&(n.removeEventListener("submit",o),n.addEventListener("submit",o))}async function o(n){var B;n.preventDefault(),document.activeElement&&document.activeElement.type==="submit"&&document.activeElement.blur();const u=n.currentTarget,A=new FormData(u),m={name:(A.get("name")||"").trim(),rating:parseInt(((B=e.querySelector('[data-raty] input[name="score"]'))==null?void 0:B.value)||0,10),descr:(A.get("descr")||"").trim()};e.querySelectorAll(".error-message").forEach(d=>{d.textContent="",d.style.display="none"}),e.querySelectorAll(".form-field-name, .form-field-message").forEach(d=>{d.classList.remove("error")}),e.querySelectorAll(".form-field-name, .form-field-message, .form-field-star").forEach(d=>{d.classList.remove("error")});const L={name:[],descr:[],rating:[]};(m.name.length<2||m.name.length>16)&&L.name.push("The name must be between 2 and 16 characters long"),(m.descr.length<10||m.descr.length>512)&&L.descr.push("The comment must contain between 10 and 512 characters"),m.rating<1&&L.rating.push("");const O=Object.values(L).some(d=>d.length>0);if(Object.keys(L).forEach(d=>{const b=e.querySelector(`[data-error="${d}"]`);if(b&&L[d].length>0){b.textContent=L[d].join(", "),b.style.display="block";let y;d==="name"?y=b.closest(".form-field-name"):d==="descr"?y=b.closest(".form-field-message"):d==="rating"&&(y=b.closest(".form-field-star")),y&&y.classList.add("error")}}),!O)try{await z(m),h.success({message:"Review has been added!",position:"bottomCenter",icon:"none",class:"iziToast-center-text"}),c()}catch{h.error({title:"Ошибка",message:"Не удалось сохранить отзыв. Попробуйте еще раз.",class:"iziToast-center-text"})}}function f(){if(!t.querySelector(".js-feedback-form"))t.innerHTML=r();else{e.querySelectorAll(".error-message").forEach(m=>{m.textContent="",m.style.display="none"}),e.querySelectorAll(".form-field-name, .form-field-message, .form-field-star").forEach(m=>{m.classList.remove("error")});const u=e.querySelector(".js-feedback-form");u&&u.reset();const A=e.querySelector("[data-raty]");A&&(A.innerHTML="")}e.classList.remove("is-hidden"),e.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden",s&&(s.style.display="none"),t.style.display="block",i(),a()}function c(){e.querySelectorAll(".error-message").forEach(u=>{u.textContent="",u.style.display="none"}),e.querySelectorAll(".form-field-name, .form-field-message, .form-field-star").forEach(u=>{u.classList.remove("error")}),document.activeElement&&e.contains(document.activeElement)&&document.activeElement.blur(),e.classList.add("is-hidden"),e.setAttribute("aria-hidden","true"),document.body.style.overflow=""}window.__openFeedbackModal=f});//! ============================================================================
const ae=({intFormedYear:e,intDiedYear:t=""})=>{let s="—";const r=Number(e),i=Number(t);return r?t?i>=r&&(s=`${r}-${i}`):s=`${r}-present`:s="information missing",s};//! ============================================================================
function ne(e){if(e==null)return"0:00";const t=Math.floor(e/1e3),s=Math.floor(t/60),r=t%60;return`${s}:${r.toString().padStart(2,"0")}`}function oe(e,t=!0){return e.reduce((s,r)=>{const i=r.tracks.filter(a=>{var o;return Number(a.intDuration)>0&&((o=a.strTrack)==null?void 0:o.trim())});return t&&i.length===0||s.push({...r,tracks:i}),s},[])}//! ============================================================================
function le(e){if(typeof e!="string"||e.trim()==="")return!1;try{const t=new URL(e);return t.protocol==="http:"||t.protocol==="https:"}catch{return!1}}//! ============================================================================
function ce(e){h.error({message:e,position:"topRight",class:"custom-error-toast",timeout:5e3,onOpening:(t,s)=>{const r=s.querySelector(".iziToast-body");if(r){const a=document.createElement("span");a.classList.add("iziToast-icon"),a.innerHTML=`
          <svg class="toast-error-icon" width="24" height="24">
            <use xlink:href="${x}#icon-toast-error"></use>
          </svg>
        `,r.prepend(a)}const i=s.querySelector(".iziToast-close");i&&(i.innerHTML=`
          <svg class="toast-close-icon" width="16" height="16">
            <use xlink:href="${x}#icon-toast-close"></use>
          </svg>
        `)}})}const g=l.artistModalElems;//! ============================================================================
async function de(e){Ee(),We(),g.artistModalInnerEl.innerHTML="";try{const t=await R(e),{albumsList:s}=t;pe(t);const r=oe(s,!0);await be(r)}catch(t){ce((t==null?void 0:t.message)||"Failed to load artist data")}finally{he()}}//! ============================================================================
const ue=e=>{const{strArtist:t,strArtistThumb:s,intFormedYear:r,intDiedYear:i="",strGender:a,intMembers:o,strCountry:f,strBiographyEN:c,genres:n}=e,u=ae({intFormedYear:r,intDiedYear:i}),A=o&&o>1,M=Ae([{title:"Years active",key:"activeYears",value:u},{title:"Sex",key:"strGender",value:a,isBand:A},{title:"Members",key:"intMembers",value:o,isBand:A},{title:"Country",key:"strCountry",value:f},{title:"Biography",key:"strBiographyEN",value:c}]),L=Le(n);return`<section class="about-artist js-about-artist" aria-labelledby="about-artist-title">
                <h2 id="about-artist-title" class="about-artist__title">
                ${t||"Unknown artist"}
                </h2>
                <div class="about-artist__content">
                    <img
                    src="${s||"img/default-artist.png"}"
                    class="about-artist__image"
                    alt="${t||"Unknown artist"}"
                    loading="lazy"
                    width="272"
                    height="167"
                    />
                    <ul class="about-artist__info-list" role="list">
                        ${M}
                        <li class="about-artist__info-item--genres">
                          <ul class="about-artist__music-genres" role="list" aria-label="Music genres">
                             ${L}
                          </ul>
                        </li>
                    </ul>
                </div>
            </section>`};function me(e){const{key:t,value:s,title:r,isBand:i=""}=e;if(t==="strGender"&&i||t==="intMembers"&&!i)return"";const o=`<li class="${t==="strBiographyEN"?"about-artist__info-item about-artist__info-item--bio":"about-artist__info-item"}">
                           <b class="about-artist__info-item-title">${r}</b>
                           <p class="about-artist__info-item-text">${s}</p>
                        </li>`;return s?o:""}function Ae(e){return e.map(me).join(`
`)}//! ============================================================================
const fe=e=>`<li class="about-artist__music-genre">${e}</li>`;function Le(e){return(e==null?void 0:e.map(fe).join(""))||""}//! ============================================================================
const pe=e=>{const t=ue(e);g.artistModalInnerEl.insertAdjacentHTML("afterbegin",t);const s=g.artistModalInnerEl.querySelector(".about-artist__image");s.addEventListener("error",()=>{s.dataset.errorHandled||(s.src="img/default-artist.png",s.dataset.errorHandled="true")})};//! ============================================================================
function I(e,t,s){const a=s.current,o=e.slice(a,a+5),f=document.createDocumentFragment();return o.forEach(c=>{const n=document.createElement("li");n.classList.add("artist-album"),n.innerHTML=Fe(c),f.appendChild(n)}),t.appendChild(f),requestAnimationFrame(()=>{o.forEach((c,n)=>{const u=t.children[a+n];u&&setTimeout(()=>{u.classList.add("artist-album--visible")},n*100)})}),s.current+=5,t.lastElementChild}function ge(e,t,s){if(!(e!=null&&e.length)||!t)return;const r=new IntersectionObserver(a=>{a.forEach(o=>{if(o.isIntersecting){r.unobserve(o.target);const f=I(e,t,s);s.current<e.length&&f&&r.observe(f)}})},{root:null,rootMargin:"0px",threshold:.5}),i=I(e,t,s);i&&s.current<e.length&&r.observe(i)}const be=async e=>{const s=`<section class="artist-albums js-artist-modal-albums">
                    <h2 class="artist-albums__title">Albums</h2>
                    ${(e==null?void 0:e.length)?'<ul class="artist-albums__list js-artist-albums"></ul>':'<p class="artist-albums__empty">No albums available</p>'}
                  </section>`;g.artistModalInnerEl.insertAdjacentHTML("beforeend",s);const r=g.artistModalInnerEl.querySelector(".js-artist-albums");if(!r)return;ge(e,r,{current:0})};function Fe(e){const{strAlbum:t="",tracks:s}=e,r=(s==null?void 0:s.length)>0?Ye(s):"";return`<h3 class="artist-album__title">${t}</h3>
            <div class="artist-album__tracks">
              <ul class="artist-tracks__header">
                <li class="artist-tracks__header-item header-track">Track</li>
                <li class="artist-tracks__header-item header-duration">Time</li>
                 <li class="artist-tracks__header-item header-link">Link</li>
              </ul>
              <ul class="artist-tracks__list">
                ${r}
              </ul>
            </div>
          `}//! ============================================================================
function xe(e){const{strTrack:t,intDuration:s,movie:r}=e,i=ye(r,t),a=ne(s);return`<li class="artist-tracks__item">
            <span class="artist-tracks__item-name">${t}</span>
            <span class="artist-tracks__item-duration">${a}</span>
            ${i}
          </li>`}function Ye(e){return e.map(xe).join(`
`)}//! ============================================================================
function ye(e,t){return le(e)?`<a href="${e}" target="_blank" rel="noopener noreferrer" 
                    class="artist-tracks__item-link" aria-label="Watch ${t} on YouTube">
                          <svg class="artist-tracks__item-icon" width="21" height="15">
                            <use href="${x}#icon-Youtube"></use>
                          </svg>
                      </a>`:""}//! ============================================================================
const We=()=>{g.artistModalLoaderEl.classList.add("modal-loader-visible")},he=()=>{g.artistModalLoaderEl.classList.remove("modal-loader-visible")},p=l.artistModalElems;let E=0;//! ============================================================================
const ve=e=>{const t=e.target.closest(".js-artist-more-btn");t&&de(t.dataset.artistsId)};//! ============================================================================
function Ee(){E=window.scrollY,document.body.style.top=`-${E}px`,document.body.classList.add("scroll-lock"),p.artistModalEl.classList.add("artist-modal--is-open"),document.addEventListener("keydown",C),p.artistModalEl.addEventListener("click",Q),p.closeArtistModalBtnEl.addEventListener("click",v),p.artistModalBodyEl.scrollTop=0}function v(){p.artistModalEl.classList.remove("artist-modal--is-open"),document.body.classList.remove("scroll-lock"),document.body.style.top="",window.scrollTo(0,E),p.artistModalInnerEl.innerHTML="",document.removeEventListener("keydown",C),p.artistModalEl.removeEventListener("click",Q),p.closeArtistModalBtnEl.removeEventListener("click",v)}//! ============================================================================
function C(e){e.key==="Escape"&&v()}//! ============================================================================
function Q(e){e.target===p.artistModalEl&&v()}const{artistsList:ke}=l;//! ============================================================================
ke.addEventListener("click",ve);let k=0;l.burgerMenuOpenBtn.addEventListener("click",e=>{we()});l.burgerMenuCloseBtn.addEventListener("click",e=>{Y()});function D(e){if(e.target.classList.contains("nav-link-modal")){Y();const t=e.target.getAttribute("href"),s=document.querySelector(t);s&&s.scrollIntoView({behavior:"smooth"})}}function we(){k=window.scrollY,document.body.style.top=`-${k}px`,document.body.classList.add("scroll-lock"),l.burgerMenu.classList.add("open"),document.addEventListener("keydown",e=>{e.key==="Escape"&&Y()}),l.burgerMenuList.addEventListener("click",e=>{D(e)}),l.burgerMenuCloseBtn.addEventListener("click",e=>{Y()})}function Y(){l.burgerMenu.classList.remove("open"),document.removeEventListener("keydown",e=>{e.key==="Escape"&&Y()}),l.burgerMenuList.removeEventListener("click",e=>{D(e)}),l.burgerMenuCloseBtn.removeEventListener("click",e=>{Y()}),document.body.classList.remove("scroll-lock"),window.scrollTo(0,k)}
//# sourceMappingURL=index.js.map
