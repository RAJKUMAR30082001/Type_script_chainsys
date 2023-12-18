const a:number[]=[1,2,3,4,5]//array with manipulation
for (const element of a){
    console.log(element)
}

let tup:[string,number,number|string,boolean]
tup = ["hello", 7, 'raj', true]; //tuple declaration and assignment
console.log(tup)



// Using an object to associate additional data with each enum member
enum Fruit {
    Apple = 'Apple',
    Banana = 'banana',
    Orange = 'Orange',
  }
  
  const fruitPrices: Record<Fruit, number> = {
    [Fruit.Apple]: 1.0,
    [Fruit.Banana]: 0.5,
    [Fruit.Orange]: 1.2,
  };
  
  console.log(fruitPrices);
  console.log(Fruit)  


//any

let x: any = "I am not checked by TS";
x = 42;
console.log(x)

//void

function sum(x:number,y:number): void{
    console.log(x+y)
}
sum(3,4)