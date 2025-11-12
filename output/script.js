// let fruits = ["mango", "apple", "banana"]
// fruits.push(4)
// console.log(fruits)
// let a: number[] = [];
// a.push("john")  //error coz, variable is defined as number
// let b: string | number;
// // array
// let a: (string | number)[] = []
// b = "sumit"
// a.push('sumit', 4, false) //false is red  cos bolean vlue not defined
// Lesson 5 - Dynamic Type - TypeScript Bangla ( বাংলা ) Tutorial Series
// let a: any[] = []
// a.push("Bangladesh")
// a.push(34)
// // object
// let b: {
//     name: any,
//     age: any
// }
// b = {
//     name: "bangladesh",
//     age: 45
// }
// Lesson 6 - How to use Functions -
const myFunc = (a, b, c = "true") => {
    console.log(`Hello ${a} ${b}`);
};
myFunc('A', 'B');
export {};
