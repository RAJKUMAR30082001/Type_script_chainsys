// Function to add two numbers
function addNumbers(a: number, b: number): number {
  return a + b;
}

// Calling the addNumbers function explicitly
const result = addNumbers(10, 30);
console.log(result);

// Function to print elements of an array
function printArray(arr: number[]): void {
  for (const num of arr) {
      console.log(num);
  }
}

// Array of numbers
const numbersArray: number[] = [1, 2, 3, 4, 5];

// Calling the printArray function
printArray(numbersArray);

// Arrow function to calculate the sum of an array
const CalculateSum = (numbers: number[]): number => numbers.reduce((total, num) => total + num, 0);

// Calling the calculateSum arrow function
const sumResult = CalculateSum(numbersArray);
console.log("The sum is " + sumResult);
