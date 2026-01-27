(()=>{function i(t){const n=document.querySelector(".vendors-container"),r=l(t);for(const e in r){console.log("Categoría:",e),n.insertAdjacentHTML("beforeend",`<div>
          <h1>${e}</h1>
          <ul class="stores-${e.replaceAll(" ","")}"></ul>
        </div>`);const o=document.querySelector(`.stores-${e.replaceAll(" ","")}`);r[e].forEach(s=>{const{id:v,title:c,status:m,logo_link:p,brand_name:d,vendor_category:a}=s;(!m||!window.SHOP_VENDORS.includes(d))&&!window.SHOP_VENDORS.includes(c)||(o.classList.contains("vendors-loaded")||o.classList.add("vendors-loaded"),o.insertAdjacentHTML("beforeend",`<li data-vendor="${v}">
        <a data-slug="${d}" class="btn-set-vendor">
          <img src="${p}"/>
          <div class="btn-set-vendor-info">
            <h3>${c}</h3>
            ${a?`<p>${a}</p>`:""}
          </div>
        </a>
      </li>`))})}}function l(t){const n=t.reduce((e,o)=>{const s=o.vendor_category||"Otros";return e[s]||(e[s]=[]),e[s].push(o),e},{});return Object.keys(n).forEach(e=>{n[e].sort((o,s)=>o.title.localeCompare(s.title))}),Object.keys(n).sort((e,o)=>e==="Otros"?1:o==="Otros"?-1:e.localeCompare(o)).reduce((e,o)=>(e[o]=n[o],e),{})}function u(t){document.addEventListener("click",n=>{const e=n.target.closest("a");if(e&&e.matches("a.btn-set-vendor")){const o=e.getAttribute("data-slug");h(o)}})}function f(){fetch("/a/dashboard/vendors-list?shop=txhvse-rr.myshopify.com&limit=100",{method:"GET",credentials:"include",headers:{accept:"*/*","accept-language":"es,en-US;q=0.9,en;q=0.8","sec-fetch-mode":"cors","sec-fetch-site":"same-origin"}}).then(t=>{if(!t.ok)throw new Error("HTTP "+t.status);return t.json()}).then(t=>{i(t.data.vendors)}).catch(t=>{console.error("Error en fetch:",t)})}async function y(t){const r=await(await fetch(`/a/dashboard/vendor-products/${t}?shop=txhvse-rr.myshopify.com&sort_by=title-ascending&limit=100`,{method:"GET",credentials:"include",headers:{accept:"*/*","accept-language":"es,en-US;q=0.9,en;q=0.8","sec-fetch-mode":"cors","sec-fetch-site":"same-origin"}})).json();if(r)return r.data}function h(t){window.location.href=`/collections/vendors?q=${t}`}function g(){u(),f()}g()})();
