import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        changeStore(state, payload) {
            state.count = payload.count
        }
    },
    getters: {
        storeCount(state) {
            return state.count
        }
    }
})
