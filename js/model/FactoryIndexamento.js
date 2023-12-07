export class FactoryIndexamento{
    constructor(item){
        this._indexaItem(item);
    }

    _indexaItem(item){
        const indexLocalStorage = Object.keys(localStorage).length;
        localStorage.setItem(indexLocalStorage + 1, JSON.stringify(item));
    }
}