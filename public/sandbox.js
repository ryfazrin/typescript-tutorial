"use strict";
// let greet = () => {
//   console.log('hello, world');
// }
// greet = 'hello';
let greet;
greet = () => {
    console.log('hello, again');
};
const add = (a, b = 10, c) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10, '20');
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
// result = 'something else';
