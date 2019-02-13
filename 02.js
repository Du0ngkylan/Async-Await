// Hàm higher-order và hàm callback là gì?

// Hàm higher-order (higher-order function) là hàm có hoạt động dựa trên 1 hàm khác, tức là:
// nó có thể nhận hàm (function) làm tham số đầu vào,
// hoặc sẽ return ra 1 hàm khác. Một trong 2 điều kiện đó xảy ra thì được gọi là hàm higher-order.

// Hàm callback làm hàm được truyền vào “hàm-khác” như một tham số đầu vào,
// sau đó sẽ được gọi kích hoạt bên trong “hàm-khác” này.


let mang = [5, 6, 1, 8, 9];

var nhan2 = e => e * 2;

var mang1 = mang.map(nhan2);

console.log(mang1);


// Một function trả về 1 function

let getFunction = (num) => {
  if(num >= 0) return () => console.log('so duong');
  return () => console.log('so am');  
};

getFunction(1)();

// Một function không return thì sẽ trả về undefined

let a = () => {};

console.log(a());


