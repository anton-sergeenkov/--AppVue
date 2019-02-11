<template>
    <div class="container">Корзина покупок {{ storeProducts }} {{ storeCount }}</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters([
            'storeCount',
            'storeProducts'
        ])
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
