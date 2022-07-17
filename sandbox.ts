// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = 'ryan';
age = 30;

// isLoggedIn = 25;
isLoggedIn = true;

// arrays
let ninjas: string[] = [];

// ninjas = ['ryan', 'mario'];

ninjas.push('shaun');

// union types
let mixed: (string|number|boolean)[] = [];
mixed.push('hello');
mixed.push(25);
mixed.push(true);

console.log(mixed);

let uid: string|number;
uid = '123';
uid = 123;

// objects
let ninjaOne: object;
ninjaOne = { name: 'ryan', age: 30 };
// ninjaOne = [];
let ninjaTwo: {
  name: string,
  age: number,
  beltColour: string
}

ninjaTwo = { name: 'mario', age: 20, beltColour: 'black' }