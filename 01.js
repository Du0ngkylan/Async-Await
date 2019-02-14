//                   NODEJS Xử lý bất đồng bộ – Bài 1: Từ khóa let và arrow function ES6

// tìm hiểu về var, let/const và arrow function

// - const dùng để khai báo một hằng số - là một giá trị không thay đổi được trong suốt quá trình chạy.
// - let tạo ra một biến chỉ có thể truy cập được trong block bao quanh nó,
//   khác với var - tạo ra một biến có phạm vi truy cập xuyên suốt function chứa nó.
// - khi ở global scope (tức là không nằm trong một function nào cả),
//   từ khóa var tạo ra thuộc tính mới cho global object (this), còn let thì không:
// - Có một trường hợp dùng let rất hiệu quả đó là sử dụng callback trong một vòng lặp.

// ví dụ:
// nếu dùng var :
// for (var i = 0; i < 5; i++) {
//    setTimeout(function(){ 
//       console.log('Yo! ', i);
//    }, 1000);
// }

// thay var bằng let
// for (let i = 0; i < 5; i++) {
//    setTimeout(function(){ 
//       console.log('Yo! ', i);
//    }, 1000);
// }

let mang = [3, 6, 1, 9, 5];

mang.forEach(e => console.log(e));

var mang1 = mang.map(e => e * e);

console.log(mang1);

// function add(a, b) {
//   return a + b;
// }

let add = (a, b) => a + b;
console.log(add(4, 5));
