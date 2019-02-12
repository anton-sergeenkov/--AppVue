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
        addProductId(state, payload) {
            state.count = payload.count;
        },
        addProductCounter(state) {
            var productsLocalStorage = localStorage.getItem('products');

            if (productsLocalStorage !== null) {
                state.count = JSON.parse(productsLocalStorage).length;
            } else {
                state.count = 0;
            }
        }
    },
    actions: {
        addProductId({ commit }, id) {
            var products = [];
            var productsLocalStorage = localStorage.getItem('products');

            if (productsLocalStorage !== null) {
                products = JSON.parse(productsLocalStorage);
            }

            var isNewProduct = products.every(function(item) {
                return item !== id;
            })

            if (isNewProduct) {
                products.push(id);
                localStorage.setItem('products', JSON.stringify(products));  
            }

            commit('addProductId', {count:products.length});

            return isNewProduct;
        },
        addProductCounter({ commit }) {
            commit('addProductCounter');
        }
    }
})
