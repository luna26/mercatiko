(() => {
  function renderVendors(vendors) {
    console.log("vendors:", vendors);
    const container = document.querySelector('.vendors-container ul')

    vendors.reverse().forEach(vendor => {
      const { id, title, status, logo_link, brand_name, short_description } = vendor

      if (!status) return

      if (!container.classList.contains('vendors-loaded')) container.classList.add('vendors-loaded')

      container.insertAdjacentHTML('afterbegin', `<li data-vendor="${id}">
        <a data-slug="${brand_name}" class="btn-set-vendor">
          <img src="${logo_link}"/>
          <div class="btn-set-vendor-info">
            <h3>${title}</h3>
            ${short_description ? `<p>${short_description}</p>` : ''}
          </div>
        </a>
      </li>`)
    });
  }

  function addEvents(e) {
    document.addEventListener('click', (e) => {
      const target = e.target
      const anchor = target.closest('a')

      if (anchor) {
        if (anchor.matches('a.btn-set-vendor')) {
          const slug = anchor.getAttribute('data-slug')

          goToVendor(slug)
        }
      }
    })
  }

  function getVendors() {
    fetch(
      "/a/dashboard/vendors-list?shop=txhvse-rr.myshopify.com&limit=100",
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
      .then(response => {
        if (!response.ok) {
          throw new Error("HTTP " + response.status);
        }
        return response.json();
      })
      .then(response => {
        renderVendors(response.data.vendors)
      })
      .catch(error => {
        console.error("Error en fetch:", error);
      });
  }

  async function getProducts(slug) {
    const response = await fetch(
      `/a/dashboard/vendor-products/${slug}?shop=txhvse-rr.myshopify.com&sort_by=title-ascending&limit=100`,
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

  function goToVendor(handle) {
    window.location.href = `/search?q=${handle}`
  }

  function init() {
    addEvents()
    getVendors()
  }

  init()
})()