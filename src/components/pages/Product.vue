<template>
    <div class="wrapper">
        <h2>{{product.name}}</h2>
        <div class="container" v-if="!isErrorApi">
            <div class="img" :style="{ backgroundImage: 'url('+product.img+')' }"></div>
            <div class="price">{{product.price}} USD</div>
            <div class="description">{{product.description}}</div>
        </div>
        <v-app v-else>
            <v-alert :value="true" type="error" outline>Ошибка доступа к API</v-alert>
        </v-app>
    </div>
</template>

<script>
import {api} from '../../api.js'

export default {
    data() {
        return {
            product: [],
            isErrorApi: false
        };
    },
    created() {
        api.getProductsList()
            .then(productsList => {
                this.product = productsList[this.$route.params.id];
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
    width: 100%;
    display: grid;
    grid-template-areas: 
        "img price"
        "img description";
    grid-template-columns: 250px 1fr;
    grid-template-rows: auto minmax(150px, auto);
    grid-gap: 20px;
    margin: 10px;
    padding: 20px;
    background: var(--color-light);
    border-radius: 3px;
}
.container .img         { grid-area: img; }
.container .price       { grid-area: price; }
.container .description { grid-area: description; }

.container .price {
    font-weight: bold;
}
.container .img {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    border-radius: 3px;
}
</style>