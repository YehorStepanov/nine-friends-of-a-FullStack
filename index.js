import{a as Y,P as H,i as W,R as I,S as P,N as R,b as N}from"./assets/vendor-Bttng-cq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();const l={exampele:document.querySelector(".exampele"),artistsList:document.querySelector(".artists__list"),artistsLoadButton:document.querySelector(".artists__load-btn"),swiperWrapper:document.querySelector(".swiper-wrapper"),swiperBtnPrev:document.querySelector(".swiper-button-prev"),swiperBtnNext:document.querySelector(".swiper-button-next"),artistModalElems:{artistModalEl:document.querySelector(".js-artist-modal"),closeArtistModalBtnEl:document.querySelector("[data-artist-modal-close]"),artistModalInnerEl:document.querySelector(".js-artist-modal-inner"),artistModalBodyEl:document.querySelector(".js-artist-modal-body"),artistModalLoaderEl:document.querySelector(".js-artist-modal-loader")},burgerMenuOpenBtn:document.querySelector(".js-burger-menu-open"),burgerMenuCloseBtn:document.querySelector(".js-burger-menu-close"),burgerMenu:document.querySelector(".burger-overlay"),burgerMenuList:document.querySelector(".mobile-menu-list")};Y.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function U(e=1){try{const{data:t}=await Y.get("artists",{params:{limit:8,page:e}});return t}catch(t){throw console.error("Error fetching artists:",t.message),t}}//! ============================================================================
const z=async e=>(await Y.get(`artists/${e}/albums`)).data;async function X(){try{return(await Y.get("feedbacks",{params:{limit:10,page:1}})).data.data}catch(e){console.log("Error fetching feedbacks",e)}}//! ============================================================================
async function G(e){Y.post("feedbacks",{...e})}const x="/nine-friends-of-a-FullStack/assets/sprite-DoBGdM4A.svg";function k(e){document.getElementById(e).classList.remove("hidden")}function g(e){document.getElementById(e).classList.add("hidden")}const V="data:image/webp;base64,UklGRq4FAABXRUJQVlA4IKIFAADwlwCdASrQA1gCPpFImUylpCIiIPcQsBIJaW7hd2Eb86WjgAUVh6yRkFP5RjiaFlItNK6xYsWLFixYsWLFixYsWLFixYnL0mzgC/6C/hqTxbuP8yrCFlItNK6xYsWLFixYsWLFixYsWLFixXwUXg+5lWELKRaaV1ixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixOByw1a3BiegbgxPQNwYgX88NVpFppXWLFixYsWLFixYsWLFixYsWJyNH0mewwUIDBQoOGBl0M4LKRaaV1ixYsWLFixYsWLFixYsWLFic3tb05B8iKEAuwOryqIN/jMqwhZSLTSusWLFixYsWLFixYsWK+U40gOSbH4tvEaFsvg3NZT8aFlItNK6xYsWLFixYsWLFixYsWLE5vZooDOvIiwaoBDZ3smjhP+yWn40LKRaaV1ixYsWLFixYsWLFixYsWJzeaG+/UE53TMQadzRqgQfdTxXscJvzKQLHcOFt1PxoWUi00rrFixYsWLFixYsWLFixYsTm0M7gcc/O55K5MAQZ9agwGKvGDKV1ixYsWLFixYsWLFixYsWLFixYr5Ry/WcHun/1bzE9A3BiefI4gEYMpXWLFixYsWLFixYsWLFixYsWLFivhW/DLtlTv+aOFWzgIDsHgEHNrFixYsWLFixYsWLFixYsWLFixYsV8r3Mr9GebAbbmVYQspFppXWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFbx92LFixYsWLFixYsWLFixYsWLFixYsWLFixXzBtlm8NhZqxYsWLFixYsWLFixYsWLFixYsWLFixYsV8IrAc9DOmFtBFb9qPOLFixYsWLFixYsWLFixYsWLFixYsWLFixOER2qiQPAAA/v6z58QXq0TQrPiFrGBaKA4oM4ndvpoEUMDQZt8oy/psIAQbJwCUMESAAAAAAAAAAAAAAAAAAAAAAAAJVCgyGXFbr7zAD/yCfTYwAAAA4/yHwtNboAdCAj/HVw+7DM+qBe6/0/qW0SazPALYPif5LKhzf/VPVGBK6m/e1A9rUIgLF4QsE+sUABvL76pApo4EZf8n7Ogpx26gAAAAAAAAAAAAAAAAAAAAAAAAfy4bk4BwLJZ0Qh5Iw4h+HuPJHYAhLRas4aUR0hziLCmQAhn1f46dUTBsdaAAAA==";async function _(e){try{const t=await U(e);k("artists__loader");const s=t.artists.map(i=>`
          <li class="artists__item">
            <img class="artists__image" src="${i.strArtistThumb}" alt="${i.strArtist}" loading="lazy" onerror="this.onerror=null;this.src='${V}';">
            <ul class="artists__genre-list">
              ${i.genres.map(r=>`<li class="artists__genre-item">${r}</li>`).join("")}
            </ul>
            <h3 class="artists__title-name">${i.strArtist}</h3>
            <p class="artists__text-biography">${i.strBiographyEN}</p>

            <button class="artists__more-btn js-artist-more-btn" data-artists-id="${i._id}">
              Learn More 
              <svg class="artists-more__caret">
                <use href='${x}#icon-caret-right'></use>
              </svg>
            </button>
          </li>
        `).join("");return l.artistsList.innerHTML=s,g("artists__loader"),t}catch(t){g("artists__loader"),console.error("Error in createArtistsList:",t)}}const S=document.getElementById("pagination");let T=null;async function J(){const e=await _(1);T=new H(S,{totalItems:e.totalArtists,itemsPerPage:e.limit,visiblePages:5,centerAlign:!0,template:{page:'<a href="#" class="custom-page-btn">{{page}}</a>',currentPage:'<strong class="custom-current">{{page}}</strong>',moveButton:'<a href="#" class="custom-move-btn tui-{{type}}" aria-label="move button"><span class="icon-{{type}}"></span></a>',disabledMoveButton:'<span class="custom-move-btn disabled tui-{{type}}"><span class="icon-{{type}}"></span></span>',moreButton:'<a href="#" class="custom-ellip">...</a>'}});const t={first:'<svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M18 6v12l-8-6 8-6zM6 6h2v12H6V6z"/></svg>',prev:`<svg class="artists__pagination-icon"><use href="${x}#icon-left-arrow"></use></svg>`,next:`<svg class="artists__pagination-icon"><use href="${x}#icon-right-arrow"></use></svg>`,last:'<svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M6 6v12l8-6-8-6zM18 6h-2v12h2V6z"/></svg>'};function s(){["first","prev","next","last"].forEach(i=>{const r=S.querySelector(`.tui-${i} .icon-${i}`);r&&(r.innerHTML=t[i])})}s(),T.on("afterMove",async i=>{const r=i.page;k("artists__loader"),await _(r),s()})}J();const Z="data:image/webp;base64,UklGRiYBAABXRUJQVlA4WAoAAAAQAAAAEwAAEwAAQUxQSHkAAAABcFZba9h8EpCAhEqIhEiIhEmIgyEhDjYHq4NKQEIkfD8gySRExARgrYpz9SlnjXydOfkcFZIsJyP8dkSvyrQVDcMnT/3t/KOrn7lCPie3AEDfM+S207GsO201dmz17PhCGe9voGSVpBegOcmWGWcXxE72TE2xVFMAAFZQOCCGAAAAUAUAnQEqFAAUAD6RQpxKJaOioagIALASCWYAnTM0NXCB8u7UGgA547TAPQAAhVrcosEAAP7sJhnuufc6qD3M9Rv/4lPWA8Hj7cu56lJZxmNFw7UResDLdXffb/TfqtA8UiXXwmWMY76ZdvwXm69fq2W3y5zurzjF+PRR4MRmq++XPFwAAAA=",K="data:image/webp;base64,UklGRsYAAABXRUJQVlA4WAoAAAAQAAAAEwAAEwAAQUxQSHkAAAABcFZba9h8EpCAhEqIhEiIhEmIgyEhDjYHq4NKQEIkfD8gySRExARgrYpz9SlnjXydOfkcFZIsJyP8dkSvyrQVDcMnT/3t/KOrn7lCPie3AEDfM+S207GsO201dmz17PhCGe9voGSVpBegOcmWGWcXxE72TE2xVFMAAFZQOCAmAAAA0AIAnQEqFAAUAD6RRJ1KpaOioagIALASCWkAAD2joAD++E0AAAA=",ee="data:image/webp;base64,UklGRmQBAABXRUJQVlA4WAoAAAAQAAAAHgAAHAAAQUxQSLAAAAABgBDbbt1IEMzAYZAwSBkEgiEYgiAIgiEEgiEEgiEYwmt3HX0YRMQEkFHAFHkASBENAAdsADCTX/mH4jcW3a1gfXr1F3Ha8TqzKp+lcmt9QPv0JlyvM1NFbLmDZB8hI9M2Ap5MROl2a7RmJ6Z39piFtNc0jZ30zcRk7CaxTNMwHLAnXXW4dLeD6OZq1o3n6lEdWEoioq0tkDTlX//Quox/p6YCs5KWAVyaJJJIvwnTElZQOCCOAAAAkAQAnQEqHwAdAD6ROpdHpaMiITAIALASCWoAsSVBUn4A84BvIgJD7epsJWcAAP7wCT/+Of/8aL//pZE5TqYlwjfqfX8oJyU7X+09rmDZpzgV4A5N2UXiudfofy1f8G6Wn+ztDPPZ+8Hd2JHvWJCUNAmZdZhaElMtS0q/0LfmY+wqNjvFTVZepP/Fr/AAAA==",te="data:image/webp;base64,UklGRhABAABXRUJQVlA4WAoAAAAQAAAAHwAAHAAAQUxQSLIAAAABgFDbVhDrRngNpMHQABsYgQhGeBGMQAQjEMEILwIR7sz/yIMGETEBcB7NBEsrqUsiySYrCknmBYH/64LcYZpnvWtaZr/JJHleeI1JOrJe5X4aB63eRc+cEhCMSysiFwNljQLQBS3j/znNPuh/bM6z4T3YjCIYDY9P4YyuBm9yUTyXL3mqTz30V0ea0GRMX+64W49prHZsB4BsnXOskWyKfij/6pCQvDcMRvPgKDucuWw9VlA4IDgAAABQAwCdASogAB0APpE6mEelo6KhMAgAsBIJaQAAcby+xpOvAAD+77j//th//7XY//7V4j/huAAAAA==";async function se(){let e=[];try{k("feedbacks-loader");try{const t=await X();t&&Array.isArray(t)&&(e=t)}catch{console.log("API not available, trying localStorage");const s=localStorage.getItem("feedbacks");s&&(e=JSON.parse(s))}if(e.length===0){g("feedbacks-loader"),l.swiperWrapper.innerHTML="<p>Ще немає відгуків. Будьте першим!</p>";return}re(e),ne(e.length),ae()}catch{g("feedbacks-loader"),W.error({message:"Помилка завантаження відгуків"});return}g("feedbacks-loader")}se();function re(e){const t=e.map(ie).join("");l.swiperWrapper.innerHTML=t}function ie({name:e,descr:t,rating:s}){return`<div class="swiper-slide">
        <div class="stars" data-raty data-score="${Math.round(s)}" data-read-only="true"></div>
        <p class="feedback-content">${t}</p>
        <p class="feedback-name">${e}</p>
        </div>`}function ae(){document.querySelectorAll("[data-raty]").forEach(e=>{new I(e,{starOn:Z,starOff:K,score:parseInt(e.dataset.score,10),readOnly:!0}).init()})}function ne(e){if(e<=0)return;const t=0,s=e,i=Math.floor(e/2),r=new P(".mySwiper",{modules:[R,N],pagination:{el:".swiper-pagination",type:"custom",renderCustom:function(a,n,F){let u;return n-1===t?u=t:n===s?u=s:u=i,`
                    <span class="swiper-pagination-bullet${u===t?" active":""}" data-i="${t}"></span>
                    <span class="swiper-pagination-bullet${u===i?" active":""}" data-i="${i}"></span>
                    <span class="swiper-pagination-bullet${u===s?" active":""}" data-i="${s}"></span>
                    `}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});l.swiperBtnPrev&&l.swiperBtnPrev.classList.remove("visually-hidden"),l.swiperBtnNext&&l.swiperBtnNext.classList.remove("visually-hidden"),g("feedbacks-loader"),r.pagination&&r.pagination.el&&r.pagination.el.addEventListener("click",a=>{if(!a.target.classList.contains("swiper-pagination-bullet"))return;const n=parseInt(a.target.dataset.i,10);r.slideTo(n)})}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".js-feedback-modal"),t=e==null?void 0:e.querySelector(".js-feedback-modal-inner"),s=e==null?void 0:e.querySelector(".js-feedback-modal-loader");if(!e||!t){console.warn("[feedback-modal] modal not found in DOM");return}function i(){return`
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
  `}function r(){const o=e.querySelector("[data-raty]");o&&(o.innerHTML="",new I(o,{starOn:ee,starOff:te,score:0,readOnly:!1,click:function(m){const A=e.querySelector('[data-error="rating"]');A&&(A.textContent="",A.style.display="none");const d=e.querySelector(".form-field-star");d&&d.classList.remove("error")}}).init())}document.addEventListener("click",o=>{if(o.target.closest("[data-feedback-modal-open]")){o.preventDefault(),F();return}if(o.target.closest("[data-feedback-modal-close]")){o.preventDefault(),u();return}if(o.target===e){u();return}}),document.addEventListener("keydown",o=>{o.key==="Escape"&&!e.classList.contains("is-hidden")&&u()});function a(){const o=e.querySelector(".js-feedback-form");o&&(o.removeEventListener("submit",n),o.addEventListener("submit",n))}async function n(o){var B;o.preventDefault(),document.activeElement&&document.activeElement.type==="submit"&&document.activeElement.blur();const m=o.currentTarget,A=new FormData(m),d={name:(A.get("name")||"").trim(),rating:parseInt(((B=e.querySelector('[data-raty] input[name="score"]'))==null?void 0:B.value)||0,10),descr:(A.get("descr")||"").trim()};e.querySelectorAll(".error-message").forEach(c=>{c.textContent="",c.style.display="none"}),e.querySelectorAll(".form-field-name, .form-field-message").forEach(c=>{c.classList.remove("error")}),e.querySelectorAll(".form-field-name, .form-field-message, .form-field-star").forEach(c=>{c.classList.remove("error")});const f={name:[],descr:[],rating:[]};(d.name.length<2||d.name.length>16)&&f.name.push("The name must be between 2 and 16 characters long"),(d.descr.length<10||d.descr.length>512)&&f.descr.push("The comment must contain between 10 and 512 characters"),d.rating<1&&f.rating.push("");const D=Object.values(f).some(c=>c.length>0);if(Object.keys(f).forEach(c=>{const p=e.querySelector(`[data-error="${c}"]`);if(p&&f[c].length>0){p.textContent=f[c].join(", "),p.style.display="block";let y;c==="name"?y=p.closest(".form-field-name"):c==="descr"?y=p.closest(".form-field-message"):c==="rating"&&(y=p.closest(".form-field-star")),y&&y.classList.add("error")}}),!D)try{await G(d),W.success({message:"Review has been added!",position:"bottomCenter",icon:"none",class:"iziToast-center-text"}),u()}catch{W.error({title:"Ошибка",message:"Не удалось сохранить отзыв. Попробуйте еще раз.",class:"iziToast-center-text"})}}function F(){if(!t.querySelector(".js-feedback-form"))t.innerHTML=i();else{e.querySelectorAll(".error-message").forEach(d=>{d.textContent="",d.style.display="none"}),e.querySelectorAll(".form-field-name, .form-field-message, .form-field-star").forEach(d=>{d.classList.remove("error")});const m=e.querySelector(".js-feedback-form");m&&m.reset();const A=e.querySelector("[data-raty]");A&&(A.innerHTML="")}e.classList.remove("is-hidden"),e.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden",s&&(s.style.display="none"),t.style.display="block",r(),a()}function u(){e.querySelectorAll(".error-message").forEach(m=>{m.textContent="",m.style.display="none"}),e.querySelectorAll(".form-field-name, .form-field-message, .form-field-star").forEach(m=>{m.classList.remove("error")}),document.activeElement&&e.contains(document.activeElement)&&document.activeElement.blur(),e.classList.add("is-hidden"),e.setAttribute("aria-hidden","true"),document.body.style.overflow=""}window.__openFeedbackModal=F});let q;//! ============================================================================
const oe=({intFormedYear:e,intDiedYear:t=""})=>{let s="—";const i=Number(e),r=Number(t);return i?t?r>=i&&(s=`${i}-${r}`):s=`${i}-present`:s="information missing",s},le=()=>window.matchMedia("(min-width: 1440px)").matches?5:window.matchMedia("(min-width: 768px)").matches?4:11,C=()=>{const e=document.querySelector(".about-artist__info-item--bio .about-artist__info-item-text");if(!e)return;e.dataset.fullText||(e.dataset.fullText=e.textContent.trim());const t=e.dataset.fullText;e.style.visibility="hidden";const s=parseFloat(getComputedStyle(e).lineHeight),i=le(),r=s*i;let a=t.split(" "),n=t;for(e.textContent=n;e.scrollHeight>r&&a.length>0;)a.pop(),n=a.join(" "),e.textContent=n+"...";e.style.maxHeight=`${r}px`,e.style.overflowY=e.scrollHeight>r?"auto":"hidden",e.style.visibility="visible"};function Q(){clearTimeout(q),q=setTimeout(C,150)}//! ============================================================================
function ce(e){if(e==null)return"0:00";const t=Math.floor(e/1e3),s=Math.floor(t/60),i=t%60;return`${s}:${i.toString().padStart(2,"0")}`}function de(e,t=!0){return e.reduce((s,i)=>{const r=i.tracks.filter(a=>{var n;return Number(a.intDuration)>0&&((n=a.strTrack)==null?void 0:n.trim())});return t&&r.length===0||s.push({...i,tracks:r}),s},[])}//! ============================================================================
function ue(e){if(typeof e!="string"||e.trim()==="")return!1;try{const t=new URL(e);return t.protocol==="http:"||t.protocol==="https:"}catch{return!1}}//! ============================================================================
function me(e){W.error({message:e,position:"topRight",class:"custom-error-toast",timeout:5e3,onOpening:(t,s)=>{const i=s.querySelector(".iziToast-body");if(i){const a=document.createElement("span");a.classList.add("iziToast-icon"),a.innerHTML=`
          <svg class="toast-error-icon" width="24" height="24">
            <use xlink:href="${x}#icon-toast-error"></use>
          </svg>
        `,i.prepend(a)}const r=s.querySelector(".iziToast-close");r&&(r.innerHTML=`
          <svg class="toast-close-icon" width="16" height="16">
            <use xlink:href="${x}#icon-toast-close"></use>
          </svg>
        `)}})}const h=l.artistModalElems;//! ============================================================================
async function Ae(e){Be(),we();try{const t=await z(e),{albumsList:s}=t;be(t);const i=de(s,!0);Fe(i),setTimeout(C,0)}catch(t){me(t.message)}finally{ke()}}//! ============================================================================
const fe=e=>{const{strArtist:t,strArtistThumb:s,intFormedYear:i,intDiedYear:r="",strGender:a,intMembers:n,strCountry:F,strBiographyEN:u,genres:o}=e,m=oe({intFormedYear:i,intDiedYear:r}),A=n&&n>1,M=pe([{title:"Years active",key:"activeYears",value:m},{title:"Sex",key:"strGender",value:a,isBand:A},{title:"Members",key:"intMembers",value:n,isBand:A},{title:"Country",key:"strCountry",value:F},{title:"Biography",key:"strBiographyEN",value:u}]),f=xe(o);return`<section class="about-artist js-about-artist">
                <h2 class="about-artist__title">${t}</h2>
                <div class="about-artist__content">
                    <img
                    src="${s}"
                    class="about-artist__image"
                    alt="${t}"
                    />
                    <ul class="about-artist__info-list">
                        ${M}
                        <li class="about-artist__info-item--genres">
                          <ul class="about-artist__music-genres">
                             ${f}
                          </ul>
                        </li>
                    </ul>
                </div>
            </section>`};function Le(e){const{key:t,value:s,title:i,isBand:r=""}=e;if(t==="strGender"&&r||t==="intMembers"&&!r)return"";const n=`<li class="${t==="strBiographyEN"?"about-artist__info-item about-artist__info-item--bio":"about-artist__info-item"}">
                           <b class="about-artist__info-item-title">${i}</b>
                           <p class="about-artist__info-item-text">${s}</p>
                        </li>`;return s?n:""}function pe(e){return e.map(Le).join(`
`)}//! ============================================================================
const ge=e=>`<li class="about-artist__music-genre">${e}</li>`;function xe(e){return(e==null?void 0:e.length)>0?e.map(ge).join(`
`):""}//! ============================================================================
const be=e=>{const t=fe(e);h.artistModalInnerEl.insertAdjacentHTML("afterbegin",t)};//! ============================================================================
const Fe=e=>{const t=ye(e);h.artistModalInnerEl.insertAdjacentHTML("beforeend",t)};function ye(e){return`<section class="artist-albums js-artist-modal-albums">
            <h2 class="artist-albums__title">Albums</h2>
            <ul class="artist-albums__list js-artist-albums">
              ${Ye(e)}
            </ul>
          </section>`}function Ye(e){return e.map(We).join(`
`)}function We(e){const{strAlbum:t="",tracks:s}=e,i=(s==null?void 0:s.length)>0?ve(s):"";return`<li class="artist-album">
            <h3 class="artist-album__title">${t}</h3>
            <div class="artist-album__tracks">
              <ul class="artist-tracks__header">
                <li class="artist-tracks__header-item header-track">Track</li>
                <li class="artist-tracks__header-item header-duration">Time</li>
                 <li class="artist-tracks__header-item header-link">Link</li>
              </ul>
              <ul class="artist-tracks__list">
                ${i}
              </ul>
            </div>
          </li>`}//! ============================================================================
function he(e){const{strTrack:t,intDuration:s,movie:i}=e,r=Ee(i),a=ce(s);return`<li class="artist-tracks__item">
            <span class="artist-tracks__item-name">${t}</span>
            <span class="artist-tracks__item-duration">${a}</span>
            ${r}
          </li>`}function ve(e){return e.map(he).join(`
`)}//! ============================================================================
function Ee(e){return ue(e)?`<a href="${e}" target="_blank" rel="noopener noreferrer" class="artist-tracks__item-link">
                          <svg class="artist-tracks__item-icon" width="21" height="15">
                            <use href="${x}#icon-Youtube"></use>
                          </svg>
                      </a>`:""}//! ============================================================================
const we=()=>{h.artistModalLoaderEl.classList.add("modal-loader-visible")},ke=()=>{h.artistModalLoaderEl.classList.remove("modal-loader-visible")},L=l.artistModalElems;let E=0;//! ============================================================================
const Me=e=>{const t=e.target.closest(".js-artist-more-btn");t&&Ae(t.dataset.artistsId)};//! ============================================================================
function Be(){E=window.scrollY,document.body.style.top=`-${E}px`,document.body.classList.add("scroll-lock"),L.artistModalEl.classList.add("artist-modal--is-open"),document.addEventListener("keydown",O),window.addEventListener("resize",Q),L.artistModalEl.addEventListener("click",$),L.closeArtistModalBtnEl.addEventListener("click",v),L.artistModalBodyEl.scrollTop=0}function v(){L.artistModalEl.classList.remove("artist-modal--is-open"),document.body.classList.remove("scroll-lock"),document.body.style.top="",window.scrollTo(0,E),L.artistModalInnerEl.innerHTML="",document.removeEventListener("keydown",O),window.removeEventListener("resize",Q),L.artistModalEl.removeEventListener("click",$),L.closeArtistModalBtnEl.removeEventListener("click",v)}//! ============================================================================
function O(e){e.key==="Escape"&&v()}//! ============================================================================
function $(e){e.target===L.artistModalEl&&v()}const{artistsList:_e}=l;//! ============================================================================
_e.addEventListener("click",Me);let w=0;l.burgerMenuOpenBtn.addEventListener("click",e=>{Se()});l.burgerMenuCloseBtn.addEventListener("click",e=>{b()});function j(e){if(e.target.classList=="nav-link-modal"){b();const t=document.querySelector(e.target);t&&t.scrollIntoView({behavior:"smooth"})}}function Se(){w=window.scrollY,document.body.style.top=`-${w}px`,document.body.classList.add("scroll-lock"),l.burgerMenu.classList.add("--open"),document.addEventListener("keydown",e=>{e.key==="Escape"&&b()}),l.burgerMenuList.addEventListener("click",e=>{j(e)}),l.burgerMenuCloseBtn.addEventListener("click",e=>{b()})}function b(){l.burgerMenu.classList.remove("--open"),document.removeEventListener("keydown",e=>{e.key==="Escape"&&b()}),l.burgerMenuList.removeEventListener("click",e=>{j(e)}),l.burgerMenuCloseBtn.removeEventListener("click",e=>{b()}),document.body.classList.remove("scroll-lock"),window.scrollTo(0,w)}
//# sourceMappingURL=index.js.map
