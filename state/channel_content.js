import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export
const states = {
  DISPLAYING_MAIN_CONTENT: 'DISPLAYING_MAIN_CONTENT',
  DISPLAYING_THREAD_CONTENT: 'DISPLAYING_THREAD_CONTENT'
}

const store = 
  new Vuex.Store({
    state() {
      return {
        name : states.DISPLAYING_MAIN_CONTENT
      }
    },
    mutations: {
      openThread(state) {
        state.name = states.DISPLAYING_THREAD_CONTENT
      },
      closeThread(state) {
        state.name = states.DISPLAYING_MAIN_CONTENT
      }
    }
  })

export default store