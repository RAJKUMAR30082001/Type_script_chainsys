// Type aliases are used to reuse code and make it more readable

type UserName = string;
type Password = number;

function displayStudentInfo(num: Password, name: UserName): void {
    console.log(`Name of student: ${name} \nPassword: ${num}`);
}

displayStudentInfo(123456, "raj");

// We can use type alias as an object to make the code simpler

type Product = {
    name: UserName;
    price: Password;
    available: boolean;
};

function findProduct(product: Product): void {
    console.log(`Name of product: ${product.name} \nPrice: ${product.price} \nAvailable: ${product.available}`);
}

findProduct({
    name: "laptop",
    price: 12345,
    available: true
});

// We can also specify a generic type with the use of a type alias

type GenericArray<T> = [T, T, T];
let arr: GenericArray<Password> = [1,2,3];
console.log(arr);

