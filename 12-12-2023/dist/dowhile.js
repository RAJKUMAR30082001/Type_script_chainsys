"use strict";
let isRunning = true;
do {
    const randomMonth = Math.floor(Math.random() * 12);
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
            const season = (randomMonth >= 3 && randomMonth <= 7) ? 'Spring' : ((randomMonth > 8 && randomMonth <= 12) ? 'Autumn' : null);
            if (season !== null) {
                console.log(season);
            }
    }
    // Set the loop condition based on the random month
    isRunning = randomMonth !== 5;
} while (isRunning);
