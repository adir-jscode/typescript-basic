/* Explicit & Union Type */

//normal variable

let a: number;

a = 23;

let code: string | number;

code = "aa50";
code = 90;

// array

let numberArray: number[] = [];

numberArray.push(9);

let stringNumberArray: (string | number)[] = [];

stringNumberArray.push(40, "backend");

//object

let person: object;

person = {
    name: "John",
    age: 34,
    married: true,
};

let student: {
    id: number,
    name: string,
    result : boolean
}

student = {
    id: 1,
    name: "Adir",
    result: true
    
}