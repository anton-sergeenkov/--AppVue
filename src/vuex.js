import Vue from 'vue'
import Vuex from 'vuex'
import {CartService} from './CartService.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        count: 0
    },
    getters: {
        storeCount(state) {
            return state.count
        }
    },
    mutations: {
        addProductId(state, payload) {
            state.count = payload.count;
        }
    },
    actions: {
        addProductId({ commit }, id) {
            var cartService = new CartService();
            var products = cartService.putProduct(id);
            commit('addProductId', {count:products.count});
            return products.isNewProduct;
        },
        addProductCounter({ commit }) {
            var cartService = new CartService();
            var count = cartService.putProductCounter();
            commit('addProductId', {count:count});
        }
    }
})
