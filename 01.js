// tìm hiểu về var, let/const và arrow function

let mang = [3, 6, 1, 9, 5];

mang.forEach(e => console.log(e));

var mang1 = mang.map(e => e * e);

console.log(mang1);


// function add(a, b) {
//   return a + b;
// }

let add = (a, b) => a + b;
console.log(add(4, 5));

