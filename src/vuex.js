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
            var products = [];
            var productsLocalStorage = localStorage.getItem('products');

            if (productsLocalStorage !== null) {
                products = JSON.parse(productsLocalStorage);
            }

            var isNewProduct = products.every(function(item) {
                return item !== payload.id;
            })

            if (isNewProduct) {
                products.push(payload.id);
                localStorage.setItem('products', JSON.stringify(products));  
            }
            state.count = products.length;
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
            commit('addProductId', {id:id});
        },
        addProductCounter({ commit }) {
            commit('addProductCounter');
        }
    }
})
