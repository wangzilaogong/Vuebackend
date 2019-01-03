// 节流函数，防止按钮多次提交
export default{
  inserted: function (el, binding, vnode) {
    let timer
    el.addEventListener('click', function (event) {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        binding.value()
      }, 500)
    })
  }
}
