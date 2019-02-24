<template>
    <div id="app">
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>
import Header  from './components/components/Header.vue'
import Catalog from './components/pages/Catalog.vue'
import Product from './components/pages/Product.vue'
import Contact from './components/pages/Contact.vue'
import Page404 from './components/pages/Page404.vue'
import Index   from './components/pages/Index.vue'
import Cart    from './components/pages/Cart.vue'

export default {
    components: {
        'app-header': Header
    }
}

export const routes = [
    { path: '/',            component: Index,   name: 'index'   },
    { path: '/catalog',     component: Catalog, name: 'catalog' },
    { path: '/catalog/:id', component: Product, name: 'product' },
    { path: '/contact',     component: Contact, name: 'contact' },
    { path: '/cart',        component: Cart,    name: 'cart'    },
    { path: '*',            component: Page404, name: 'page404' }
]
</script>

<style>
:root {
    --color-light:       #eee;
    --color-accent:      #ffda4a;
    --color-accent-dark: #e9c057;
    --color-medium:      #4b778e;
    --color-dark:        #304a58;
    --font-small:        14px;
    --font-main:         16px;
    --font-h1:           23px;
    --font-h2:           21px;
    --margin-menu:       50px;
}
::-webkit-scrollbar       { width: 7px; height: 7px;}
::-webkit-scrollbar-thumb { height: 50px; background-color: var(--color-medium); border-radius: 2px;}
::-webkit-scrollbar-track { background-color: var(--color-light); }
* {
    box-sizing: border-box;
}
body {
    margin: 0;
    padding: 0;
    font-size: var(--font-main);
    font-family: sans-serif;
}
.wrapper {
    max-width: 1920px;
    margin: auto;
    display: flex;
    padding: 30px;
}
h1 {
    color: var(--color-dark);
    font-size: var(--font-h1);
    width: 100%;
}
h2 {
    color: var(--color-dark);
    font-size: var(--font-h2);
}
h3 {
    color: var(--color-dark);
    font-size: var(--font-main);
    margin: 5px 0;
}
.btn {
    padding: 10px 15px;
    border-radius: 3px;
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
    font-size: var(--font-small);
    display: block;
}

/* vuetify */
.application {
    width: 100%;
}
.application--wrap {
    min-height: auto;
    flex-grow: 0;
}
.application .v-alert {
    margin: 15px 0px;
}
</style>