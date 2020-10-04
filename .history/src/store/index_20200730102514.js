import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//状态共享
export default new Vuex.Store({
  //共享数据
  state: {
    rrr:1
  },
  mutations: {
    setrrr(state,data){
      state.rrr=data
    }
  },
  actions: {
  },
  modules: {
  }
})
