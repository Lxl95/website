var supportIE = {
  install: function(Vue) {
    Vue.directive('support', {
      inserted: function(el) {
        if (('placeholder' in document.createElement('input'))) {
          return
        }
        if (/^el/.test(el.className)) {
          el = el.querySelector('[placeholder]')
        }
        var placeholder = el.getAttribute('placeholder') || '请输入'
        var span = document.createElement('span')
        span.className = 'ie-placeholder'
        span.innerText = placeholder
        span.style.left = el.offsetLeft + 'px'
        el.parentNode.style.position = 'relative'
        el.insertAdjacentElement('afterend', span)
        el.onfocus = function(event) {
          if (event.target.value) {
            span.style.display = 'none'
          }
        }
        el.onblur = function(event) {
          if (!event.target.value) {
            span.style.display = 'inline'
          }
        }
        el.oninput = function(event) {
          if (event.target.value) {
            span.style.display = 'none'
          } else {
            span.style.display = 'inline'
          }
        }
      },
      unbind: function(el) {
        el.onfocus = el.onblur = el.oninput = null
      }
    })
  }
}

export default supportIE
