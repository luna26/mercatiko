(()=>{function a(e){console.log("vendors:",e);const t=document.querySelector(".vendors-container ul");e.reverse().forEach(n=>{const{id:o,title:s,status:u,logo_link:f,brand_name:c,short_description:r}=n;!u||!window.SHOP_VENDORS.includes(c)||(t.classList.contains("vendors-loaded")||t.classList.add("vendors-loaded"),t.insertAdjacentHTML("afterbegin",`<li data-vendor="${o}">
        <a data-slug="${c}" class="btn-set-vendor">
          <img src="${f}"/>
          <div class="btn-set-vendor-info">
            <h3>${s}</h3>
            ${r?`<p>${r}</p>`:""}
          </div>
        </a>
      </li>`))})}function i(e){document.addEventListener("click",t=>{const o=t.target.closest("a");if(o&&o.matches("a.btn-set-vendor")){const s=o.getAttribute("data-slug");l(s)}})}function d(){fetch("/a/dashboard/vendors-list?shop=txhvse-rr.myshopify.com&limit=100",{method:"GET",credentials:"include",headers:{accept:"*/*","accept-language":"es,en-US;q=0.9,en;q=0.8","sec-fetch-mode":"cors","sec-fetch-site":"same-origin"}}).then(e=>{if(!e.ok)throw new Error("HTTP "+e.status);return e.json()}).then(e=>{a(e.data.vendors)}).catch(e=>{console.error("Error en fetch:",e)})}async function g(e){const n=await(await fetch(`/a/dashboard/vendor-products/${e}?shop=txhvse-rr.myshopify.com&sort_by=title-ascending&limit=100`,{method:"GET",credentials:"include",headers:{accept:"*/*","accept-language":"es,en-US;q=0.9,en;q=0.8","sec-fetch-mode":"cors","sec-fetch-site":"same-origin"}})).json();if(n)return n.data}function l(e){window.location.href=`/collections/vendors?q=${e}`}function h(){i(),d()}h()})();
