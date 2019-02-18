<template>
    <div class="wrapper">
        <h1>Каталог товаров</h1>
        <div class="container">
            <div class="product" v-for="(item, i) in catalog">
                <h3 class="product-name">{{item.name}}</h3>
                <div class="product-img" :style="{ backgroundImage: 'url('+item.img+')' }"></div>
                <div class="product-price">{{item.price}} USD</div>
                <div class="product-description">{{item.description}}</div>
                <router-link :to="{name: 'product', params: {id: i}}" class="product-link">Подробнее</router-link>
                <button class="btn product-buy" :class="{active:checkProduct(item.id)}" @click="chooseProduct(item.id)">
                    <slot v-if="checkProduct(item.id)">Удалить из корзины</slot>
                    <slot v-else>Добавить в корзину</slot>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import catalogJSON from '../../assets/json/catalog.json'
import {CartService} from '../../CartService.js'
import {mapActions} from 'vuex'

export default {
    data() {
        return {
            catalog: catalogJSON,
            products: null
        };
    },
    methods: {
        ...mapActions([
            'setProductsId'
        ]),
        checkProduct(id) {
            return this.products.some(function(i){ 
                return i == id
            })
        },
        chooseProduct(id) {
            this.setProductsId(id).then(response => {
                this.products = response;
            });
        }
    },
    created() {
        var cartService = new CartService();
        this.products = cartService.getProducts();
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
    margin: 15px;
    padding: 15px;
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
.active {
    background-image: linear-gradient(to right, #e2f87c, #d6f567, #c8f151, #b9ee38, #a8eb12);
}
</style>