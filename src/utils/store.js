// 对于localStore的封装 useless

const Global = (typeof window !== 'undefined' ? window : global)

function localStorage () {
  return Global.localStorage
}

// read
const read = (key) => {
  return localStorage().getItem(key)
}

// write
const write = (key, data) => {
  return localStorage().setItem(key, data)
}

// remove
const remove = (key) => {
  return localStorage().removeItem(key)
}
// clearAll
const clearAll = () => {
  return localStorage().clear()
}

const Store = {
  read,
  write,
  remove,
  clearAll
}
export default Store
