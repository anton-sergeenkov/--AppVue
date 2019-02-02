<template>
    <div class="wrapper">
        <img src="../assets/logo.png" class="logo">
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
    max-width: 1920px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    background-color: #eee;
    font-family: sans-serif;
    font-size: 16px;
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
</style>
