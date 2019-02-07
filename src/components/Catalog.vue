<template>
    <div class="wrapper">
        <h1>Catalog</h1>
        {{count}}
        <div class="container">
            <div class="product" v-for="(item, i) in catalog">
                <h3 class="product-name">{{item.name}}</h3>
                <div class="product-img" :style="{ backgroundImage: 'url('+item.img+')' }"></div>
                <div class="product-price">{{item.price}} USD</div>
                <div class="product-description">{{item.description}}</div>
                <router-link :to="{name: 'product', params: {id: i}}" class="product-link">Подробнее</router-link>
                <button class="btn product-buy" @click="addProductToCart(i)">Добавить в корзину</button>
            </div>
        </div>
    </div>
</template>

<script>
import catalogJSON from '../assets/json/catalog.json';

export default {
    data() {
        return {
            catalog: catalogJSON,
            count: null
        };
    },
    methods: {
        addProductToCart(id) {
            this.count = id;
        }
    }
}
</script>

<style scoped>
.wrapper {
    flex-wrap: wrap;
}
.container {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
}
.product {
    display: grid;
    grid-template-areas: 
        "name name"
        "img price"
        "img description"
        "link shopping";
    grid-template-columns: 200px 1fr;
    grid-template-rows: auto auto minmax(100px, auto);
    grid-gap: 20px;
    width: 450px;
    margin: 10px;
    padding: 20px;
    background: var(--color-light);
    border-radius: 3px;
    box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.2);
}
.product-name        { grid-area: name; }
.product-img         { grid-area: img; }
.product-price       { grid-area: price; }
.product-description { grid-area: description; }
.product-link        { grid-area: link; }
.product-buy         { grid-area: shopping; }

.product-price {
    font-weight: bold;
}
.product-img {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    border-radius: 3px;
}
.product-link {
    color: var(--color-dark);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
.product-buy {
    background: #fff;
}
</style>