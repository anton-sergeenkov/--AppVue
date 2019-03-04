<template>
    <div class="cart">
        <icon-svg name="cart" color="#304a58" width="100%" height="100%" />
        <div class="cart-counter">{{ getProductsCount }}</div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    computed: {
        ...mapGetters([
            'getProductsCount'
        ])
    },
    methods: {
        ...mapActions([
            'setProductsId'
        ])
    },
    mounted() {
        this.setProductsId(null);
    }
}
</script>

<style scoped>
.cart {
    width: 40px;
    height: 40px;
    position: relative;
}
.cart-counter {
    background: #fff;
    border-radius: 50%;
    padding: 5px 10px;
    position: absolute;
    top: -10px;
    right: -25px;
    color: var(--color-dark)
}

</style>
