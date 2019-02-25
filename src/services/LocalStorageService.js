class LocalStorageService {
    constructor() {}
    getValue(name) {
        var value = localStorage.getItem(name);
        if (value !== null) {
            return value;
        }
        return false;   
    }
    putValue(name, value) {
        localStorage.setItem(name, value);  
    }
    removeValue(name) {
        localStorage.removeItem(name);
    }
}

export var localStorageService = new LocalStorageService();
