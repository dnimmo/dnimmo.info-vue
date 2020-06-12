import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = 
  new Vuex.Store({
    state() {
      return {
        expanded : true
      }
    },
    mutations: {
      toggleExpanded(state) {
        state.expanded = !state.expanded
      }
    }
  })

export default store