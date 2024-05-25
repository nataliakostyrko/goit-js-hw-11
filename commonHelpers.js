import{S as d,i as l}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function f(t){const s="https://pixabay.com/api/",i=new URLSearchParams({key:"44038258-5ed49f7c308af682a7282867b",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"}),o=`${s}?${i}`;return fetch(o).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}let n;function p(t){return`<li class="gallery-item">
    <a class="gallery-link" href="${t.largeImageURL}">
      <img 
        class="gallery-image" 
        src="${t.webformatURL}" 
        alt="${t.tags}" 
      />
    </a>
    <div class="img-details-box">
      <p class="detail-item"><b class="detail-title">Likes:</b> ${t.likes}</p>
      <p class="detail-item"><b class="detail-title">Views:</b> ${t.views}</p>
      <p class="detail-item"><b class="detail-title">Comments:</b> ${t.comments}</p>
      <p class="detail-item"><b class="detail-title">Downloads:</b> ${t.downloads}</p>
    </div>
    </li>
  `}function y(t){return t.map(p).join("")}function h(t){const s=y(t);imagesList.insertAdjacentHTML("beforeend",s),n?n.refresh():n=new d(".js-images-container a",{captionsData:"alt",captionDelay:250})}const u=document.querySelector(".images-form"),g=document.querySelector(".js-images-container"),m=document.querySelector(".loader");u.addEventListener("submit",b);function b(t){t.preventDefault(),g.innerHTML="",L();const s=t.target.elements.query.value.trim();if(!s){l.error({title:"Error",message:"Please enter a search query"}),c();return}f(s).then(i=>{if(i&&i.hits&&i.hits.length)h(i.hits);else throw Error("Sorry, there are no images matching your search query. Please try again!")}).catch(i=>{l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{c()}),u.reset()}function L(){m.style.display="inline-block"}function c(){m.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
