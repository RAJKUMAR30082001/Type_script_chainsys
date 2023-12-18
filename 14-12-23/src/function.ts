//function with default parameter

function addd(a:number,b:number=10):number{//b is defined default parameter
    return a+b;
}
console.log(addd(7))// a is a actual parameter

//rest parameter
function removedup(a:number[]):Set<number>{
    let arr=new Set(a);//set function always have unique value 
    
    return arr
}
console.log(removedup([1,1,12,3,45,6,75,75,3]))