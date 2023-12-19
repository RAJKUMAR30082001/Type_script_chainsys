import { CalculatePrice } from "./calculation.js";
const resultContainer = document.getElementById("display");
const submitButton = document.getElementById("btn");
submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    resultContainer.innerHTML = "";
    const vegetableContainer = document.querySelector(".vegetable-container");
    let Total = 0;
    if (vegetableContainer) {
        const divElementsInsideContainer = vegetableContainer.querySelectorAll("div");
        divElementsInsideContainer.forEach((divElement, index) => {
            const checkbox = divElement.querySelector('input[type="checkbox"]');
            const inputBox = divElement.querySelector('input[type="number"]');
            if (checkbox && checkbox.checked) {
                const checkboxValue = checkbox.value;
                const quantity = parseInt(inputBox.value);
                // Check if quantity is a valid number
                if (!isNaN(quantity)) {
                    let size = undefined;
                    if (checkboxValue === 'pant') {
                        const sizeBox = divElement.querySelector('input[type="text"]');
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
                    resultContainer.innerHTML += calculatePriceObj.ProductDetails + "<br>";
                    Total += calculatePriceObj.TotalPrice;
                }
                else {
                    alert(`Invalid quantity for Checkbox ${index + 1}`);
                }
            }
            else {
                console.log(`Checkbox ${index + 1} is not checked`);
            }
        });
    }
    else {
        console.log("No element found with the specified class");
    }
    // const calculatePriceObj=new CalculatePrice()
    // const displayBill:string[]=calculatePriceObj.displayBill()
    // console.log(displayBill,"display bill")
    //     for (let i of displayBill){
    //         console.log(i,"i am i")
    //         resultContainer.innerHTML+=i+"<br>"
    //     }
    resultContainer.innerHTML += `total price:${Total}`;
});
