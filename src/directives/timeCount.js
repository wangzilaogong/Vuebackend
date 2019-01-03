export default{
  inserted: function (el, binding, vnode) {
    el.innerHTML = '发送验证码'
    el.style.width = '100px'
  },
  bind: function (el, binding, vnode) {
    el.addEventListener('click', function (event) {
      el.disabled = 'disabled'
      let seconds = 60
      let timer = setInterval(function () {
        if (seconds >= 0) {
          el.innerHTML = seconds-- + 's'
        } else {
          el.innerHTML = '发送验证码'
          el.disabled = false
          clearInterval(timer)
        }
      }, 1000)
    })
  }
}
