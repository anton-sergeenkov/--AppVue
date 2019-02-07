<template>
    <div class="container">Корзина покупок {{ count }}</div>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    }
}
</script>

<style scoped>
.container {
    padding: 20px;
    margin-left: auto;
    margin-right: 35px;
}
</style>
