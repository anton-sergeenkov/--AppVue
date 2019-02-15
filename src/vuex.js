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
        SET_PRODUCTS_COUNT(state, payload) {
            state.count = payload.count;
        }
    },
    actions: {
        setProductsCount({ commit }, id) {
            var cartService = new CartService();
            if (id !== null) {
                var products = cartService.putProduct(id);
            } else {
                var products = cartService.getProducts();
            }
            commit('SET_PRODUCTS_COUNT', {count:products.length});
            return products;
        }
    }
})
