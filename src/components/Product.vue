<template>
    <div class="wrapper">
        <h1>Product</h1>
        <div class="container">
            <div class="img" :style="{ backgroundImage: 'url('+product.img+')' }"></div>
            <h3 class="name">{{product.name}}</h3>
            <div class="price">{{product.price}} USD</div>
            <div class="description">{{product.description}}</div>
        </div>
    </div>
</template>

<script>
import catalogJSON from '../assets/json/catalog.json'

export default {
    data() {
        return {
            product: null
        };
    },
    created() {
        this.product = catalogJSON[this.$route.params.id];;
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
        "img name"
        "img price"
        "img description";
    grid-template-columns: 250px 1fr;
    grid-template-rows: auto auto minmax(150px, auto);
    grid-gap: 20px;
    margin: 10px;
    padding: 20px;
    background: var(--color-light);
    border-radius: 3px;
}
.container .name        { grid-area: name; }
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