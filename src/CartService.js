export class CartService {
    constructor() {
        //
    }
    getProducts() {
        var products = [];
        var productsLocalStorage = localStorage.getItem('products');
        if (productsLocalStorage !== null) {
            products = JSON.parse(productsLocalStorage);
        }
        return products;
    }

    putProduct(id) {
        var products = this.getProducts();
        var index = products.indexOf(id);

        if (index === -1) {
            products.push(id);
        } else {
            products.splice(index, 1);
        }

        localStorage.setItem('products', JSON.stringify(products));  

        return products;
    }

    putProductCounter() {
        var products = this.getProducts();
        return products.length;
    }
}
