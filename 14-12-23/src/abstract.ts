// Abstract class for supermarkets
abstract class Supermarket {
    constructor(public name: string, public discount: number) {}

    // Abstract method to obtain the price
    abstract obtainPrice(): number;

    // Method to calculate the discount amount
    calculateDiscount(): number {
        const value = this.discount / 100;
        return this.obtainPrice() * value;
    }

    // Method to get the discount details
    getDiscount(): void {
        console.log(`Name: ${this.name} with price: ${this.obtainPrice()}`);
        console.log(this.obtainPrice() - this.calculateDiscount());
    }
}

// Concrete class for fruits
class Fruits extends Supermarket {
    constructor(public name: string, public discount: number, public price: number) {
        super(name, discount);
        this.price = price;
    }

    obtainPrice(): number {
        return this.price;
    }
}

// Concrete class for vegetables
class Vegetables extends Supermarket {
    constructor(public name: string, public discount: number, public price: number) {
        super(name, discount);
        this.price = price;
    }

    obtainPrice(): number {
        return this.price;
    }
}

// Concrete class for cloths
class Cloths extends Supermarket {
    constructor(public name: string, public discount: number, public price: number) {
        super(name, discount);
        this.price = price;
    }

    obtainPrice(): number {
        return this.price;
    }
}

// Create an array for fruits
const fruitArray: Fruits[] = [];
const fruitNames: string[] = ['apple', 'orange', 'mango'];
const fruitCosts: number[] = [100, 200, 300];

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

