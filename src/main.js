import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)

const Foo = { template: '<div>foo1</div>' }
const Bar = { template: '<div>bar2</div>' }

const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
]

const router = new VueRouter({
    mode: 'history',
    routes 
})

new Vue({
    el: '#app',
    render: h => h(App),
    router
})
