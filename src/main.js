import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './App.vue'
import {store} from './vuex.js'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes 
})

new Vue({
    el: '#app',
    store,
    render: h => h(App),
    router
})
