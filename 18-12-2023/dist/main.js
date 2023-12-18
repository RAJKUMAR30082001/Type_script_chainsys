"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetDetails {
    constructor(product) {
        if (product) {
            this._nameofproduct = product.productname;
            this._quantity = product.quantity;
        }
    }
    get productname() {
        return this._nameofproduct;
    }
    get quantity() {
        return this._quantity;
    }
}
class CalculatePrice extends GetDetails {
    constructor() {
        super(...arguments);
        this.detailsInstance = new GetDetails();
        this.productDetailsVeg = {
            carrot: {
                productname: 'carrot',
                price: 10,
            },
            raddish: {
                productname: 'raddish',
                price: 20,
            },
            tomato: {
                productname: 'tomato',
                price: 30,
            }
        };
        this.productDetailsfruit = {
            apple: {
                productname: 'apple',
                price: 100,
            },
            mango: {
                productname: 'mango',
                price: 150,
            },
            orange: {
                productname: 'orange',
                price: 30,
            }
        };
    }
    findProduct() {
        const productname = this.detailsInstance.productname;
        if (Object.keys(this.productDetailsfruit).includes(productname)) {
            return 'Fruit';
        }
        else if (Object.keys(this.productDetailsVeg).includes(productname)) {
            return 'Vegetable';
        }
    }
    calculatePriceVeg(name, quantity) {
        for (let i in this.productDetailsVeg) {
            if (name === i) {
                const price = this.productDetailsVeg[i].price;
                return price * quantity;
            }
        }
        return 0;
    }
    calculatePriceFruit(name, quantity) {
        for (let i in this.productDetailsfruit) {
            if (name === i) {
                const price = this.productDetailsfruit[i].price;
                return price * quantity;
            }
        }
        return 0;
    }
}
const Button = document.getElementById('submit');
Button.addEventListener('click', () => {
    const productName = document.getElementById('productName');
    const Quantity = document.getElementById('quantity');
    const name = productName.value;
    const quantity = parseInt(Quantity.value);
    if (isNaN(quantity)) {
        alert('Please enter a valid quantity.');
        return;
    }
    let price = 0;
    const CalculatePriceObj = new CalculatePrice({ productname: name, quantity: quantity });
    const type = CalculatePriceObj.findProduct();
    if (!type) {
        alert('Invalid Product Name');
    }
    else if (type === 'Fruit') {
        price = CalculatePriceObj.calculatePriceFruit(name, quantity);
    }
    else if (type === 'Vegetable') {
        price = CalculatePriceObj.calculatePriceVeg(name, quantity);
    }
    const printPrice = document.getElementById('displaytot');
    console.log(price);
    if (printPrice) {
        printPrice.innerHTML = `Total Price is: ${price}`;
    }
    else
        alert("no value");
});
