import { product, calculateprice as CalculatePriceInterface, Marketdetails } from "./interface";

class GetDetails implements product {
    public _nameofproduct!: string;
    public _quantity!: number;

    constructor(product?: product) {
        if (product) {
            this._nameofproduct = product.productname;
            this._quantity = product.quantity;
        }
    }

    get productname(): string {
        return this._nameofproduct;
    }

    get quantity(): number {
        return this._quantity;
    }
}

class CalculatePrice extends GetDetails implements CalculatePriceInterface, product, Marketdetails {
    public detailsInstance = new GetDetails();
    public productDetailsVeg: { [key: string]: Marketdetails } = {
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
    public productDetailsfruit: { [key: string]: Marketdetails } = {
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

    findProduct(): string | undefined {
        const productname: string = this.detailsInstance.productname;
        if (Object.keys(this.productDetailsfruit).includes(productname)) {
            return 'Fruit';
        } else if (Object.keys(this.productDetailsVeg).includes(productname)) {
            return 'Vegetable';
        }
    }

    calculatePriceVeg(name: string, quantity: number): any {
        for (let i in this.productDetailsVeg) {
            if (name === i) {
                const price: number|any = this.productDetailsVeg[i].price;
                return price * quantity;
            }
        }
        return 0;
    }

    calculatePriceFruit(name: string, quantity: number):any {
        for (let i in this.productDetailsfruit) {
            if (name === i) {
                const price: number|any = this.productDetailsfruit[i].price;
                return price * quantity;
            }
        }
        return 0;
    }
}

const Button = document.getElementById('submit') as HTMLButtonElement;

Button.addEventListener('click', () => {
    const productName = document.getElementById('productName') as HTMLInputElement;
    const Quantity = document.getElementById('quantity') as HTMLInputElement;

    const name: string = productName.value;
    const quantity: number = parseInt(Quantity.value);

    if (isNaN(quantity)) {
        alert('Please enter a valid quantity.');
        return;
    }

    let price:number=0;
    const CalculatePriceObj = new CalculatePrice({ productname: name, quantity: quantity });
    const type: string | undefined = CalculatePriceObj.findProduct();

    if (!type) {
        alert('Invalid Product Name');
    } else if (type === 'Fruit') {
        price = CalculatePriceObj.calculatePriceFruit(name, quantity);
    } else if (type === 'Vegetable') {
        price = CalculatePriceObj.calculatePriceVeg(name, quantity);
    }

    const printPrice = document.getElementById('displaytot') as HTMLParagraphElement;
    console.log(price)
    if (printPrice) {

        printPrice.innerHTML = `Total Price is: ${price}`;
    }
    else alert("no value")
});
