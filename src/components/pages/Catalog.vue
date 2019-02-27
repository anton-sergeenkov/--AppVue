<template>
    <div class="wrapper">
        <h1>Каталог товаров</h1>
        <div class="container" v-if="!isErrorApi">
            <div class="product" v-for="(item, i) in catalog" :key="item.id">
                <h3 class="product-name">{{item.name}}</h3>
                <div class="product-img" :style="{ backgroundImage: 'url('+item.img+')' }"></div>
                <div class="product-price">{{item.price}} USD</div>
                <div class="product-description">{{item.description}}</div>
                <router-link :to="{name: 'product', params: {id: i}}" class="product-link">Подробнее</router-link>
                
                <slot v-if="checkProduct(item.id)">
                    <ui-button color="primary-active" @click.native="chooseProduct(item.id)" block class="btn-product">Удалить из корзины</ui-button>
                </slot>
                <slot v-else>
                    <ui-button color="primary" @click.native="chooseProduct(item.id)" block class="btn-product">Добавить в корзину</ui-button>
                </slot>

            </div>
        </div>
        <v-app v-else>
            <v-alert :value="true" type="error" outline>Ошибка доступа к API</v-alert>
        </v-app>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import {cartService} from '../../services/CartService.js'
import {api} from '../../api.js'

export default {
    data() {
        return {
            catalog: null,
            products: [],
            isErrorApi: false
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
        this.products = cartService.getProducts();
        api.getProductsList()
            .then(productsList => {
                this.catalog = productsList;
            })
            .catch(error => {
                this.isErrorApi = true;
                console.error(error);
            });
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
.btn-product         { grid-area: shopping; }

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
</style>