<template>
    <div id="app">
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from    './components/Header.vue'
import Catalog from   './components/Catalog.vue'
import Product from   './components/Product.vue'
import Contact from   './components/Contact.vue'
import Page404 from   './components/Page404.vue'
import PageIndex from './components/PageIndex.vue'

export default {
    components: {
        'app-header': Header
    }
}

export const routes = [
    { path: '*',            component: Page404 },
    { path: '/',            component: PageIndex },
    { path: '/catalog',     component: Catalog },
    { path: '/catalog/:id', component: Product },
    { path: '/contact',     component: Contact }
]
</script>

<style>
:root {
    --color-light: #eee;
    --color-accent: #ffda4a;
    --color-dark: #304a58;
    --font-h1: 25px;
    --font-main: 16px;
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
.router-link-active {
    background: var(--color-accent);
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
</style>