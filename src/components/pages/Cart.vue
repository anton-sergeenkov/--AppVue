<template>
    <div class="wrapper">
        <h1>Корзина покупок</h1>
        <div class="container">
            <div v-if="catalogCart.length == 0">Нет выбранных товаров</div>
            <div class="product" v-for="(item, i) in catalogCart">
                <h3 class="product-name">{{item.name}}</h3>
                <div class="product-img" :style="{ backgroundImage: 'url('+item.img+')' }"></div>
                <div class="product-price">{{item.price}} USD</div>
                <button class="btn product-buy" @click="removeProduct(item.id)">Удалить из корзины</button>
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
            catalogCart: [],
            products: []
        };
    },
    methods: {
        ...mapActions([
            'setProductsId'
        ]),
        removeProduct(id) {
            this.setProductsId(id).then(response => {
                this.catalogCart = this.getCatalogCart(this.catalogCart, response);
            });
        },
        getCatalogCart(catalog, products) {
            var catalogCart = [];
            for(var i in catalog) {
                if (products.indexOf(catalog[i].id) !== -1) {
                    catalogCart.push(catalog[i]);
                }
            }
            return catalogCart;
        }
    },
    created() {
        var cartService = new CartService();
        var products = cartService.getProducts();
        this.catalogCart = this.getCatalogCart(this.catalog, products);
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
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: space-between;
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
.product-buy {
    border: 1px solid var(--color-dark);
    margin-top: 10px;
    transition: 0.4s;
}
.product-buy:hover {
    background: #fff;
}
</style>