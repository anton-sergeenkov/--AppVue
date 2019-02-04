<template>
    <div id="app">
        <app-header></app-header>
        <app-catalog></app-catalog>
    </div>
</template>

<script>
import Header from './components/Header.vue'
import Catalog from './components/Catalog.vue'

export default {
    components: {
        'app-header': Header,
        'app-catalog': Catalog
    }
}
</script>

<style>
:root {
    --color-light: #eee;
}
body {
    margin: 0;
    padding: 0;
}
.wrapper {
    max-width: 1920px;
    margin: auto;
    display: flex;
    font-family: sans-serif;
    font-size: 16px;
    padding: 30px;
}
</style>
