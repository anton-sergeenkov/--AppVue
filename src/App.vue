<template>
    <div id="app">
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>
import Header  from './components/Header.vue'
import Catalog from './components/Catalog.vue'
import Product from './components/Product.vue'
import Contact from './components/Contact.vue'
import Page404 from './components/Page404.vue'
import Index   from './components/Index.vue'

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
    { path: '*',            component: Page404, name: 'page404' }
]
</script>

<style>
:root {
    --color-light: #eee;
    --color-accent: #ffda4a;
    --color-dark: #304a58;
    --font-small: 14px;
    --font-main: 16px;
    --font-h1: 25px;
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
}
</style>