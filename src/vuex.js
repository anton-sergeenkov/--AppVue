import Vue from 'vue'
import Vuex from 'vuex'
import {cartService} from './CartService.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        products: []
    },
    getters: {
        getProductsCount(state) {
            return state.products.length;
        }
    }, 
    mutations: {
        SET_PRODUCTS(state, payload) {
            state.products = payload.products;
        }
    },
    actions: {
        setProductsId({ commit }, id) {
            if (id !== null) {
                var products = cartService.putProduct(id);
            } else {
                var products = cartService.getProducts();
            }
            commit('SET_PRODUCTS', {products:products});
            return products;
        }
    }
})
