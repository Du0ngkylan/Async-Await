//             NODEJS Xử lý bất đồng bộ – Bài 10: Phương thức resolve và reject

// Về cơ bản có 2 cách sử dụng Resolve/Reject trong Promise của Javascript:
// Cách 1: Sử dụng hàm static của class Promise:
//     return Promise.reject() & return Promise.resolve()

// Cách 2: Sử dụng trong intance của Promise:
//     return new Promise(function(resolve, reject) {
//
//        resolve(); //or reject();
//
//     })

let add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a != 'number' || typeof b != 'number') {
        return reject(new Error('Tham so phai co kieu number'));
      }
      resolve(a + b);
    }, 2000);
  });
}

// - resolve có thể nhận vào là 1 giá trị hoặc 1 Promise
//   + nếu truyền vào là giá trị thì nó trả về 1 Promise có trạng thái PromiseStatus là 'resolved'
//        và PromiseValue là giá trị được truyền vào.
//   + nếu truyền vào là 1 Promise thì chúng ta có thể sử dụng phương thức then() và catch() với nó.

// let let aPromise = Promise.resolve(4);

// let aPromise = Promise.resolve(add(4,5));
// aPromise.then(res => console.log(res));
// console.log(aPromise);

let rPr = Promise.reject('Bi loi');
rPr.catch(err => console.log(err + ''));
console.log(rPr);

