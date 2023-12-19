export interface ProductDetails{
    productname:string
    quantity:number
    
}
export interface ProductDetailsWithPant extends ProductDetails{
    pantSize?:string
}
export interface Marketdetails{
    productname:string
    price:number

}



  