import { CalculatePrice } from "./calculation";
import { ProductDetails, ProductDetailsWithPant } from "./interface";
const resultContainer = document.getElementById("display") as HTMLParagraphElement

const submitButton = document.getElementById("btn") as HTMLButtonElement;
submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    resultContainer.innerHTML=""
    const vegetableContainer = document.querySelector(".vegetable-container");
    let Total:number=0
    if (vegetableContainer) {
        const divElementsInsideContainer = vegetableContainer.querySelectorAll("div");

        divElementsInsideContainer.forEach((divElement, index) => {
            const checkbox = divElement.querySelector('input[type="checkbox"]') as HTMLInputElement;
            const inputBox = divElement.querySelector('input[type="number"]') as HTMLInputElement;

            if (checkbox && checkbox.checked) {
                const checkboxValue: string = checkbox.value;
                const quantity: number = parseInt(inputBox.value);

                // Check if quantity is a valid number
                if (!isNaN(quantity)) {
                    let size: string | undefined = undefined;

                    if (checkboxValue === 'pant') {
                        const sizeBox = divElement.querySelector('input[type="text"]') as HTMLInputElement;
                        size = sizeBox.value;
                    }

                    const calculatePriceObj = new CalculatePrice({
                        productname: checkboxValue,
                        quantity: quantity,
                        pantSize: size,
                    });

                    // Do something with the calculated price or product details
                    // console.log("Product Details:", calculatePriceObj.ProductDetails);
                    // console.log("Total Price:", calculatePriceObj.TotalPrice);
                    resultContainer.innerHTML+=calculatePriceObj.ProductDetails+"<br>"
                    Total+=calculatePriceObj.TotalPrice
                } else {
                    alert(`Invalid quantity for Checkbox ${index + 1}`);
                }
            } else {
                console.log(`Checkbox ${index + 1} is not checked`);
            }
        });
    } else {
        console.log("No element found with the specified class");
    }
    // const calculatePriceObj=new CalculatePrice()
    // const displayBill:string[]=calculatePriceObj.displayBill()
    // console.log(displayBill,"display bill")
    //     for (let i of displayBill){
    //         console.log(i,"i am i")
    //         resultContainer.innerHTML+=i+"<br>"
    //     }
    resultContainer.innerHTML+=`total price:${Total}`
});


