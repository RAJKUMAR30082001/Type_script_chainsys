// function overloading is simply a function that can change the code according to the parameter and return type
// it allows us to write one function with multiple definitions, each serving a different purpose.
// define the function signature





// function add():number//error of creating overloading because of optional parameter in ts
// function add(a:number,b:number):number;
// function add(arr:number[]):Array<number>;
// function add(a:number,b:number,arr:number[]):number|Array<number>{
//     if (arguments.length == 2) {
//         return a + b;
//         } 
//     else if (Array.isArray(arr)) {
//         let sum=0
//         arr.forEach(item=>{
//             sum += item
//         })
//         return [sum]
//     }
//     return 0
// }

// console.log(add(4,8))
// console.log(add([2,3,4,5,67]))
