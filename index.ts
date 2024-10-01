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

//creating object from previously defined type
const u1: User = {
  _id: 5,
  name: "neo",
  roll_number: 505,
  good: true,
};

console.log(Object.keys(u1));
