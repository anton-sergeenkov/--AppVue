<template>
    <div class="wrapper">
        <h1>Catalog</h1>

        <div class="container">
            <div class="element" v-for="item in catalog">
                <h3 class="name">{{item.name}}</h3>
                <div class="img" :style="{ backgroundImage: 'url('+item.img+')' }"></div>
                <div class="price">{{item.price}} USD</div>
                <div class="description">{{item.description}}</div>
            </div>
        </div>

    </div>
</template>

<script>
import catalogJSON from '../assets/json/catalog.json';

export default {
    data() {
        return {
            catalog: catalogJSON
        };
    }
}
</script>

<style scoped>
.container {
    display: flex;
    width: 100%;
}
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

.element .price {
    font-weight: bold;
}
.element .img {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    border-radius: 3px;
}
</style>
