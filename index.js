import{a as E,P as Q,i as w,R as j,S as X,N as P,b as Y}from"./assets/vendor-Bttng-cq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();const c={exampele:document.querySelector(".exampele"),artistsList:document.querySelector(".artists__list"),artistsLoadButton:document.querySelector(".artists__load-btn"),swiperWrapper:document.querySelector(".swiper-wrapper"),swiperBtnPrev:document.querySelector(".swiper-button-prev"),swiperBtnNext:document.querySelector(".swiper-button-next"),artistModalElems:{artistModalEl:document.querySelector(".js-artist-modal"),closeArtistModalBtnEl:document.querySelector("[data-artist-modal-close]"),artistModalInnerEl:document.querySelector(".js-artist-modal-inner"),artistModalBodyEl:document.querySelector(".js-artist-modal-body"),artistModalLoaderEl:document.querySelector(".js-artist-modal-loader")},burgerMenuOpenBtn:document.querySelector(".js-burger-menu-open"),burgerMenuCloseBtn:document.querySelector(".js-burger-menu-close"),burgerMenu:document.querySelector(".burger-overlay"),burgerMenuList:document.querySelector(".mobile-menu-list")};E.defaults.baseURL="https://sound-wave.b.goit.study/api/";async function K(e=1){try{const{data:t}=await E.get("artists",{params:{limit:8,page:e}});return t}catch(t){throw console.error("Error fetching artists:",t.message),t}}//! ============================================================================
const D=async e=>(await E.get(`artists/${e}/albums`)).data;async function F(){try{return(await E.get("feedbacks",{params:{limit:10,page:1}})).data.data}catch(e){console.log("Error fetching feedbacks",e)}}const y="/seven-friends-of-a-FullStack/assets/sprite-DoBGdM4A.svg";function _(e){document.getElementById(e).classList.remove("hidden")}function b(e){document.getElementById(e).classList.add("hidden")}async function R(e){try{const t=await K(e);_("artists__loader");const s=t.artists.map(a=>`
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
                <use href='${y}#icon-caret-right'></use>
              </svg>
            </button>
          </li>
        `).join("");return c.artistsList.innerHTML=s,b("artists__loader"),t}catch(t){b("artists__loader"),console.error("Error in createArtistsList:",t)}}const I=document.getElementById("pagination");let q=null;async function V(){const e=await R(1);q=new Q(I,{totalItems:e.totalArtists,itemsPerPage:e.limit,visiblePages:5,centerAlign:!0,template:{page:'<a href="#" class="custom-page-btn">{{page}}</a>',currentPage:'<strong class="custom-current">{{page}}</strong>',moveButton:'<a href="#" class="custom-move-btn tui-{{type}}"><span class="icon-{{type}}"></span></a>',disabledMoveButton:'<span class="custom-move-btn disabled tui-{{type}}"><span class="icon-{{type}}"></span></span>',moreButton:'<a href="#" class="custom-ellip">...</a>'}});const t={first:'<svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M18 6v12l-8-6 8-6zM6 6h2v12H6V6z"/></svg>',prev:`<svg class="artists__pagination-icon"><use href="${y}#icon-left-arrow"></use></svg>`,next:`<svg class="artists__pagination-icon"><use href="${y}#icon-right-arrow"></use></svg>`,last:'<svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M6 6v12l8-6-8-6zM18 6h-2v12h2V6z"/></svg>'};function s(){["first","prev","next","last"].forEach(a=>{const r=I.querySelector(`.tui-${a} .icon-${a}`);r&&(r.innerHTML=t[a])})}s(),q.on("afterMove",async a=>{const r=a.page;_("artists__loader"),await R(r),s()})}V();const G="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF2SURBVHgBpZQ/TsMwFMa/5/6Zww0CF6BsiIXAxkRvAJwgrYRQt7Zb1Q5Nb5AbUDYmkg7MHIEcgRlRm+eSIOePikk+KYr9bP9iv3zPgIUG3tLVj81cYQPrkog6JN647TQGdgCPXy4BThu4bQwkEuPfySRuGgHvvaWnd2eEemmsHhAVRyS0xvsWkNlJk+5w3hzJO2uReKxapJS8U0DyxU8QD5MckI8QCqJzbu5gqC2VQGHd5kQzLJenmiKXz9sXQskL7iVorkSzxIxz8KnkCftjjfraaIZm5X7Kw+VqwnkY/4ekFFaL2B9k/ZY5+Pr+HJ8dXR3wV05hI4Upw0ZmqORDkjKG7e4gk2KsBGT/9WGv3p9AttExLMV1fr0XmN55vYq1G66Mp4q4W7zScsBuGbbz1jzyvUXk93XJoeDZTiFFOaD6ufu0Ptj109RbcTa+iIchww/1WBajQpW1zQ57KNgq/ZbBLMoXvan5iz8Z8R2whRjwmtAc+wa4Q3bUdA0IrQAAAABJRU5ErkJggg==",W="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADjSURBVHgBrZQNDYMwEIWvU4CEOtgcjCkYEpiTSpiEOQAHw8EkUAeTcHsXSgKM/kD5khcIbT9KW44oAWbWEjoCJ+uRL1LE+p8oToloRGQ15eJmN/KhHCAo+Z+S9oLBrxXhOzRGLQSyTmM00njGPRArUUrZmVBmget1ItqLRVoR9m42R2Dl2NycPVvmXMPaIQ3vp+O1Q4+HhrfzDM5bOmyQmeX4tV+vo23rFhVWlM4lRXimdO7BVh5KlW8XW09bERJWi849T4oB7mueVx+hDgnHHZZianxv5/nxMhT5ZJFqiuDr+wPMSqqKNMf6xQAAAABJRU5ErkJggg==",J="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAdCAYAAABSZrcyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJhSURBVHgBxVexbhNBEJ1ZJ4EyfAHrL4gbChShrGmiVAlfgNNRoNgRckIXu0DCSGBfREOF/QfQuSKXAkRHKKk4/uDqoNzw9hKj47i7eM/GPMna3dn1zszuzpu5CpXEgRn016tb47t6iz4F41MqAaYSaJt+jVl9mYzPJbo18PdDcoSiUuBmcrRCqkkl4Ox5y/T1CqvvSZkQhT8lqrp67+w5vNxIy+DBKuTb5IgSxy6dTClJg/6l8gPjPSRmnTXHzKZdP94gBzgpFy72jiXaIQdM/eAO68drONqzojX24UVcqb388PgHTav8yf3Xt5VEmkW0fTwS/0RfrdHMhD5rmhIisZH25Qcctxza9oLtmGGgCqyB3DZeE5sPaNEQaigmMfRfIDUFmuygF9BiESyrpYHqnex9xX3XF2WACJ0tc8U8s3c+EYI2wVL8FgHrFC4uwIMe9vzW7u9xegGI5AjSDs0bQp0XfrObFFXSaz4iN68jR8MAQ/NBCMWPoNhLT+SSzGHd20a8D9FdpfKwcb1j31XWZC699k6a73FH72gWCA3zFBcqt4hiZptJe+GpFSrHkdVoFlwTObnKbZ1Gs923hbYhTK7KVUbFUgY3OH+fXOUyJ85HhjPkqhz3ZSgfIWiyBVquWvKgy/TpvE9mnKfr8j8gMjgn6SYr1aeoaIX4SJgbWX/Jq+uXKNMitfa3jH2Wi+5zf99Pz0EWoNkFNftX1KyT80gkdr/TKZXH1cwE9ojBy3seXQNQ6AjNKJ0fVE68V7KEd/TmN0zcRPczjvjBK7/l9C1m88M9vTm6dIDHMOpN1rpfqTDVPDcRDIsAAAAASUVORK5CYII=",Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAdCAYAAADLnm6HAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFWSURBVHgBxZaBUYQwEEV/rgHpQDoAKxArwA4ogRLODiwBO9AObqzg7AA7wA6+GwkKCASSI/dm/pAAw26W7GYBR0jmokZUiyKERoye+McRIRGDKYc0rlE4wI1yNNfGc4RAVhpzmhNCIIYKznOPvTG7fo5n7Ill9V6bcY3xSHSmnU1RUN3H5ZKg3c1acW/czbt7a/g0+jIaj6GUeu9WFlv+6178ZI2SQSrXM66AREEdRB8yfkF4ngYzicSRYdCZUky6JA9K7kstShbjol/gPptSp/At1sDLZ0bFrQXKOLGm8Nhw7xX4/9zfSmOzYesHbuCHLt+RjwOP8CfxcSCFPxk8HMhwLQd4ue4mXdoHSxHIsMyb6E70AHPEztAd9dvgsO/vU4uyifcLzhev0sWBZpzTtBQVtsWrmnBgW8fMtv3q88q1dRy/Bax2dsB8JDeryeCI+S3VkvPfyio3mcKoLg8AAAAASUVORK5CYII=";async function ee(){let e=[];try{_("feedbacks-loader");try{const t=await F();t&&Array.isArray(t)&&(e=t)}catch{console.log("API not available, trying localStorage");const s=localStorage.getItem("feedbacks");s&&(e=JSON.parse(s))}if(e.length===0){b("feedbacks-loader"),c.swiperWrapper.innerHTML="<p>Ще немає відгуків. Будьте першим!</p>";return}te(e),console.log(e),ae(e.length),re()}catch{b("feedbacks-loader"),w.error({message:"Помилка завантаження відгуків"});return}b("feedbacks-loader")}ee();function te(e){const t=e.map(se).join("");c.swiperWrapper.innerHTML=t}function se({name:e,descr:t,rating:s}){return`<div class="swiper-slide">
        <div class="stars" data-raty data-score="${Math.round(s)}" data-read-only="true"></div>
        <p class="feedback-content">${t}</p>
        <p class="feedback-name">${e}</p>
        </div>`}function re(){document.querySelectorAll("[data-raty]").forEach(e=>{new j(e,{starOn:G,starOff:W,score:parseInt(e.dataset.score,10),readOnly:!0}).init()})}function ae(e){if(e<=0)return;const t=0,s=e,a=Math.floor(e/2),r=new X(".mySwiper",{modules:[P,Y],pagination:{el:".swiper-pagination",type:"custom",renderCustom:function(n,o,v){let u;return o-1===t?u=t:o===s?u=s:u=a,`
                    <span class="swiper-pagination-bullet${u===t?" active":""}" data-i="${t}"></span>
                    <span class="swiper-pagination-bullet${u===a?" active":""}" data-i="${a}"></span>
                    <span class="swiper-pagination-bullet${u===s?" active":""}" data-i="${s}"></span>
                    `}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});c.swiperBtnPrev&&c.swiperBtnPrev.classList.remove("visually-hidden"),c.swiperBtnNext&&c.swiperBtnNext.classList.remove("visually-hidden"),b("feedbacks-loader"),r.pagination&&r.pagination.el&&r.pagination.el.addEventListener("click",n=>{if(!n.target.classList.contains("swiper-pagination-bullet"))return;const o=parseInt(n.target.dataset.i,10);r.slideTo(o)})}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".js-feedback-modal"),t=e==null?void 0:e.querySelector(".js-feedback-modal-inner"),s=e==null?void 0:e.querySelector(".js-feedback-modal-loader");if(!e||!t){console.warn("[feedback-modal] modal not found in DOM");return}function a(){return`
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
  `}function r(){const i=e.querySelector("[data-raty]");i&&(i.innerHTML="",new j(i,{starOn:J,starOff:Z,score:0,readOnly:!1,click:function(m){const f=e.querySelector('[data-error="rating"]');f&&(f.textContent="",f.style.display="none");const d=e.querySelector(".form-field-star");d&&d.classList.remove("error")}}).init())}document.addEventListener("click",i=>{if(i.target.closest("[data-feedback-modal-open]")){i.preventDefault(),v();return}if(i.target.closest("[data-feedback-modal-close]")){i.preventDefault(),u();return}if(i.target===e){u();return}}),document.addEventListener("keydown",i=>{i.key==="Escape"&&!e.classList.contains("is-hidden")&&u()});function n(){const i=e.querySelector(".js-feedback-form");i&&(i.removeEventListener("submit",o),i.addEventListener("submit",o))}async function o(i){var x;i.preventDefault(),document.activeElement&&document.activeElement.type==="submit"&&document.activeElement.blur();const m=i.currentTarget,f=new FormData(m),d={name:(f.get("name")||"").trim(),rating:parseInt(((x=e.querySelector('[data-raty] input[name="score"]'))==null?void 0:x.value)||0,10),descr:(f.get("descr")||"").trim()};e.querySelectorAll(".error-message").forEach(l=>{l.textContent="",l.style.display="none"}),e.querySelectorAll(".form-field-name, .form-field-message").forEach(l=>{l.classList.remove("error")}),modals.querySelectorAll(".form-field-name, .form-field-message, .form-field-star").forEach(l=>{l.classList.remove("error")});const p={name:[],descr:[],rating:[]};(d.name.length<2||d.name.length>16)&&p.name.push("The name must be between 2 and 16 characters long"),(d.descr.length<10||d.descr.length>512)&&p.descr.push("The comment must contain between 10 and 512 characters"),d.rating<1&&p.rating.push("");const $=Object.values(p).some(l=>l.length>0);if(Object.keys(p).forEach(l=>{const g=e.querySelector(`[data-error="${l}"]`);if(g&&p[l].length>0){g.textContent=p[l].join(", "),g.style.display="block";let k;l==="name"?k=g.closest(".form-field-name"):l==="descr"?k=g.closest(".form-field-message"):l==="rating"&&(k=g.closest(".form-field-star")),k&&k.classList.add("error")}}),!$)try{const l=JSON.parse(localStorage.getItem("feedbacks")||"[]");l.push(d),localStorage.setItem("feedbacks",JSON.stringify(l)),w.success({message:"Review has been added!",position:"bottomCenter",icon:"none",class:"iziToast-center-text"}),u()}catch{w.error({title:"Ошибка",message:"Не удалось сохранить отзыв. Попробуйте еще раз.",class:"iziToast-center-text"})}}function v(){if(!t.querySelector(".js-feedback-form"))t.innerHTML=a();else{e.querySelectorAll(".error-message").forEach(d=>{d.textContent="",d.style.display="none"}),e.querySelectorAll(".form-field-name, .form-field-message, .form-field-star").forEach(d=>{d.classList.remove("error")});const m=e.querySelector(".js-feedback-form");m&&m.reset();const f=e.querySelector("[data-raty]");f&&(f.innerHTML="")}e.classList.remove("is-hidden"),e.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden",s&&(s.style.display="none"),t.style.display="block",r(),n()}function u(){e.querySelectorAll(".error-message").forEach(m=>{m.textContent="",m.style.display="none"}),e.querySelectorAll(".form-field-name, .form-field-message, .form-field-star").forEach(m=>{m.classList.remove("error")}),document.activeElement&&e.contains(document.activeElement)&&document.activeElement.blur(),e.classList.add("is-hidden"),e.setAttribute("aria-hidden","true"),document.body.style.overflow=""}window.__openFeedbackModal=v});let C;//! ============================================================================
const ne=({intFormedYear:e,intDiedYear:t=""})=>{let s="—";const a=Number(e),r=Number(t);return a?t?r>=a&&(s=`${a}-${r}`):s=`${a}-present`:s="information missing",s},oe=()=>window.matchMedia("(min-width: 1440px)").matches?5:window.matchMedia("(min-width: 768px)").matches?4:11,N=()=>{const e=document.querySelector(".about-artist__info-item--bio .about-artist__info-item-text");if(!e)return;e.dataset.fullText||(e.dataset.fullText=e.textContent.trim());const t=e.dataset.fullText;e.style.visibility="hidden";const s=parseFloat(getComputedStyle(e).lineHeight),a=oe(),r=s*a;let n=t.split(" "),o=t;for(e.textContent=o;e.scrollHeight>r&&n.length>0;)n.pop(),o=n.join(" "),e.textContent=o+"...";e.style.maxHeight=`${r}px`,e.style.overflowY=e.scrollHeight>r?"auto":"hidden",e.style.visibility="visible"};function H(){clearTimeout(C),C=setTimeout(N,150)}//! ============================================================================
function ie(e){if(e==null)return"0:00";const t=Math.floor(e/1e3),s=Math.floor(t/60),a=t%60;return`${s}:${a.toString().padStart(2,"0")}`}function le(e,t=!0){return e.reduce((s,a)=>{const r=a.tracks.filter(n=>{var o;return Number(n.intDuration)>0&&((o=n.strTrack)==null?void 0:o.trim())});return t&&r.length===0||s.push({...a,tracks:r}),s},[])}//! ============================================================================
function ce(e){if(typeof e!="string"||e.trim()==="")return!1;try{const t=new URL(e);return t.protocol==="http:"||t.protocol==="https:"}catch{return!1}}//! ============================================================================
function de(e){w.error({message:e,position:"topRight",class:"custom-error-toast",timeout:5e3,onOpening:(t,s)=>{const a=s.querySelector(".iziToast-body");if(a){const n=document.createElement("span");n.classList.add("iziToast-icon"),n.innerHTML=`
          <svg class="toast-error-icon" width="24" height="24">
            <use xlink:href="${y}#icon-toast-error"></use>
          </svg>
        `,a.prepend(n)}const r=s.querySelector(".iziToast-close");r&&(r.innerHTML=`
          <svg class="toast-close-icon" width="16" height="16">
            <use xlink:href="${y}#icon-toast-close"></use>
          </svg>
        `)}})}const L=c.artistModalElems;//! ============================================================================
async function ue(e){_e(),Me();try{const t=await D(e),{albumsList:s}=t;be(t);const a=le(s,!0);ye(a),setTimeout(N,0)}catch(t){de(t.message)}finally{Se()}}//! ============================================================================
const me=e=>{const{strArtist:t,strArtistThumb:s,intFormedYear:a,intDiedYear:r="",strGender:n,intMembers:o,strCountry:v,strBiographyEN:u,genres:i}=e,m=ne({intFormedYear:a,intDiedYear:r}),f=o&&o>1,T=pe([{title:"Years active",key:"activeYears",value:m},{title:"Sex",key:"strGender",value:n,isBand:f},{title:"Members",key:"intMembers",value:o,isBand:f},{title:"Country",key:"strCountry",value:v},{title:"Biography",key:"strBiographyEN",value:u}]),p=ge(i);return`<section class="about-artist js-about-artist">
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
            </section>`};function fe(e){const{key:t,value:s,title:a,isBand:r=""}=e;if(t==="strGender"&&r||t==="intMembers"&&!r)return"";const o=`<li class="${t==="strBiographyEN"?"about-artist__info-item about-artist__info-item--bio":"about-artist__info-item"}">
                           <b class="about-artist__info-item-title">${a}</b>
                           <p class="about-artist__info-item-text">${s}</p>
                        </li>`;return s?o:""}function pe(e){return e.map(fe).join(`
`)}//! ============================================================================
const Ae=e=>`<li class="about-artist__music-genre">${e}</li>`;function ge(e){return(e==null?void 0:e.length)>0?e.map(Ae).join(`
`):""}//! ============================================================================
const be=e=>{const t=me(e);L.artistModalInnerEl.insertAdjacentHTML("afterbegin",t)};//! ============================================================================
const ye=e=>{const t=he(e);L.artistModalInnerEl.insertAdjacentHTML("beforeend",t)};function he(e){return`<section class="artist-albums js-artist-modal-albums">
            <h2 class="artist-albums__title">Albums</h2>
            <ul class="artist-albums__list js-artist-albums">
              ${ve(e)}
            </ul>
          </section>`}function ve(e){return e.map(ke).join(`
`)}function ke(e){const{strAlbum:t="",tracks:s}=e,a=(s==null?void 0:s.length)>0?Ee(s):"";return`<li class="artist-album">
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
function we(e){const{strTrack:t,intDuration:s,movie:a}=e,r=Le(a),n=ie(s);return`<li class="artist-tracks__item">
            <span class="artist-tracks__item-name">${t}</span>
            <span class="artist-tracks__item-duration">${n}</span>
            ${r}
          </li>`}function Ee(e){return e.map(we).join(`
`)}//! ============================================================================
function Le(e){return ce(e)?`<a href="${e}" target="_blank" rel="noopener noreferrer" class="artist-tracks__item-link">
                          <svg class="artist-tracks__item-icon" width="21" height="15">
                            <use href="${y}#icon-Youtube"></use>
                          </svg>
                      </a>`:""}//! ============================================================================
const Me=()=>{L.artistModalLoaderEl.classList.add("modal-loader-visible")},Se=()=>{L.artistModalLoaderEl.classList.remove("modal-loader-visible")},A=c.artistModalElems;let S=0;//! ============================================================================
const Be=e=>{const t=e.target.closest(".js-artist-more-btn");t&&ue(t.dataset.artistsId)};//! ============================================================================
function _e(){S=window.scrollY,document.body.style.top=`-${S}px`,document.body.classList.add("scroll-lock"),A.artistModalEl.classList.add("artist-modal--is-open"),document.addEventListener("keydown",O),window.addEventListener("resize",H),A.artistModalEl.addEventListener("click",z),A.closeArtistModalBtnEl.addEventListener("click",M),A.artistModalBodyEl.scrollTop=0}function M(){A.artistModalEl.classList.remove("artist-modal--is-open"),document.body.classList.remove("scroll-lock"),document.body.style.top="",window.scrollTo(0,S),A.artistModalInnerEl.innerHTML="",document.removeEventListener("keydown",O),window.removeEventListener("resize",H),A.artistModalEl.removeEventListener("click",z),A.closeArtistModalBtnEl.removeEventListener("click",M)}//! ============================================================================
function O(e){e.key==="Escape"&&M()}//! ============================================================================
function z(e){e.target===A.artistModalEl&&M()}const{artistsList:Te}=c;//! ============================================================================
Te.addEventListener("click",Be);let B=0;c.burgerMenuOpenBtn.addEventListener("click",e=>{xe()});c.burgerMenuCloseBtn.addEventListener("click",e=>{h()});function U(e){if(e.target.classList=="nav-link-modal"){h();const t=document.querySelector(e.target);t&&t.scrollIntoView({behavior:"smooth"})}}function xe(){B=window.scrollY,document.body.style.top=`-${B}px`,document.body.classList.add("scroll-lock"),c.burgerMenu.classList.add("--open"),document.addEventListener("keydown",e=>{e.key==="Escape"&&h()}),c.burgerMenuList.addEventListener("click",e=>{U(e)}),c.burgerMenuCloseBtn.addEventListener("click",e=>{h()})}function h(){c.burgerMenu.classList.remove("--open"),document.removeEventListener("keydown",e=>{e.key==="Escape"&&h()}),c.burgerMenuList.removeEventListener("click",e=>{U(e)}),c.burgerMenuCloseBtn.removeEventListener("click",e=>{h()}),document.body.classList.remove("scroll-lock"),window.scrollTo(0,B)}
//# sourceMappingURL=index.js.map
