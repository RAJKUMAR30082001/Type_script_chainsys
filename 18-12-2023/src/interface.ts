export interface product{
    productname:string
    quantity:number
}

export interface calculateprice extends product{

    calculatePriceVeg(name:string,qantity:number):number
    calculatePriceFruit(name:string,qantity:number):number
}

export interface Marketdetails{
    productname:string
    price?:number

}