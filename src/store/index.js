import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '@/utils/storage'
Vue.use(Vuex)
const USER_KEY = 'tou_user'

export default new Vuex.Store({
  state: {
    user: getItem(USER_KEY)
  },
  mutations: {
    setUser (state, data) {
      state.user = data
      // 为了防止页面刷新导致数据丢失，需要将数据放到本地存储，
      // 这里的存储仅仅是为了持久化数据
      setItem(USER_KEY, state.user)
    }
  },
  actions: {
  },
  modules: {
  }
})
