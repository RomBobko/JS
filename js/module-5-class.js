class Car1 {
    static description = 'Class description auto';

    static logInfo(carObj) {
        console.log('Car.logInfo -> carObj', carObj);
    }

    #test = 'test';

    constructor({ brand, model, price } = {}) {
        this.brand = brand;
        this._model = model;
        this._price = price;
    }

    get price() {
        return this._price;
    }
    set price(newPrice) {
        this._price = newPrice;
    }

    get model() {
        return this._model;
    }
    set model(newModel) {
        this._model = newModel;
    }

    // changePrice(newPrice) {
    //     this.price = newPrice;
    // }

    // setModel(newModel) {
    //     this.model = newModel;
    // }

    // getModel() {
    //     return this.model;
    // }
}

console.log(Car1);

const carInstance = new Car1({
    brand: 'Audi',
    model: 'Q3',
    price: 35000,
});

console.log(carInstance.model);

carInstance.model = 'Q7';

console.log(carInstance.model);

// console.log(carInstance.getModel());

// carInstance.setModel('Q8');

// console.log(carInstance.getModel());

carInstance.price = 70600;
console.log(carInstance.price);