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
    authorizate(login, password) {
        var promise = new Promise(function(resolve, reject) {
            if ( (login == 'admin') && (password == '123') )  { 
                resolve({token: 'Успешно'});
            } else { 
                reject(new Error('Неверный логин или пароль'));
            }
        });
        return promise;
    }
}

export var api = new Api();
