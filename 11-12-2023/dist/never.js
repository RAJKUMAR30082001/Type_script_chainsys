"use strict";
// never type is used to indicate the function did not return any value
//it does not going to reach end of the function
//error throwing and infinite loop containing function using this type to specify never return anything
const value = (message) => {
    throw new Error(message);
};
value("I have error");
function neverReturn() {
    while (true) {
        console.log("This is an infinite loop");
    }
}
//neverReturn is called
neverReturn();
