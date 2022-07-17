// let greet = () => {
//   console.log('hello, world');
// }

// greet = 'hello';

let greet: Function;

greet = () => {
  console.log('hello, again');
}

const add = (a: number, b: number = 10, c?: number|string) => {
  console.log(a + b);
  console.log(c);
}

add(5, 10, '20');

const minus = (a: number, b: number) => {
  return a + b;
}

let result = minus(10, 7);
// result = 'something else';