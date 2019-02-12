<template>
    <div class="cart">
        <div class="cart-counter">{{ storeCount }}</div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters([
            'storeCount'
        ])
    }
}
</script>

<style scoped>
.cart {
    width: 40px;
    height: 40px;
    margin-left: auto;
    margin-right: 50px;
    position: relative;
    background-image: url(../assets/icons/shopping-cart.svg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
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
