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
        const { title, image, handle } = vendor

        if (!window.SHOP_VENDORS.filter((vendor) => vendor.trim().toLowerCase() === title.trim().toLowerCase())) return

        if (!list.classList.contains('vendors-loaded')) list.classList.add('vendors-loaded')

        list.insertAdjacentHTML('beforeend', `<li data-vendor="${handle}">
        <a data-handle="${handle}" class="btn-set-vendor">
          <img src="${image.url}"/>
          <div class="btn-set-vendor-info">
            <h3>${title}</h3>
          </div>
        </a>
      </li>`)
      });

      // ${vendor_category ? `<p>${vendor_category}</p>` : ''}
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
          const handle = anchor.getAttribute('data-handle')

          goToVendor(handle)
        }
      }
    })
  }

  function getVendors() {
    // Extract the store from the Shopify environment
    const store = window.Shopify.shop.replace('.myshopify.com', '')

    // Request Garnet for the complete list of vendors
    const endpointUrl = `https://www.vendors.mercatiko.store/api/storefront/populate/v2`
    fetch(endpointUrl).then(r => r.json()).then((vendors) => {
      renderVendors(vendors)
    })
  }

  function goToVendor(handle) {
    window.location.href = `/collections/vendors?q=${handle}&sort_by=best-selling`
  }

  function init() {
    addEvents()
    getVendors()
  }

  init()
})()