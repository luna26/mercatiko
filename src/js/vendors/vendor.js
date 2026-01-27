(() => {
  function renderVendors(vendors) {
    const container = document.querySelector('.vendors-container')
    const vendorsCategory = grouped(vendors)


    for (const category in vendorsCategory) {
      console.log("Categoría:", category);

      container.insertAdjacentHTML('beforeend', `<div>
          <h1>${category}</h1>
          <ul class="stores-${category.replaceAll(' ', '')}"></ul>
        </div>`)

      const list = document.querySelector(`.stores-${category.replaceAll(' ', '')}`)

      vendorsCategory[category].forEach(vendor => {
        const { id, title, status, logo_link, brand_name, vendor_category } = vendor

        if (!status || !window.SHOP_VENDORS.includes(brand_name)) {
          if (!window.SHOP_VENDORS.includes(title)) return
        }

        if (!list.classList.contains('vendors-loaded')) list.classList.add('vendors-loaded')

        list.insertAdjacentHTML('beforeend', `<li data-vendor="${id}">
        <a data-slug="${brand_name}" class="btn-set-vendor">
          <img src="${logo_link}"/>
          <div class="btn-set-vendor-info">
            <h3>${title}</h3>
            ${vendor_category ? `<p>${vendor_category}</p>` : ''}
          </div>
        </a>
      </li>`)
      });
    }
  }

  function grouped(vendors) {
    const grouped = vendors.reduce((acc, vendor) => {
      const category = vendor.vendor_category || "Otros"; // usar Otros
      if (!acc[category]) acc[category] = [];
      acc[category].push(vendor);
      return acc;
    }, {});

    // 2. Ordenar vendors dentro de cada categoría
    Object.keys(grouped).forEach(category => {
      grouped[category].sort((a, b) => a.title.localeCompare(b.title));
    });

    // 3. Ordenar categorías alfabéticamente excepto "Otros" que va al final
    const orderedGrouped = Object.keys(grouped)
      .sort((a, b) => {
        if (a === "Otros") return 1;   // mover "Otros" hacia abajo
        if (b === "Otros") return -1;
        return a.localeCompare(b);     // resto alfabético
      })
      .reduce((acc, category) => {
        acc[category] = grouped[category];
        return acc;
      }, {});

    return orderedGrouped
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
    window.location.href = `/collections/vendors?q=${handle}`
  }

  function init() {
    addEvents()
    getVendors()
  }

  init()
})()