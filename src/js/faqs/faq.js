(function () {

  function init() {
    addEvents()
  }

  function addEvents() {
    document.addEventListener('click', (e) => {
      const target = e.target
      const button = target.closest('button')

      if (button) {
        if (button.matches('.faq-question')) {
          document.querySelectorAll('.faq-active').forEach((active) => active.classList.remove('faq-active'))
          button.parentNode.classList.toggle('faq-active')

        }
      }

    })
  }
  init()
})()