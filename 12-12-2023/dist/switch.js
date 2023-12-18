"use strict";
// Function to generate a random month number (1-12)
const generateRandomMonth = () => Math.floor(Math.random() * 12) + 1;
// Use a descriptive variable name and const
const randomMonth = generateRandomMonth();
console.log(randomMonth);
// Switch case to determine the month and log the corresponding message
switch (randomMonth) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    default:
        // Check for seasons if the month is not January, February, or March
        if (randomMonth >= 3 && randomMonth <= 7) {
            console.log('Spring');
        }
        else if (randomMonth >= 8 && randomMonth <= 12) {
            console.log('Autumn');
        }
}
