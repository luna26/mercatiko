/**
* Wraps one or more DOM elements inside a new wrapper element.
*
* @param {HTMLElement|HTMLElement[]|NodeList} targets - One or more DOM elements to wrap.
* @param {string} [wrapperTag='div'] - The tag name for the wrapper element.
* @param {string} [clases] - Classes to be added
* @returns {HTMLElement|null} The new wrapper element, or null if input is invalid.
*/
export function wrapElement(targets, wrapperTag = 'div', clases) {
    const elements = Array.from(targets instanceof NodeList ? targets : (Array.isArray(targets) ? targets : [targets]))
    const wrapper = document.createElement(wrapperTag)
    const first = elements[0]
    const parent = first.parentNode

    if (clases) wrapper.classList.add(clases)

    parent.insertBefore(wrapper, first)
    elements.forEach((el) => wrapper.appendChild(el))

    return wrapper
}

// async function isStore(handle) {
//   const vendors = await getVendors()

//   const store = vendors.vendors.filter(({ brand_name }) => brand_name === handle)

//   return store.length > 0 ? true : false
// }