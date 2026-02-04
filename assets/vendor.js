(()=>{function c(r){const o=document.querySelector(".vendors-container"),n=a(r);for(const e in n){console.log("Categoría:",e),o.insertAdjacentHTML("beforeend",`<div>
          <h1>${e}</h1>
          <ul class="stores-${e.replaceAll(" ","")}"></ul>
        </div>`);const t=document.querySelector(`.stores-${e.replaceAll(" ","")}`);n[e].forEach(s=>{const{title:d,image:p,handle:i}=s;window.SHOP_VENDORS.filter(v=>v.trim().toLowerCase()===d.trim().toLowerCase())&&(t.classList.contains("vendors-loaded")||t.classList.add("vendors-loaded"),t.insertAdjacentHTML("beforeend",`<li data-vendor="${i}">
        <a data-handle="${i}" class="btn-set-vendor">
          <img src="${p.url}"/>
          <div class="btn-set-vendor-info">
            <h3>${d}</h3>
          </div>
        </a>
      </li>`))})}}function a(r){const o=r.reduce((e,t)=>{const s=t.vendor_category||"Otros";return e[s]||(e[s]=[]),e[s].push(t),e},{});return Object.keys(o).forEach(e=>{o[e].sort((t,s)=>t.title.localeCompare(s.title))}),Object.keys(o).sort((e,t)=>e==="Otros"?1:t==="Otros"?-1:e.localeCompare(t)).reduce((e,t)=>(e[t]=o[t],e),{})}function l(r){document.addEventListener("click",o=>{const e=o.target.closest("a");if(e&&e.matches("a.btn-set-vendor")){const t=e.getAttribute("data-handle");f(t)}})}function u(){const r=window.Shopify.shop.replace(".myshopify.com","");fetch("https://www.vendors.mercatiko.store/api/storefront/populate/v2").then(n=>n.json()).then(n=>{c(n)})}function f(r){window.location.href=`/collections/vendors?q=${r}&sort_by=best-selling`}function h(){l(),u()}h()})();
