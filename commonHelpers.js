import{S as m,i as l}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function d(t){const s="https://pixabay.com/api/",o=new URLSearchParams({key:"44038258-5ed49f7c308af682a7282867b",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"}),i=`${s}?${o}`;return fetch(i).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}let a;function p(t){return`<li class='image-gallery'>
    <a href="${t.largeImageURL}" class="gallery-list">
      <img src="${t.webformatURL}" 
           alt="${t.tags}" loading="lazy"
           class="gallery-link"/>
           </a>
      <div class="info-list">
        <p class="info-item"><b>Likes:</b> ${t.likes}</p>
        <p class="info-item"><b>Views:</b> ${t.views}</p>
        <p class="info-item"><b>Comments:</b> ${t.comments}</p>
        <p class="info-item"><b>Downloads:</b> ${t.downloads}</p>
      </div>
      </li>
      `}function y(t){return t.map(p).join("")}function h(t){const s=y(t);imagesList.insertAdjacentHTML("beforeend",s),a?a.refresh():a=new m(".js-images-container a",{captionsData:"alt",captionDelay:250})}const c=document.querySelector(".images-form"),g=document.querySelector(".js-images-container"),f=document.querySelector(".loader");c.addEventListener("submit",t=>{t.preventDefault();const s=t.target.elements.query.value.trim();if(!s){l.error({title:"Error",message:"Please enter a search query"}),u();return}b(),g.innerHTML="",d(s).then(o=>{if(o&&o.hits&&o.hits.length)h(o.hits);else throw Error("Sorry, there are no images matching your search query. Please try again!")}).catch(o=>{l.error({title:"Error",message:o.message})}).finally(()=>{u()}),c.reset()});function b(){f.style.display="block"}function u(){f.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
