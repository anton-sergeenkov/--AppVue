<template>
    <div class="wrapper">
        <h1>Корзина покупок</h1>
        <div class="container">

            <div class="product" v-for="(item, i) in catalog">
                <h3 class="product-name">{{item.name}}</h3>
                <div class="product-img" :style="{ backgroundImage: 'url('+item.img+')' }"></div>
                <div class="product-price">{{item.price}} USD</div>
            </div>

        </div>
    </div>
</template>

<script>
import catalogJSON from '../assets/json/catalog.json'

export default {
    data() {
        return {
            catalog: catalogJSON,
            products: null
        };
    },
    methods: {
        //
    },
    created() {
        var products = [];
        var productsLocalStorage = localStorage.getItem('products');

        if (productsLocalStorage !== null) {
            products = JSON.parse(productsLocalStorage);
        }
        this.products = products;

        for(let i in this.catalog) {
            this.catalog[i].id;
        }
    }
}
</script>

<style scoped>
.wrapper {
    flex-wrap: wrap;
}
.container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.product {
    width: 250px;
    padding: 20px;
    background: var(--color-light);
    margin: 20px;
}
.product-name {
    text-align: center;
}
.product-img {
    height: 200px;
    margin: 20px 0;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}
.product-price {
    font-weight: bold;
    text-align: center;
}
</style>