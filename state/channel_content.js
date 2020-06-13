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
        name : states.DISPLAYING_MAIN_CONTENT,
        threadContent: { 
          header: {},
          posts: []
        }
      }
    },
    mutations: {
      openThread(state, threadContent) {
        state.name = states.DISPLAYING_THREAD_CONTENT
        state.threadContent = threadContent
      },
      closeThread(state) {
        state.name = states.DISPLAYING_MAIN_CONTENT
        state.threadContent = {}
      }
    }
  })

export default store