import{a as M,S as q,i as n}from"./assets/vendor-BkVuWn-o.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const E="53208176-1e9da6e5d5d5253b1447f8259",H="https://pixabay.com/api/";async function y(r,s=1,t=15){const i={key:E,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:t};try{return(await M.get(H,{params:i})).data}catch(e){throw e}}function v(r){return r.map(({webformatURL:s,largeImageURL:t,tags:i,likes:e,views:o,comments:d,downloads:b})=>`<li class="gallery-item">
        <a href="${t}">
          <img src="${s}" alt="${i}" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-div">
            <h3 class="params">Likes</h3> 
            <p>${e}</p>
          </div>
          <div class="info-div">
            <h3 class="params">Views</h3> 
            <p>${o}</p>
          </div>
          <div class="info-div">
            <h3 class="params">Comments</h3> 
            <p>${d}</p>
          </div>
          <div class="info-div">
            <h3 class="params">Downloads</h3> 
            <p>${b}</p>
          </div>
        </div>
      </li>`).join("")}const P=document.querySelector("#search-form"),a=document.querySelector("#gallery"),p=document.querySelector("#load-more-btn"),w=document.querySelector("#loader"),L=new q(".gallery a");let m="",c=1;const u=15;let l=0;P.addEventListener("submit",$);p.addEventListener("click",O);function S(){w.classList.remove("hidden")}function f(){w.classList.add("hidden")}function g(){p.classList.remove("hidden")}function h(){p.classList.add("hidden")}async function $(r){r.preventDefault();const s=r.target.searchQuery.value.trim();if(a.innerHTML="",!s){n.warning({title:"Warning",message:"Please, enter a search term!"});return}m=s,c=1,l=0,a.innerHTML="",h();try{S();const t=await y(m,c,u);if(f(),!t.hits||t.hits.length===0){n.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please, try again!"});return}l=t.totalHits||0;const i=v(t.hits);a.insertAdjacentHTML("beforeend",i),L.refresh(),c*u<l?g():h()}catch(t){f(),n.error({title:"Error",message:"Something went wrong while fetching images..."}),console.error(t)}}async function O(){c+=1,h();try{S();const r=await y(m,c,u);if(f(),!r.hits||r.hits.length===0){n.info({title:"No more results",message:"You've reached the end of search results."}),h();return}const s=v(r.hits),t=a.firstElementChild?a.firstElementChild.getBoundingClientRect().height:0;a.insertAdjacentHTML("beforeend",s),L.refresh(),t&&window.scrollBy({top:t*2,left:0,behavior:"smooth"}),l=r.totalHits||l,c*u<l?g():(h(),n.info({title:"End of results",message:"You've reached the end of search results."}))}catch(r){f(),n.error({title:"Error",message:"Something went wrong while fetching more images... Maybe, try again"}),console.error(r),g()}}
//# sourceMappingURL=index.js.map
