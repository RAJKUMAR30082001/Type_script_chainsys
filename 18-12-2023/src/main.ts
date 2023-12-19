import { product, calculateprice as CalculatePriceInterface, Marketdetails } from "./interface";

class GetDetails implements product {
    public _nameofproduct!: string;
    public _quantity!: number;

    constructor(product?: product) {
        if (product) {
            this._nameofproduct = product.productname;
            this._quantity = product.quantity;
            console.log(this._nameofproduct)
        }
    }

    get productname(): string {
        console.log(this._nameofproduct,"worked")
        return this._nameofproduct;
    }

    get quantity(): number {
        return this._quantity;
    }
}

class CalculatePrice extends GetDetails implements CalculatePriceInterface, product, Marketdetails {
    public detailsInstance = new GetDetails();
    constructor(p:product){
        super(p)
    }
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

    findProduct(name:string): string {
        const productname: string = name;
        console.log(productname)
        if (Object.keys(this.productDetailsfruit).includes(productname)) {
            return 'Fruit';
        } else if (Object.keys(this.productDetailsVeg).includes(productname)) {
            return 'Vegetable';
        }
        return "not a type"
    }

    calculatePriceVeg(name: string, quantity: number): number|any {
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
    console.log("hi")
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
    const type: string | undefined = CalculatePriceObj.findProduct(CalculatePriceObj.productname);
    console.log(CalculatePriceObj.productname)
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
