// import { Size } from "./interface";
export class CalculatePrice {
    constructor(item) {
        this.TotalPrice = 0;
        this.productDetail = {
            carrot: {
                productname: 'carrot',
                price: 10,
            },
            banana: {
                productname: 'banana',
                price: 20,
            },
            tomato: {
                productname: 'tomato',
                price: 30,
            },
            mango: {
                productname: 'mango',
                price: 40,
            },
            onion: {
                productname: 'onion',
                price: 50,
            }
        };
        this.ProductDetails = [];
        if (item && typeof item.pantSize == 'string') {
            this._productname = item.productname;
            this._quantity = item.quantity;
            this._size = item.pantSize;
            this.Calculateprice();
        }
        else if (item) {
            this._productname = item.productname;
            this._quantity = item.quantity;
            this.Calculateprice();
        }
    }
    get productname() {
        return this._productname;
    }
    get quantity() {
        return this._quantity;
    }
    Calculateprice() {
        if (this._size) {
            this._size = this._size.toLowerCase();
            const price = this._size === 'xl' ? 100 : this._size === 'xxl' ? 200 : this._size === 'L' ? 300 : 0;
            this.TotalPrice = price * this._quantity;
            const ProductDetailsDis = `Product Name: ${this._productname}, Quantity: ${this._quantity}, Size:
            ${this._size}, Price per Item: $${price}/-, Total Price: $${this.TotalPrice}/-`;
            this.ProductDetails.push(ProductDetailsDis);
        }
        else {
            this._productname = this._productname.toLowerCase();
            const product = this.productDetail[this._productname];
            if (product) {
                const priceOfVeg = product.price;
                this.TotalPrice = priceOfVeg * this._quantity;
                const ProductDetailsDis = `Product Name: ${this._productname}, Quantity: ${this._quantity}, Price per Item: $${priceOfVeg}/-, Total Price: $${this.TotalPrice}/-`;
                this.ProductDetails.push(ProductDetailsDis);
            }
            else {
                console.error(`Product '${this._productname}' not found in product details.`);
            }
        }
    }
    displayBill() {
        // console.log(this.ProductDetails,"worked")
        const FinalPrice = `Total Price:${this.TotalPrice}`;
        this.ProductDetails.push(FinalPrice);
        return this.ProductDetails;
    }
}
