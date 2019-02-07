<template>
    <div class="wrapper">
        <h1>Catalog</h1>
        <div class="container">
            <div class="element" v-for="(item, i) in catalog">
                <h3 class="name">{{item.name}}</h3>
                <div class="img" :style="{ backgroundImage: 'url('+item.img+')' }"></div>
                <div class="price">{{item.price}} USD</div>
                <div class="description">{{item.description}}</div>
                <router-link :to="{name: 'product', params: {id: i}}">Подробнее</router-link>
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
.wrapper {
    flex-wrap: wrap;
}
.container {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
}
.element {
    display: grid;
    grid-template-areas: 
        "name name"
        "img price"
        "img description"
        "img link";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto minmax(100px, auto);
    grid-gap: 20px;
    width: 400px;
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
.element a { grid-area: link; }

.element .price {
    font-weight: bold;
}
.element .img {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    border-radius: 3px;
}
.element a {
    color: var(--color-dark);
    background: none;
}
</style>