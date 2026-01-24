(()=>{function r(e){console.log("vendors:",e);const t=document.querySelector(".vendors-container ul");e.reverse().forEach(n=>{const{id:s,title:o,status:h,logo_link:f,brand_name:u,short_description:c}=n;h&&(t.classList.contains("vendors-loaded")||t.classList.add("vendors-loaded"),t.insertAdjacentHTML("afterbegin",`<li data-vendor="${s}">
        <a data-slug="${u}" class="btn-set-vendor">
          <img src="${f}"/>
          <div class="btn-set-vendor-info">
            <h3>${o}</h3>
            ${c?`<p>${c}</p>`:""}
          </div>
        </a>
      </li>`))})}function a(e){document.addEventListener("click",t=>{const s=t.target.closest("a");if(s&&s.matches("a.btn-set-vendor")){const o=s.getAttribute("data-slug");d(o)}})}function i(){fetch("/a/dashboard/vendors-list?shop=txhvse-rr.myshopify.com&limit=100",{method:"GET",credentials:"include",headers:{accept:"*/*","accept-language":"es,en-US;q=0.9,en;q=0.8","sec-fetch-mode":"cors","sec-fetch-site":"same-origin"}}).then(e=>{if(!e.ok)throw new Error("HTTP "+e.status);return e.json()}).then(e=>{r(e.data.vendors)}).catch(e=>{console.error("Error en fetch:",e)})}async function g(e){const n=await(await fetch(`/a/dashboard/vendor-products/${e}?shop=txhvse-rr.myshopify.com&sort_by=title-ascending&limit=100`,{method:"GET",credentials:"include",headers:{accept:"*/*","accept-language":"es,en-US;q=0.9,en;q=0.8","sec-fetch-mode":"cors","sec-fetch-site":"same-origin"}})).json();if(n)return n.data}function d(e){window.location.href=`/search?q=${e}`}function l(){a(),i()}l()})();
