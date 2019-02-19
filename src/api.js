import productsList from './assets/json/catalog.json'

class Api {
    constructor() {}
    getProductsList() {
        var promise = new Promise(function(resolve, reject) {
            const isSuccess = (Math.random() * 100) <= 99;
            if (isSuccess) {
                if (productsList !== '') {
                    resolve(productsList);
                } else {
                    resolve([]);
                }
            } else {
                reject(new Error('api error'));
            }
        });
        return promise;
    }
}

export var api = new Api();
