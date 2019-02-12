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
            var productsLocalStorage = localStorage.getItem('products');
            
            if (productsLocalStorage !== null) {
                var count = JSON.parse(productsLocalStorage).length;
            } else {
                var count = 0;
            }
            
            commit('addProductId', {count:count});
        }
    }
})
