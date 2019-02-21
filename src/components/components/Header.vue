<template>
    <div class="wrapper">
        <router-link :to="{name: 'index'}">
            <img src="../../assets/logo.png" class="logo">
        </router-link>
        <ul class="menu">
            <li><router-link :to="{name: 'catalog'}" class="link-menu">Каталог</router-link></li>
            <li><router-link :to="{name: 'contact'}" class="link-menu">Контакты</router-link></li>
        </ul>
        <router-link :to="{name: 'cart'}" class="link-cart">
            <app-cart-counter></app-cart-counter>
        </router-link>
        <app-authorization></app-authorization>
    </div>
</template>

<script>
import CartCounter from './CartCounter.vue'
import Authorization from './Authorization.vue'

export default {
    components: {
        'app-cart-counter': CartCounter,
        'app-authorization': Authorization
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
.menu {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    margin-left: var(--margin-menu);
}
.link-menu {
    padding: 10px 15px;
    margin: 5px;
    border-radius: 3px;
    color: black;
    text-decoration: none;
}
.link-cart {
    margin-left: auto;
    margin-right: var(--margin-menu);
}
</style>