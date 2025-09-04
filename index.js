import{a as W,P as $,i as y,R as q,S as D,N as j,b as P}from"./assets/vendor-Bttng-cq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();const l={exampele:document.querySelector(".exampele"),artistsList:document.querySelector(".artists__list"),artistsLoadButton:document.querySelector(".artists__load-btn"),swiperWrapper:document.querySelector(".swiper-wrapper"),swiperBtnPrev:document.querySelector(".swiper-button-prev"),swiperBtnNext:document.querySelector(".swiper-button-next"),artistModalElems:{artistModalEl:document.querySelector(".js-artist-modal"),closeArtistModalBtnEl:document.querySelector("[data-artist-modal-close]"),artistModalInnerEl:document.querySelector(".js-artist-modal-inner"),artistModalBodyEl:document.querySelector(".js-artist-modal-body"),artistModalLoaderEl:document.querySelector(".js-artist-modal-loader")},burgerMenuOpenBtn:document.querySelector(".js-burger-menu-open"),burgerMenuCloseBtn:document.querySelector(".js-burger-menu-close"),burgerMenu:document.querySelector(".burger-overlay"),burgerMenuList:document.querySelector(".mobile-menu-list")};W.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function R(e=1){try{const{data:t}=await W.get("artists",{params:{limit:8,page:e}});return t}catch(t){throw console.error("Error fetching artists:",t.message),t}}//! ============================================================================
const H=async e=>(await W.get(`artists/${e}/albums`)).data;async function N(){try{return(await W.get("feedbacks",{params:{limit:10,page:1}})).data.data}catch(e){console.log("Error fetching feedbacks",e)}}//! ============================================================================
async function U(e){W.post("feedbacks",{...e})}const x="/nine-friends-of-a-FullStack/assets/sprite-DrPC8b3W.svg";function w(e){document.getElementById(e).classList.remove("hidden")}function g(e){document.getElementById(e).classList.add("hidden")}const X="data:image/webp;base64,UklGRq4FAABXRUJQVlA4IKIFAADwlwCdASrQA1gCPpFImUylpCIiIPcQsBIJaW7hd2Eb86WjgAUVh6yRkFP5RjiaFlItNK6xYsWLFixYsWLFixYsWLFixYnL0mzgC/6C/hqTxbuP8yrCFlItNK6xYsWLFixYsWLFixYsWLFixXwUXg+5lWELKRaaV1ixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixOByw1a3BiegbgxPQNwYgX88NVpFppXWLFixYsWLFixYsWLFixYsWJyNH0mewwUIDBQoOGBl0M4LKRaaV1ixYsWLFixYsWLFixYsWLFic3tb05B8iKEAuwOryqIN/jMqwhZSLTSusWLFixYsWLFixYsWK+U40gOSbH4tvEaFsvg3NZT8aFlItNK6xYsWLFixYsWLFixYsWLE5vZooDOvIiwaoBDZ3smjhP+yWn40LKRaaV1ixYsWLFixYsWLFixYsWJzeaG+/UE53TMQadzRqgQfdTxXscJvzKQLHcOFt1PxoWUi00rrFixYsWLFixYsWLFixYsTm0M7gcc/O55K5MAQZ9agwGKvGDKV1ixYsWLFixYsWLFixYsWLFixYr5Ry/WcHun/1bzE9A3BiefI4gEYMpXWLFixYsWLFixYsWLFixYsWLFivhW/DLtlTv+aOFWzgIDsHgEHNrFixYsWLFixYsWLFixYsWLFixYsV8r3Mr9GebAbbmVYQspFppXWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFbx92LFixYsWLFixYsWLFixYsWLFixYsWLFixXzBtlm8NhZqxYsWLFixYsWLFixYsWLFixYsWLFixYsV8IrAc9DOmFtBFb9qPOLFixYsWLFixYsWLFixYsWLFixYsWLFixOER2qiQPAAA/v6z58QXq0TQrPiFrGBaKA4oM4ndvpoEUMDQZt8oy/psIAQbJwCUMESAAAAAAAAAAAAAAAAAAAAAAAAJVCgyGXFbr7zAD/yCfTYwAAAA4/yHwtNboAdCAj/HVw+7DM+qBe6/0/qW0SazPALYPif5LKhzf/VPVGBK6m/e1A9rUIgLF4QsE+sUABvL76pApo4EZf8n7Ogpx26gAAAAAAAAAAAAAAAAAAAAAAAAfy4bk4BwLJZ0Qh5Iw4h+HuPJHYAhLRas4aUR0hziLCmQAhn1f46dUTBsdaAAAA==";async function _(e){try{const t=await R(e);w("artists__loader");const s=t.artists.map(i=>`
          <li class="artists__item">
            <img class="artists__image" src="${i.strArtistThumb}" alt="${i.strArtist}" loading="lazy" onerror="this.onerror=null;this.src='${X}';">
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
        `).join("");return l.artistsList.innerHTML=s,g("artists__loader"),t}catch(t){g("artists__loader"),console.error("Error in createArtistsList:",t)}}const S=document.getElementById("pagination");let T=null;async function z(){const e=await _(1);T=new $(S,{totalItems:e.totalArtists,itemsPerPage:e.limit,visiblePages:5,centerAlign:!0,template:{page:'<a href="#" class="custom-page-btn">{{page}}</a>',currentPage:'<strong class="custom-current">{{page}}</strong>',moveButton:'<a href="#" class="custom-move-btn tui-{{type}}" aria-label="move button"><span class="icon-{{type}}"></span></a>',disabledMoveButton:'<span class="custom-move-btn disabled tui-{{type}}"><span class="icon-{{type}}"></span></span>',moreButton:'<a href="#" class="custom-ellip">...</a>'}});const t={first:'<svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M18 6v12l-8-6 8-6zM6 6h2v12H6V6z"/></svg>',prev:`<svg class="artists__pagination-icon"><use href="${x}#icon-left-arrow"></use></svg>`,next:`<svg class="artists__pagination-icon"><use href="${x}#icon-right-arrow"></use></svg>`,last:'<svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M6 6v12l8-6-8-6zM18 6h-2v12h2V6z"/></svg>'};function s(){["first","prev","next","last"].forEach(i=>{const r=S.querySelector(`.tui-${i} .icon-${i}`);r&&(r.innerHTML=t[i])})}s(),T.on("afterMove",async i=>{const r=i.page;w("artists__loader"),await _(r),s();const a=l.artistsList.getBoundingClientRect().top+window.scrollY-100;window.scrollTo({top:a,behavior:"smooth"})})}z();const V="data:image/webp;base64,UklGRiYBAABXRUJQVlA4WAoAAAAQAAAAEwAAEwAAQUxQSHkAAAABcFZba9h8EpCAhEqIhEiIhEmIgyEhDjYHq4NKQEIkfD8gySRExARgrYpz9SlnjXydOfkcFZIsJyP8dkSvyrQVDcMnT/3t/KOrn7lCPie3AEDfM+S207GsO201dmz17PhCGe9voGSVpBegOcmWGWcXxE72TE2xVFMAAFZQOCCGAAAAUAUAnQEqFAAUAD6RQpxKJaOioagIALASCWYAnTM0NXCB8u7UGgA547TAPQAAhVrcosEAAP7sJhnuufc6qD3M9Rv/4lPWA8Hj7cu56lJZxmNFw7UResDLdXffb/TfqtA8UiXXwmWMY76ZdvwXm69fq2W3y5zurzjF+PRR4MRmq++XPFwAAAA=",G="data:image/webp;base64,UklGRsYAAABXRUJQVlA4WAoAAAAQAAAAEwAAEwAAQUxQSHkAAAABcFZba9h8EpCAhEqIhEiIhEmIgyEhDjYHq4NKQEIkfD8gySRExARgrYpz9SlnjXydOfkcFZIsJyP8dkSvyrQVDcMnT/3t/KOrn7lCPie3AEDfM+S207GsO201dmz17PhCGe9voGSVpBegOcmWGWcXxE72TE2xVFMAAFZQOCAmAAAA0AIAnQEqFAAUAD6RRJ1KpaOioagIALASCWkAAD2joAD++E0AAAA=",J="data:image/webp;base64,UklGRmQBAABXRUJQVlA4WAoAAAAQAAAAHgAAHAAAQUxQSLAAAAABgBDbbt1IEMzAYZAwSBkEgiEYgiAIgiEEgiEEgiEYwmt3HX0YRMQEkFHAFHkASBENAAdsADCTX/mH4jcW3a1gfXr1F3Ha8TqzKp+lcmt9QPv0JlyvM1NFbLmDZB8hI9M2Ap5MROl2a7RmJ6Z39piFtNc0jZ30zcRk7CaxTNMwHLAnXXW4dLeD6OZq1o3n6lEdWEoioq0tkDTlX//Quox/p6YCs5KWAVyaJJJIvwnTElZQOCCOAAAAkAQAnQEqHwAdAD6ROpdHpaMiITAIALASCWoAsSVBUn4A84BvIgJD7epsJWcAAP7wCT/+Of/8aL//pZE5TqYlwjfqfX8oJyU7X+09rmDZpzgV4A5N2UXiudfofy1f8G6Wn+ztDPPZ+8Hd2JHvWJCUNAmZdZhaElMtS0q/0LfmY+wqNjvFTVZepP/Fr/AAAA==",Z="data:image/webp;base64,UklGRhABAABXRUJQVlA4WAoAAAAQAAAAHwAAHAAAQUxQSLIAAAABgFDbVhDrRngNpMHQABsYgQhGeBGMQAQjEMEILwIR7sz/yIMGETEBcB7NBEsrqUsiySYrCknmBYH/64LcYZpnvWtaZr/JJHleeI1JOrJe5X4aB63eRc+cEhCMSysiFwNljQLQBS3j/znNPuh/bM6z4T3YjCIYDY9P4YyuBm9yUTyXL3mqTz30V0ea0GRMX+64W49prHZsB4BsnXOskWyKfij/6pCQvDcMRvPgKDucuWw9VlA4IDgAAABQAwCdASogAB0APpE6mEelo6KhMAgAsBIJaQAAcby+xpOvAAD+77j//th//7XY//7V4j/huAAAAA==";async function K(){let e=[];try{w("feedbacks-loader");try{const t=await N();t&&Array.isArray(t)&&(e=t)}catch{console.log("API not available, trying localStorage");const s=localStorage.getItem("feedbacks");s&&(e=JSON.parse(s))}if(e.length===0){g("feedbacks-loader"),l.swiperWrapper.innerHTML="<p>Ще немає відгуків. Будьте першим!</p>";return}ee(e),re(e.length),se()}catch{g("feedbacks-loader"),y.error({message:"Помилка завантаження відгуків"});return}g("feedbacks-loader")}K();function ee(e){const t=e.map(te).join("");l.swiperWrapper.innerHTML=t}function te({name:e,descr:t,rating:s}){return`<div class="swiper-slide">
        <div class="stars" data-raty data-score="${Math.round(s)}" data-read-only="true"></div>
        <p class="feedback-content">${t}</p>
        <p class="feedback-name">${e}</p>
        </div>`}function se(){document.querySelectorAll("[data-raty]").forEach(e=>{new q(e,{starOn:V,starOff:G,score:parseInt(e.dataset.score,10),readOnly:!0}).init()})}function re(e){if(e<=0)return;const t=0,s=e,i=Math.floor(e/2),r=new D(".mySwiper",{modules:[j,P],pagination:{el:".swiper-pagination",type:"custom",renderCustom:function(a,o,F){let u;return o-1===t?u=t:o===s?u=s:u=i,`
                    <span class="swiper-pagination-bullet${u===t?" active":""}" data-i="${t}"></span>
                    <span class="swiper-pagination-bullet${u===i?" active":""}" data-i="${i}"></span>
                    <span class="swiper-pagination-bullet${u===s?" active":""}" data-i="${s}"></span>
                    `}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});l.swiperBtnPrev&&l.swiperBtnPrev.classList.remove("visually-hidden"),l.swiperBtnNext&&l.swiperBtnNext.classList.remove("visually-hidden"),g("feedbacks-loader"),r.pagination&&r.pagination.el&&r.pagination.el.addEventListener("click",a=>{if(!a.target.classList.contains("swiper-pagination-bullet"))return;const o=parseInt(a.target.dataset.i,10);r.slideTo(o)})}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".js-feedback-modal"),t=e==null?void 0:e.querySelector(".js-feedback-modal-inner"),s=e==null?void 0:e.querySelector(".js-feedback-modal-loader");if(!e||!t){console.warn("[feedback-modal] modal not found in DOM");return}function i(){return`
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
  `}function r(){const n=e.querySelector("[data-raty]");n&&(n.innerHTML="",new q(n,{starOn:J,starOff:Z,score:0,readOnly:!1,click:function(m){const A=e.querySelector('[data-error="rating"]');A&&(A.textContent="",A.style.display="none");const d=e.querySelector(".form-field-star");d&&d.classList.remove("error")}}).init())}document.addEventListener("click",n=>{if(n.target.closest("[data-feedback-modal-open]")){n.preventDefault(),F();return}if(n.target.closest("[data-feedback-modal-close]")){n.preventDefault(),u();return}if(n.target===e){u();return}}),document.addEventListener("keydown",n=>{n.key==="Escape"&&!e.classList.contains("is-hidden")&&u()});function a(){const n=e.querySelector(".js-feedback-form");n&&(n.removeEventListener("submit",o),n.addEventListener("submit",o))}async function o(n){var B;n.preventDefault(),document.activeElement&&document.activeElement.type==="submit"&&document.activeElement.blur();const m=n.currentTarget,A=new FormData(m),d={name:(A.get("name")||"").trim(),rating:parseInt(((B=e.querySelector('[data-raty] input[name="score"]'))==null?void 0:B.value)||0,10),descr:(A.get("descr")||"").trim()};e.querySelectorAll(".error-message").forEach(c=>{c.textContent="",c.style.display="none"}),e.querySelectorAll(".form-field-name, .form-field-message").forEach(c=>{c.classList.remove("error")}),e.querySelectorAll(".form-field-name, .form-field-message, .form-field-star").forEach(c=>{c.classList.remove("error")});const f={name:[],descr:[],rating:[]};(d.name.length<2||d.name.length>16)&&f.name.push("The name must be between 2 and 16 characters long"),(d.descr.length<10||d.descr.length>512)&&f.descr.push("The comment must contain between 10 and 512 characters"),d.rating<1&&f.rating.push("");const O=Object.values(f).some(c=>c.length>0);if(Object.keys(f).forEach(c=>{const p=e.querySelector(`[data-error="${c}"]`);if(p&&f[c].length>0){p.textContent=f[c].join(", "),p.style.display="block";let Y;c==="name"?Y=p.closest(".form-field-name"):c==="descr"?Y=p.closest(".form-field-message"):c==="rating"&&(Y=p.closest(".form-field-star")),Y&&Y.classList.add("error")}}),!O)try{await U(d),y.success({message:"Review has been added!",position:"bottomCenter",icon:"none",class:"iziToast-center-text"}),u()}catch{y.error({title:"Ошибка",message:"Не удалось сохранить отзыв. Попробуйте еще раз.",class:"iziToast-center-text"})}}function F(){if(!t.querySelector(".js-feedback-form"))t.innerHTML=i();else{e.querySelectorAll(".error-message").forEach(d=>{d.textContent="",d.style.display="none"}),e.querySelectorAll(".form-field-name, .form-field-message, .form-field-star").forEach(d=>{d.classList.remove("error")});const m=e.querySelector(".js-feedback-form");m&&m.reset();const A=e.querySelector("[data-raty]");A&&(A.innerHTML="")}e.classList.remove("is-hidden"),e.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden",s&&(s.style.display="none"),t.style.display="block",r(),a()}function u(){e.querySelectorAll(".error-message").forEach(m=>{m.textContent="",m.style.display="none"}),e.querySelectorAll(".form-field-name, .form-field-message, .form-field-star").forEach(m=>{m.classList.remove("error")}),document.activeElement&&e.contains(document.activeElement)&&document.activeElement.blur(),e.classList.add("is-hidden"),e.setAttribute("aria-hidden","true"),document.body.style.overflow=""}window.__openFeedbackModal=F});//! ============================================================================
const ie=({intFormedYear:e,intDiedYear:t=""})=>{let s="—";const i=Number(e),r=Number(t);return i?t?r>=i&&(s=`${i}-${r}`):s=`${i}-present`:s="information missing",s};//! ============================================================================
function ae(e){if(e==null)return"0:00";const t=Math.floor(e/1e3),s=Math.floor(t/60),i=t%60;return`${s}:${i.toString().padStart(2,"0")}`}function ne(e,t=!0){return e.reduce((s,i)=>{const r=i.tracks.filter(a=>{var o;return Number(a.intDuration)>0&&((o=a.strTrack)==null?void 0:o.trim())});return t&&r.length===0||s.push({...i,tracks:r}),s},[])}//! ============================================================================
function oe(e){if(typeof e!="string"||e.trim()==="")return!1;try{const t=new URL(e);return t.protocol==="http:"||t.protocol==="https:"}catch{return!1}}//! ============================================================================
function le(e){y.error({message:e,position:"topRight",class:"custom-error-toast",timeout:5e3,onOpening:(t,s)=>{const i=s.querySelector(".iziToast-body");if(i){const a=document.createElement("span");a.classList.add("iziToast-icon"),a.innerHTML=`
          <svg class="toast-error-icon" width="24" height="24">
            <use xlink:href="${x}#icon-toast-error"></use>
          </svg>
        `,i.prepend(a)}const r=s.querySelector(".iziToast-close");r&&(r.innerHTML=`
          <svg class="toast-close-icon" width="16" height="16">
            <use xlink:href="${x}#icon-toast-close"></use>
          </svg>
        `)}})}const h=l.artistModalElems;//! ============================================================================
async function ce(e){Ee(),ye();try{const t=await H(e),{albumsList:s}=t;Le(t);const i=ne(s,!0);pe(i)}catch(t){le(t.message)}finally{he()}}//! ============================================================================
const de=e=>{const{strArtist:t,strArtistThumb:s,intFormedYear:i,intDiedYear:r="",strGender:a,intMembers:o,strCountry:F,strBiographyEN:u,genres:n}=e,m=ie({intFormedYear:i,intDiedYear:r}),A=o&&o>1,M=me([{title:"Years active",key:"activeYears",value:m},{title:"Sex",key:"strGender",value:a,isBand:A},{title:"Members",key:"intMembers",value:o,isBand:A},{title:"Country",key:"strCountry",value:F},{title:"Biography",key:"strBiographyEN",value:u}]),f=fe(n);return`<section class="about-artist js-about-artist">
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
            </section>`};function ue(e){const{key:t,value:s,title:i,isBand:r=""}=e;if(t==="strGender"&&r||t==="intMembers"&&!r)return"";const o=`<li class="${t==="strBiographyEN"?"about-artist__info-item about-artist__info-item--bio":"about-artist__info-item"}">
                           <b class="about-artist__info-item-title">${i}</b>
                           <p class="about-artist__info-item-text">${s}</p>
                        </li>`;return s?o:""}function me(e){return e.map(ue).join(`
`)}//! ============================================================================
const Ae=e=>`<li class="about-artist__music-genre">${e}</li>`;function fe(e){return(e==null?void 0:e.length)>0?e.map(Ae).join(`
`):""}//! ============================================================================
const Le=e=>{const t=de(e);h.artistModalInnerEl.insertAdjacentHTML("afterbegin",t)};//! ============================================================================
const pe=e=>{const t=ge(e);h.artistModalInnerEl.insertAdjacentHTML("beforeend",t)};function ge(e){return`<section class="artist-albums js-artist-modal-albums">
            <h2 class="artist-albums__title">Albums</h2>
            <ul class="artist-albums__list js-artist-albums">
              ${xe(e)}
            </ul>
          </section>`}function xe(e){return e.map(be).join(`
`)}function be(e){const{strAlbum:t="",tracks:s}=e,i=(s==null?void 0:s.length)>0?Ye(s):"";return`<li class="artist-album">
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
function Fe(e){const{strTrack:t,intDuration:s,movie:i}=e,r=We(i),a=ae(s);return`<li class="artist-tracks__item">
            <span class="artist-tracks__item-name">${t}</span>
            <span class="artist-tracks__item-duration">${a}</span>
            ${r}
          </li>`}function Ye(e){return e.map(Fe).join(`
`)}//! ============================================================================
function We(e){return oe(e)?`<a href="${e}" target="_blank" rel="noopener noreferrer" class="artist-tracks__item-link">
                          <svg class="artist-tracks__item-icon" width="21" height="15">
                            <use href="${x}#icon-Youtube"></use>
                          </svg>
                      </a>`:""}//! ============================================================================
const ye=()=>{h.artistModalLoaderEl.classList.add("modal-loader-visible")},he=()=>{h.artistModalLoaderEl.classList.remove("modal-loader-visible")},L=l.artistModalElems;let E=0;//! ============================================================================
const ve=e=>{const t=e.target.closest(".js-artist-more-btn");t&&ce(t.dataset.artistsId)};//! ============================================================================
function Ee(){E=window.scrollY,document.body.style.top=`-${E}px`,document.body.classList.add("scroll-lock"),L.artistModalEl.classList.add("artist-modal--is-open"),document.addEventListener("keydown",I),L.artistModalEl.addEventListener("click",Q),L.closeArtistModalBtnEl.addEventListener("click",v),L.artistModalBodyEl.scrollTop=0}function v(){L.artistModalEl.classList.remove("artist-modal--is-open"),document.body.classList.remove("scroll-lock"),document.body.style.top="",window.scrollTo(0,E),L.artistModalInnerEl.innerHTML="",document.removeEventListener("keydown",I),L.artistModalEl.removeEventListener("click",Q),L.closeArtistModalBtnEl.removeEventListener("click",v)}//! ============================================================================
function I(e){e.key==="Escape"&&v()}//! ============================================================================
function Q(e){e.target===L.artistModalEl&&v()}const{artistsList:ke}=l;//! ============================================================================
ke.addEventListener("click",ve);let k=0;l.burgerMenuOpenBtn.addEventListener("click",e=>{we()});l.burgerMenuCloseBtn.addEventListener("click",e=>{b()});function C(e){if(e.target.classList.contains("nav-link-modal")){b();const t=e.target.getAttribute("href"),s=document.querySelector(t);s&&s.scrollIntoView({behavior:"smooth"})}}function we(){k=window.scrollY,document.body.style.top=`-${k}px`,document.body.classList.add("scroll-lock"),l.burgerMenu.classList.add("--open"),document.addEventListener("keydown",e=>{e.key==="Escape"&&b()}),l.burgerMenuList.addEventListener("click",e=>{C(e)}),l.burgerMenuCloseBtn.addEventListener("click",e=>{b()})}function b(){l.burgerMenu.classList.remove("--open"),document.removeEventListener("keydown",e=>{e.key==="Escape"&&b()}),l.burgerMenuList.removeEventListener("click",e=>{C(e)}),l.burgerMenuCloseBtn.removeEventListener("click",e=>{b()}),document.body.classList.remove("scroll-lock"),window.scrollTo(0,k)}
//# sourceMappingURL=index.js.map
