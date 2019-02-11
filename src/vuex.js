import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        count: 0,
        products: []
    },
    getters: {
        storeCount(state) {
            return state.count
        },
        storeProducts(state) {
            return state.products
        }
    },
    mutations: {
        addProductToCart(state, payload) {
            var isNewProduct = state.products.every(function(item) {
                return item != payload.idProduct;
            })
            if (isNewProduct) {
                state.products.push(payload.idProduct);
            }

            localStorage.setItem('products', JSON.stringify(state.products));
            // var products = JSON.parse(localStorage.getItem('products'));

            state.count = state.products.length;
        }
    },
    actions: {
        addProductToCart({ commit }, idProduct) {
            commit('addProductToCart', {idProduct:idProduct});
        }
    }
})
