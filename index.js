import{a as k,P as O,i as h,R as x,S as U,N as Q,b as X}from"./assets/vendor-Bttng-cq.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();const m={exampele:document.querySelector(".exampele"),artistsList:document.querySelector(".artists__list"),artistsLoadButton:document.querySelector(".artists__load-btn"),swiperWrapper:document.querySelector(".swiper-wrapper"),swiperBtnPrev:document.querySelector(".swiper-button-prev"),swiperBtnNext:document.querySelector(".swiper-button-next"),artistModalElems:{artistModalEl:document.querySelector(".js-artist-modal"),closeArtistModalBtnEl:document.querySelector("[data-artist-modal-close]"),artistModalInnerEl:document.querySelector(".js-artist-modal-inner"),artistModalBodyEl:document.querySelector(".js-artist-modal-body"),artistModalLoaderEl:document.querySelector(".js-artist-modal-loader")}};k.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function z(t=1){try{const{data:e}=await k.get("artists",{params:{limit:8,page:t}});return e}catch(e){throw console.error("Error fetching artists:",e.message),e}}//! ============================================================================
const $=async t=>(await k.get(`artists/${t}/albums`)).data;async function K(){try{return(await k.get("feedbacks",{params:{limit:10,page:1}})).data.data}catch(t){console.log("Error fetching feedbacks",t)}}const v="/seven-friends-of-a-FullStack/assets/sprite-Ctfn21by.svg";function S(t){document.getElementById(t).classList.remove("hidden")}function g(t){document.getElementById(t).classList.add("hidden")}async function T(t){try{const e=await z(t);S("artists__loader");const s=e.artists.map(a=>`
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
                <use href='${v}#icon-caret-right'></use>
              </svg>
            </button>
          </li>
        `).join("");return m.artistsList.innerHTML=s,g("artists__loader"),e}catch(e){g("artists__loader"),console.error("Error in createArtistsList:",e)}}const P=document.getElementById("pagination");let R=null;async function Y(){const t=await T(1);R=new O(P,{totalItems:t.totalArtists,itemsPerPage:t.limit,visiblePages:5,centerAlign:!0,template:{page:'<a href="#" class="custom-page-btn">{{page}}</a>',currentPage:'<strong class="custom-current">{{page}}</strong>',moveButton:'<a href="#" class="custom-move-btn tui-{{type}}"><span class="icon-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="custom-move-btn disabled custom-{{type}}"><span class="icon-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="custom-ellip">...</a>'}}),R.on("afterMove",async e=>{const s=e.page;S("artists__loader"),await T(s)})}Y();const F="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF2SURBVHgBpZQ/TsMwFMa/5/6Zww0CF6BsiIXAxkRvAJwgrYRQt7Zb1Q5Nb5AbUDYmkg7MHIEcgRlRm+eSIOePikk+KYr9bP9iv3zPgIUG3tLVj81cYQPrkog6JN647TQGdgCPXy4BThu4bQwkEuPfySRuGgHvvaWnd2eEemmsHhAVRyS0xvsWkNlJk+5w3hzJO2uReKxapJS8U0DyxU8QD5MckI8QCqJzbu5gqC2VQGHd5kQzLJenmiKXz9sXQskL7iVorkSzxIxz8KnkCftjjfraaIZm5X7Kw+VqwnkY/4ekFFaL2B9k/ZY5+Pr+HJ8dXR3wV05hI4Upw0ZmqORDkjKG7e4gk2KsBGT/9WGv3p9AttExLMV1fr0XmN55vYq1G66Mp4q4W7zScsBuGbbz1jzyvUXk93XJoeDZTiFFOaD6ufu0Ptj109RbcTa+iIchww/1WBajQpW1zQ57KNgq/ZbBLMoXvan5iz8Z8R2whRjwmtAc+wa4Q3bUdA0IrQAAAABJRU5ErkJggg==",D="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADjSURBVHgBrZQNDYMwEIWvU4CEOtgcjCkYEpiTSpiEOQAHw8EkUAeTcHsXSgKM/kD5khcIbT9KW44oAWbWEjoCJ+uRL1LE+p8oToloRGQ15eJmN/KhHCAo+Z+S9oLBrxXhOzRGLQSyTmM00njGPRArUUrZmVBmget1ItqLRVoR9m42R2Dl2NycPVvmXMPaIQ3vp+O1Q4+HhrfzDM5bOmyQmeX4tV+vo23rFhVWlM4lRXimdO7BVh5KlW8XW09bERJWi849T4oB7mueVx+hDgnHHZZianxv5/nxMhT5ZJFqiuDr+wPMSqqKNMf6xQAAAABJRU5ErkJggg==",V="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAdCAYAAABSZrcyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJhSURBVHgBxVexbhNBEJ1ZJ4EyfAHrL4gbChShrGmiVAlfgNNRoNgRckIXu0DCSGBfREOF/QfQuSKXAkRHKKk4/uDqoNzw9hKj47i7eM/GPMna3dn1zszuzpu5CpXEgRn016tb47t6iz4F41MqAaYSaJt+jVl9mYzPJbo18PdDcoSiUuBmcrRCqkkl4Ox5y/T1CqvvSZkQhT8lqrp67+w5vNxIy+DBKuTb5IgSxy6dTClJg/6l8gPjPSRmnTXHzKZdP94gBzgpFy72jiXaIQdM/eAO68drONqzojX24UVcqb388PgHTav8yf3Xt5VEmkW0fTwS/0RfrdHMhD5rmhIisZH25Qcctxza9oLtmGGgCqyB3DZeE5sPaNEQaigmMfRfIDUFmuygF9BiESyrpYHqnex9xX3XF2WACJ0tc8U8s3c+EYI2wVL8FgHrFC4uwIMe9vzW7u9xegGI5AjSDs0bQp0XfrObFFXSaz4iN68jR8MAQ/NBCMWPoNhLT+SSzGHd20a8D9FdpfKwcb1j31XWZC699k6a73FH72gWCA3zFBcqt4hiZptJe+GpFSrHkdVoFlwTObnKbZ1Gs923hbYhTK7KVUbFUgY3OH+fXOUyJ85HhjPkqhz3ZSgfIWiyBVquWvKgy/TpvE9mnKfr8j8gMjgn6SYr1aeoaIX4SJgbWX/Jq+uXKNMitfa3jH2Wi+5zf99Pz0EWoNkFNftX1KyT80gkdr/TKZXH1cwE9ojBy3seXQNQ6AjNKJ0fVE68V7KEd/TmN0zcRPczjvjBK7/l9C1m88M9vTm6dIDHMOpN1rpfqTDVPDcRDIsAAAAASUVORK5CYII=",G="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAdCAYAAADLnm6HAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFWSURBVHgBxZaBUYQwEEV/rgHpQDoAKxArwA4ogRLODiwBO9AObqzg7AA7wA6+GwkKCASSI/dm/pAAw26W7GYBR0jmokZUiyKERoye+McRIRGDKYc0rlE4wI1yNNfGc4RAVhpzmhNCIIYKznOPvTG7fo5n7Ill9V6bcY3xSHSmnU1RUN3H5ZKg3c1acW/czbt7a/g0+jIaj6GUeu9WFlv+6178ZI2SQSrXM66AREEdRB8yfkF4ngYzicSRYdCZUky6JA9K7kstShbjol/gPptSp/At1sDLZ0bFrQXKOLGm8Nhw7xX4/9zfSmOzYesHbuCHLt+RjwOP8CfxcSCFPxk8HMhwLQd4ue4mXdoHSxHIsMyb6E70AHPEztAd9dvgsO/vU4uyifcLzhev0sWBZpzTtBQVtsWrmnBgW8fMtv3q88q1dRy/Bax2dsB8JDeryeCI+S3VkvPfyio3mcKoLg8AAAAASUVORK5CYII=";async function W(){let t=[];try{S("feedbacks-loader");try{const e=await K();e&&Array.isArray(e)&&(t=e)}catch{console.log("API not available, trying localStorage");const s=localStorage.getItem("feedbacks");s&&(t=JSON.parse(s))}if(t.length===0){g("feedbacks-loader"),m.swiperWrapper.innerHTML="<p>Ще немає відгуків. Будьте першим!</p>";return}J(t),et(t.length),tt()}catch{g("feedbacks-loader"),h.error({message:"Помилка завантаження відгуків"});return}g("feedbacks-loader")}W();function J(t){const e=t.map(Z).join("");m.swiperWrapper.innerHTML=e}function Z({name:t,descr:e,rating:s}){return`<div class="swiper-slide">
        <div class="stars" data-raty data-score="${Math.round(s)}" data-read-only="true"></div>
        <p class="feedback-content">${e}</p>
        <p class="feedback-name">${t}</p>
        </div>`}function tt(){document.querySelectorAll("[data-raty]").forEach(t=>{new x(t,{starOn:F,starOff:D,score:parseInt(t.dataset.score,10),readOnly:!0}).init()})}function et(t){if(t<=0)return;const e=0,s=t-1,a=Math.floor(t/2),r=new U(".mySwiper",{modules:[Q,X],pagination:{el:".swiper-pagination",type:"custom",renderCustom:function(n,i,b){let c;return i===e?c=e:i===s?c=s:c=a,`
                    <span class="swiper-pagination-bullet${c===e?" active":""}" data-i="${e}"></span>
                    <span class="swiper-pagination-bullet${c===a?" active":""}" data-i="${a}"></span>
                    <span class="swiper-pagination-bullet${c===s?" active":""}" data-i="${s}"></span>
                    `}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});m.swiperBtnPrev&&m.swiperBtnPrev.classList.remove("visually-hidden"),m.swiperBtnNext&&m.swiperBtnNext.classList.remove("visually-hidden"),g("feedbacks-loader"),r.pagination&&r.pagination.el&&r.pagination.el.addEventListener("click",n=>{if(!n.target.classList.contains("swiper-pagination-bullet"))return;const i=parseInt(n.target.dataset.i,10);r.slideTo(i)})}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".js-feedback-modal"),e=t==null?void 0:t.querySelector(".js-feedback-modal-inner"),s=t==null?void 0:t.querySelector(".js-feedback-modal-loader");if(!t||!e){console.warn("[feedback-modal] modal not found in DOM");return}function a(){return`
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
        </div>

        <div class="form-actions">
          <button type="submit" class="btn btn--primary">Submit</button>
        </div>
      </div>
    </form>
  `}function r(){const o=t.querySelector("[data-raty]");o&&(o.innerHTML="",new x(o,{starOn:V,starOff:G,score:0,readOnly:!1}).init())}document.addEventListener("click",o=>{if(o.target.closest("[data-feedback-modal-open]")){o.preventDefault(),b();return}if(o.target.closest("[data-feedback-modal-close]")){o.preventDefault(),c();return}if(o.target===t){c();return}}),document.addEventListener("keydown",o=>{o.key==="Escape"&&!t.classList.contains("is-hidden")&&c()});function n(){const o=t.querySelector(".js-feedback-form");o&&(o.removeEventListener("submit",i),o.addEventListener("submit",i))}async function i(o){var B;o.preventDefault(),document.activeElement&&document.activeElement.type==="submit"&&document.activeElement.blur();const d=o.currentTarget,A=new FormData(d),u={name:(A.get("name")||"").trim(),rating:parseInt(((B=t.querySelector('[data-raty] input[name="score"]'))==null?void 0:B.value)||0,10),descr:(A.get("descr")||"").trim()};t.querySelectorAll(".error-message").forEach(l=>{l.textContent="",l.style.display="none"}),t.querySelectorAll(".form-field-name, .form-field-message").forEach(l=>{l.classList.remove("error")});const p={name:[],descr:[]};(u.name.length<2||u.name.length>16)&&p.name.push("The name must be between 2 and 16 characters long"),(u.descr.length<10||u.descr.length>512)&&p.descr.push("The comment must contain between 10 and 512 characters");const H=Object.values(p).some(l=>l.length>0);if(Object.keys(p).forEach(l=>{const y=t.querySelector(`[data-error="${l}"]`);if(y&&p[l].length>0){y.textContent=p[l].join(", "),y.style.display="block";const _=y.closest(l==="name"?".form-field-name":".form-field-message");_&&_.classList.add("error")}}),!H)try{const l=JSON.parse(localStorage.getItem("feedbacks")||"[]");l.push(u),localStorage.setItem("feedbacks",JSON.stringify(l)),h.success({title:"Success",message:"Your review has been successfully added!"}),c()}catch{h.error({title:"Ошибка",message:"Не удалось сохранить отзыв. Попробуйте еще раз."})}}function b(){if(!e.querySelector(".js-feedback-form"))e.innerHTML=a();else{t.querySelectorAll(".error-message").forEach(u=>{u.textContent="",u.style.display="none"}),t.querySelectorAll(".form-field-name, .form-field-message").forEach(u=>{u.classList.remove("error")});const d=t.querySelector(".js-feedback-form");d&&d.reset();const A=t.querySelector("[data-raty]");A&&(A.innerHTML="")}t.classList.remove("is-hidden"),t.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden",s&&(s.style.display="none"),e.style.display="block",r(),n()}function c(){t.querySelectorAll(".error-message").forEach(d=>{d.textContent="",d.style.display="none"}),t.querySelectorAll(".form-field-name, .form-field-message").forEach(d=>{d.classList.remove("error")}),document.activeElement&&t.contains(document.activeElement)&&document.activeElement.blur(),t.classList.add("is-hidden"),t.setAttribute("aria-hidden","true"),document.body.style.overflow=""}window.__openFeedbackModal=b});let I;//! ============================================================================
const st=({intFormedYear:t,intDiedYear:e=""})=>{let s="—";const a=Number(t),r=Number(e);return a?e?r>=a&&(s=`${a}-${r}`):s=`${a}-present`:s="information missing",s},rt=()=>window.matchMedia("(min-width: 1440px)").matches?5:window.matchMedia("(min-width: 768px)").matches?4:11,j=()=>{const t=document.querySelector(".about-artist__info-item--bio .about-artist__info-item-text");if(!t)return;t.dataset.fullText||(t.dataset.fullText=t.textContent.trim());const e=t.dataset.fullText;t.style.visibility="hidden";const s=parseFloat(getComputedStyle(t).lineHeight),a=rt(),r=s*a;let n=e.split(" "),i=e;for(t.textContent=i;t.scrollHeight>r&&n.length>0;)n.pop(),i=n.join(" "),t.textContent=i+"...";t.style.maxHeight=`${r}px`,t.style.overflowY=t.scrollHeight>r?"auto":"hidden",t.style.visibility="visible"};function C(){clearTimeout(I),I=setTimeout(j,150)}//! ============================================================================
function at(t){if(t==null)return"0:00";const e=Math.floor(t/1e3),s=Math.floor(e/60),a=e%60;return`${s}:${a.toString().padStart(2,"0")}`}function nt(t,e=!0){return t.reduce((s,a)=>{const r=a.tracks.filter(n=>{var i;return Number(n.intDuration)>0&&((i=n.strTrack)==null?void 0:i.trim())});return e&&r.length===0||s.push({...a,tracks:r}),s},[])}//! ============================================================================
function it(t){if(typeof t!="string"||t.trim()==="")return!1;try{const e=new URL(t);return e.protocol==="http:"||e.protocol==="https:"}catch{return!1}}//! ============================================================================
function ot(t){h.error({message:t,position:"topRight",class:"custom-error-toast",timeout:5e3,onOpening:(e,s)=>{const a=s.querySelector(".iziToast-body");if(a){const n=document.createElement("span");n.classList.add("iziToast-icon"),n.innerHTML=`
          <svg class="toast-error-icon" width="24" height="24">
            <use xlink:href="${v}#icon-toast-error"></use>
          </svg>
        `,a.prepend(n)}const r=s.querySelector(".iziToast-close");r&&(r.innerHTML=`
          <svg class="toast-close-icon" width="16" height="16">
            <use xlink:href="${v}#icon-toast-close"></use>
          </svg>
        `)}})}const w=m.artistModalElems;//! ============================================================================
async function lt(t){St(),wt();try{const e=await $(t),{albumsList:s}=e;At(e);const a=nt(s,!0);pt(a),setTimeout(j,0)}catch(e){ot(e.message)}finally{Et()}}//! ============================================================================
const ct=t=>{const{strArtist:e,strArtistThumb:s,intFormedYear:a,intDiedYear:r="",strGender:n,intMembers:i,strCountry:b,strBiographyEN:c,genres:o}=t,d=st({intFormedYear:a,intDiedYear:r}),A=i&&i>1,M=ut([{title:"Years active",key:"activeYears",value:d},{title:"Sex",key:"strGender",value:n,isBand:A},{title:"Members",key:"intMembers",value:i,isBand:A},{title:"Country",key:"strCountry",value:b},{title:"Biography",key:"strBiographyEN",value:c}]),p=ft(o);return`<section class="about-artist js-about-artist">
                <h2 class="about-artist__title">${e}</h2>
                <div class="about-artist__content">
                    <img
                    src="${s}"
                    class="about-artist__image"
                    alt="${e}"
                    />
                    <ul class="about-artist__info-list">
                        ${M}
                        <li class="about-artist__info-item--genres">
                          <ul class="about-artist__music-genres">
                             ${p}
                          </ul>
                        </li>
                    </ul>
                </div>
            </section>`};function dt(t){const{key:e,value:s,title:a,isBand:r=""}=t;if(e==="strGender"&&r||e==="intMembers"&&!r)return"";const i=`<li class="${e==="strBiographyEN"?"about-artist__info-item about-artist__info-item--bio":"about-artist__info-item"}">
                           <b class="about-artist__info-item-title">${a}</b>
                           <p class="about-artist__info-item-text">${s}</p>
                        </li>`;return s?i:""}function ut(t){return t.map(dt).join(`
`)}//! ============================================================================
const mt=t=>`<li class="about-artist__music-genre">${t}</li>`;function ft(t){return(t==null?void 0:t.length)>0?t.map(mt).join(`
`):""}//! ============================================================================
const At=t=>{const e=ct(t);w.artistModalInnerEl.insertAdjacentHTML("afterbegin",e)};//! ============================================================================
const pt=t=>{const e=gt(t);w.artistModalInnerEl.insertAdjacentHTML("beforeend",e)};function gt(t){return`<section class="artist-albums js-artist-modal-albums">
            <h2 class="artist-albums__title">Albums</h2>
            <ul class="artist-albums__list js-artist-albums">
              ${bt(t)}
            </ul>
          </section>`}function bt(t){return t.map(yt).join(`
`)}function yt(t){const{strAlbum:e="",tracks:s}=t,a=(s==null?void 0:s.length)>0?vt(s):"";return`<li class="artist-album">
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
function ht(t){const{strTrack:e,intDuration:s,movie:a}=t,r=kt(a),n=at(s);return`<li class="artist-tracks__item">
            <span class="artist-tracks__item-name">${e}</span>
            <span class="artist-tracks__item-duration">${n}</span>
            ${r}
          </li>`}function vt(t){return t.map(ht).join(`
`)}//! ============================================================================
function kt(t){return it(t)?`<a href="${t}" target="_blank" rel="noopener noreferrer" class="artist-tracks__item-link">
                          <svg class="artist-tracks__item-icon" width="21" height="15">
                            <use href="${v}#icon-Youtube"></use>
                          </svg>
                      </a>`:""}//! ============================================================================
const wt=()=>{w.artistModalLoaderEl.classList.add("modal-loader-visible")},Et=()=>{w.artistModalLoaderEl.classList.remove("modal-loader-visible")},f=m.artistModalElems;let L=0;//! ============================================================================
const Lt=t=>{const e=t.target.closest(".js-artist-more-btn");e&&lt(e.dataset.artistsId)};//! ============================================================================
function St(){L=window.scrollY,document.body.style.top=`-${L}px`,document.body.classList.add("scroll-lock"),f.artistModalEl.classList.add("artist-modal--is-open"),document.addEventListener("keydown",N),window.addEventListener("resize",C),f.artistModalEl.addEventListener("click",q),f.closeArtistModalBtnEl.addEventListener("click",E),f.artistModalBodyEl.scrollTop=0}function E(){f.artistModalEl.classList.remove("artist-modal--is-open"),document.body.classList.remove("scroll-lock"),document.body.style.top="",window.scrollTo(0,L),f.artistModalInnerEl.innerHTML="",document.removeEventListener("keydown",N),window.removeEventListener("resize",C),f.artistModalEl.removeEventListener("click",q),f.closeArtistModalBtnEl.removeEventListener("click",E)}//! ============================================================================
function N(t){t.key==="Escape"&&E()}//! ============================================================================
function q(t){t.target===f.artistModalEl&&E()}const{artistsList:Mt}=m;//! ============================================================================
Mt.addEventListener("click",Lt);
//# sourceMappingURL=index.js.map
