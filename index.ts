// RUNNING A TS FILE
// Save any of these examples in a .ts file, e.g., index.ts.
// Compile the TypeScript file to JavaScript using:
// 	tsc index.ts
// Run the generated JavaScript file using Node.js:
// node index.js

//creating a type
type User = {
  readonly _id: number;
  name: string;
  roll_number: number;
  good: boolean;
};
//readonly means we cannot edit this field
const user: User = {
  _id: 1,
  name: "Alice",
  roll_number: 123,
  good: true,
};
// Trying to change the _id property will result in a TypeScript error
user._id = 2; // Error: Cannot assign to 'id' because it is a read-only property

//creating object from previously defined type
const u1: User = {
  _id: 5,
  name: "neo",
  roll_number: 505,
  good: true,
};

//UNION TYPES
type WindowState = "open" | "closed" | "minimized";
let score : string, number =30;
score = 50; //valid
score =true; //invalid since no boolean type

//CHECK
let state: WindowState = "open";  // Valid
state = "closed";  // Valid
state = "not open";

//example
type name = {
  username: string;
  name: string;
  roll_no: number;
};

const u1: name | { username: number; name: number } = {
  username: 22,
  name: "def",
  roll_no: 500,
};
console.log(u1);


//ARRAYS IN TS
const superHero: string[]=[];
const superHero: Array<string>=[];
superHero.push("spiderman");
superHero.push("superman");


//INTERFACE 
interface User {
  name: string;
  roll_no: number;
  state: string;
}
const user1: User = { name: "abc", roll_no: 20, state: "assam" };
user1.roll_no = 10;
console.log(user1);

//INTERFACE VS TYPE:
//DEFINING
interface Person {
    name: string;
    age: number;
}

type Person = {
    name: string;
    age: number;
};
//DEFFERENCE
When to Use:
Use interface when defining object structures or class contracts.
Use type for unions, intersections, or complex types like string | number.

//CLASS
class Product {
  private name: string;
  private age: number;
  constructor(x: string, y: number) {
    this.name = x;
    this.age = y;
  }
  displayInfo() {
    console.log(`Name is ${this.name} and age is ${this.age}`);
  }
}

const p1 = new Product("shirt", 4000);
//p1.age = 20; // error because age is private memeber of the class
p1.displayInfo();
const p2 = new Product("trouser", 1500);
p2.displayInfo();
const p3 = new Product("tshirt", 2500);
p3.displayInfo();

  



