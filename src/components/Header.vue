<template>
    <div class="wrapper">
        <img src="../assets/logo.png" class="logo">
        <ul class="menu">
            <li><router-link to="/catalog">Каталог</router-link></li>
            <li><router-link to="/contact">Контакты</router-link></li>
        </ul>
        <input type="text" placeholder="search" class="search" v-model="textSearch">
    </div>
</template>

<script>
export default {
    data() {
        return {
            textSearch: null
        }
    }
}
</script>

<style scoped>
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
}
.menu li a {
    padding: 10px 15px;
    margin: 5px;
    border-radius: 3px;
    color: black;
    text-decoration: none;
}
</style>