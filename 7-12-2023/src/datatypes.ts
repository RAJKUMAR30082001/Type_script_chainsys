const s: string='hii I am string'
const num: number=40
const bool: boolean=false 
const student: {
    name: string;
    age: number;
    isStudent: boolean;
  } = {
    name: "raj",
    age: 22,
    isStudent: true,
  };

console.log(`${typeof(s)}  ${s}`)
console.log(`${num}:${typeof(num)} `)
console.log(`${bool}:${typeof(bool)} `)

console.log(`${student.name}:${typeof(student)} `)
console.log(student)