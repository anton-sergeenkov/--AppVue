export class CartService {
    
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
            var isNewProduct = true;
        } else {
            products.splice(index, 1);
            var isNewProduct = false;
        }

        localStorage.setItem('products', JSON.stringify(products));  

        return {
            isNewProduct: isNewProduct,
            count: products.length
        }
    }

    putProductCounter() {
        var products = this.getProducts();
        return products.length;
    }
}