import productsList from './assets/json/catalog.json'

class Api {
    constructor() {}
    getProductsList() {
        var promise = new Promise(function(resolve, reject) {
            if (productsList !== '') {
                resolve(productsList);
            } else {
                reject('Нет данных');
            }
        });
        return promise;
    }
}

export var api = new Api();
