import Vue from 'vue'
import App from './App.vue'

// Vuex
import {store} from './vuex.js'

// VueRouter
import VueRouter from 'vue-router'
import {routes} from './App.vue'
Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes 
})

// Vuetify
import Vuetify from 'vuetify'
Vue.use(Vuetify)

// FortAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faComment as fasComment } from '@fortawesome/free-solid-svg-icons'
import { faComment as farComment } from '@fortawesome/free-regular-svg-icons'
library.add(fasComment, farComment)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Components
import './components/ui'
import './components/svg'

new Vue({
    el: '#app',
    store,
    render: h => h(App),
    router
})