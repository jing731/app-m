export const getItem = name => {
  const data = window.localStorage.getItem(name)
  try {
    // data可能不是json格式的字符串，尝试将data转化为js对象
    return JSON.parse(data)
  } catch (error) {
    // data不是json格式的字符串，直接原样返回
    return data
  }
}
export const setItem = (name, value) => {
  // 如果value是对象，就把value转化为json格式的字符串再存储
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(name, value)
}
export const removeItem = name => {
  window.localStorage.removeItem(name)
}
