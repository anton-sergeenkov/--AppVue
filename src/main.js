import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'

import App from './App.vue'
import {routes} from './App.vue'
import {store} from './vuex.js'
import './components/ui'

Vue.use(VueRouter)
Vue.use(Vuetify)

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
