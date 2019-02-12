import Vue from 'vue'
import Vuex from 'vuex'

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
        addProductToCart(state, payload) {
            var products = [];
            var productsLocalStorage = localStorage.getItem('products');

            if (productsLocalStorage !== null) {
                products = JSON.parse(productsLocalStorage);
            }

            var isNewProduct = products.every(function(item) {
                return item != payload.idProduct;
            })

            if (isNewProduct) {
                products.push(payload.idProduct);
                localStorage.setItem('products', JSON.stringify(products));
                state.count = products.length;
            }
        }
    },
    actions: {
        addProductToCart({ commit }, idProduct) {
            commit('addProductToCart', {idProduct:idProduct});
        }
    }
})
