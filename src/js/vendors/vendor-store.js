import vendorHeaderTpl from '../../templates/vendor-header.html?raw'

(function () {
  let vendorData = null

  async function init() {
    const params = new URLSearchParams(window.location.search);
    const handle = params.get('q');

    if (window.SHOP_VENDORS && window.location.pathname === '/collections/vendors' && window.SHOP_VENDORS.filter((vendor) => vendor.toLowerCase() === handle.toLowerCase())) {
      document.body.classList.add('is-store')

      clearSearch()

      vendorData = await getVendor(handle)

      vendorHeader()
    }
  }

  function vendorHeader() {
    const { vendor_details } = vendorData
    const { brand_name, vendor_category, frontend_logo_link } = vendor_details

    const tpl = vendorHeaderTpl
      .replaceAll('{VENDOR}', brand_name)
      .replaceAll('{DESC}', vendor_category ? vendor_category : '')
      .replaceAll('{LOGO}', frontend_logo_link)

    document.querySelector('#content').insertAdjacentHTML('afterbegin', tpl)
  }

  function clearSearch() {
    document.querySelector('#search_main').value = ""
  }

  init()
})()

async function getVendor(handle) {
  const response = await fetch(
    `/a/dashboard/vendor-details/${handle}?shop=txhvse-rr.myshopify.com`,
    {
      method: "GET",
      credentials: "include", // 🔑 cookies de sesión
      headers: {
        "accept": "*/*",
        "accept-language": "es,en-US;q=0.9,en;q=0.8",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin"
      }
    }
  )

  const json = await response.json()

  if (json) return json.data
}