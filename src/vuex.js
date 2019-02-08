import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        changeCount(state) {
            state.count++
        }
    },
    getters: {
        storeCount(state) {
            return state.count
        }
    },
    actions: {
        changeCount(context) {
            context.commit('changeCount');
        }
    }
})
