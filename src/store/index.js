import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: window.localStorage.getItem('user')
  },
  mutations: {
    setUser (state, data) {
      state.user = data
      // 为了防止页面刷新导致数据丢失，需要将数据放到本地存储，
      // 这里的存储仅仅是为了持久化数据
      window.localStorage.setItem('user', JSON.stringify(state.user))
    }
  },
  actions: {
  },
  modules: {
  }
})
