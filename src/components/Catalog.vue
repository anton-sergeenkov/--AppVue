<template>
    <div class="wrapper">
        <div class="element" v-for="item in catalog">
            <div class="name">{{item.name}}</div>
            <div class="img" :style="{ backgroundImage: 'url('+item.img+')' }"></div>
            <div class="price">{{item.price}} USD</div>
            <div class="description">{{item.description}}</div>
        </div>
    </div>
</template>

<script>
const axios = require('axios');

import catalogJSON from '../assets/json/catalog.json';
console.log(catalogJSON[0].name);

export default {
    data() {
        return {
            catalog: catalogJSON
        };
    }
}
</script>

<style scoped>
.wrapper {
    flex-wrap: wrap;
}
.element {
    display: grid;
    grid-template-areas: 
        "name name"
        "img price"
        "img description";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto minmax(100px, auto);
    grid-gap: 20px;
    width: 350px;
    margin: 10px;
    padding: 20px;
    background: var(--color-light);
    border-radius: 3px;
    box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.2);
}
.element .name        { grid-area: name; }
.element .img         { grid-area: img; }
.element .price       { grid-area: price; }
.element .description { grid-area: description; }

.element .img {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    border-radius: 3px;
}
</style>
