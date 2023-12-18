"use strict";
// Abstract class for supermarkets
class Supermarket {
    constructor(name, discount) {
        this.name = name;
        this.discount = discount;
    }
    // Method to calculate the discount amount
    calculateDiscount() {
        const value = this.discount / 100;
        return this.obtainPrice() * value;
    }
    // Method to get the discount details
    getDiscount() {
        console.log(`Name: ${this.name} with price: ${this.obtainPrice()}`);
        console.log(this.obtainPrice() - this.calculateDiscount());
    }
}
// Concrete class for fruits
class Fruits extends Supermarket {
    constructor(name, discount, price) {
        super(name, discount);
        this.name = name;
        this.discount = discount;
        this.price = price;
        this.price = price;
    }
    obtainPrice() {
        return this.price;
    }
}
// Concrete class for vegetables
class Vegetables extends Supermarket {
    constructor(name, discount, price) {
        super(name, discount);
        this.name = name;
        this.discount = discount;
        this.price = price;
        this.price = price;
    }
    obtainPrice() {
        return this.price;
    }
}
// Concrete class for cloths
class Cloths extends Supermarket {
    constructor(name, discount, price) {
        super(name, discount);
        this.name = name;
        this.discount = discount;
        this.price = price;
        this.price = price;
    }
    obtainPrice() {
        return this.price;
    }
}
// Create an array for fruits
const fruitArray = [];
const fruitNames = ['apple', 'orange', 'mango'];
const fruitCosts = [100, 200, 300];
for (let i = 0; i < fruitNames.length; i++) {
    const fruitObj = new Fruits(fruitNames[i], 10, fruitCosts[i]);
    fruitArray.push(fruitObj);
}
// Create instances for fruits, vegetables, and cloths
const vegObj = new Vegetables('carrot', 20, 300);
vegObj.getDiscount();
const clothObj = new Cloths('pant', 30, 1200);
clothObj.getDiscount();
// Iterate over fruitArray and call getDiscount for each fruit
for (const fruit of fruitArray) {
    fruit.getDiscount();
}
