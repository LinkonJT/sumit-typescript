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

// const myFunc = (a: string, b: string, c: string="true")=>{
//     console.log(`Hello ${a} ${b}`)
// }

// myFunc('A', 'B')

// Lesson 7 - Type Aliases 

// type stringOrNum= string | number
// type userType = {name: string; age: number}

// const userDetails = (
//     id: stringOrNum,
//     user: userType
// )=> {
//     console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`)
// }

// const sayHello = (user: userType)=> {
//     console.log(`Hello ${user.age > 50 ? "sir" : "Mr"} ${user.name}`)
// }

// Lesson 8 - Function Signatures 

// let add: (x: number, y: number) => number;

// add = (a: number, b: number) =>{
//     console.log(a+b)
//     return a+b;
// }


// let calculation: (x: number, y: number, z: string) => number;

// calculation = (a: number, b: number, c: string) =>{
//     if(c === "add"){
//         return a+b
//     } else {
//         return a - b;
//     }
// }


// Lesson 9 - Classes
class Player {
    name: string;
    age: number;
    country: string;

    constructor(n: string, a:Number, c: string){
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`)
    }

}

const masrafi =  new Player("Mashrafi", 40, 'Bangladesh')
const saking =  new Player("Sakib", 38, 'Bangladesh')

const players:Player[] = [];

players.push(sakib);
players.push(mashrafi)
