<template>
    <div class="wrapper">
        <router-link :to="{name: 'index'}">
            <img src="../assets/logo.png" class="logo">
        </router-link>
        <ul class="menu">
            <li><router-link :to="{name: 'catalog'}">Каталог</router-link></li>
            <li><router-link :to="{name: 'contact'}">Контакты</router-link></li>
        </ul>
        <app-shopping-cart></app-shopping-cart>
        <input type="text" placeholder="search" class="search" v-model="textSearch">
    </div>
</template>

<script>
import ShoppingCart  from './ShoppingCart.vue'

export default {
    data() {
        return {
            textSearch: null
        }
    },
    components: {
        'app-shopping-cart': ShoppingCart
    }
}
</script>

<style scoped>
.menu .router-link-active {
    background: var(--color-accent);
}
.wrapper {
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-light);
}
.logo {
    height: 50px;
}
.search {
    width: 200px;
    padding: 10px;
    font-family: inherit;
    font-size: inherit;
}
.menu {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    margin-left: 50px;
}
.menu li a {
    padding: 10px 15px;
    margin: 5px;
    border-radius: 3px;
    color: black;
    text-decoration: none;
}
</style>