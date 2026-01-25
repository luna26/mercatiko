const i=`<div class="vendor-header">\r
  <img src="{LOGO}" />\r
  <div class="vendor-header-info">\r
    <h1>{VENDOR}</h1>\r
    <p>{DESC}</p>\r
  </div>\r
</div>`;(function(){let e=null;async function o(){const a=new URLSearchParams(window.location.search).get("q");window.SHOP_VENDORS&&window.SHOP_VENDORS.includes(a)&&(document.body.classList.add("is-store"),c(),e=await l(a),n())}function n(){const{vendor_details:r}=e,{brand_name:a,short_description:t,frontend_logo_link:s}=r,d=i.replaceAll("{VENDOR}",a).replaceAll("{DESC}",t||"").replaceAll("{LOGO}",s);document.querySelector("#content").insertAdjacentHTML("afterbegin",d)}function c(){document.querySelector("#search_main").value=""}o()})();async function l(e){const n=await(await fetch(`/a/dashboard/vendor-details/${e}?shop=txhvse-rr.myshopify.com`,{method:"GET",credentials:"include",headers:{accept:"*/*","accept-language":"es,en-US;q=0.9,en;q=0.8","sec-fetch-mode":"cors","sec-fetch-site":"same-origin"}})).json();if(n)return n.data}
