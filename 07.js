//                      NODEJS Xử lý bất đồng bộ – Bài 7: Tái sử dụng promise

// Vậy Promise là một gói dùng để quản lý kết quả trả về của một hành động Asycn (bất đồng bộ)
// và nó vừa được bổ sung vào ngôn ngữ Javascript từ version ES6.

let fs = require('fs');

let add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof a != 'number' || typeof b != 'number') {
        return reject(new Error('Tham so phai kieu number'));
      }
      resolve(a + b);
    }, 2000);
  });
}

// add(4, 6)
// .then(res => console.log('Ket qua: ' + res), err => console.log(err + ''));


// fs.readFile('./a.txt', 'utf8', (err, data) => {
//   if(err) return console.log('Loi: ' + err);
//   console.log(data);
// });



// let promiseRead = new Promise((resolve, reject) => {
//   fs.readFile('./a.txt', 'utf8', (err, data) => {
//     if(err) return reject(err);
//     resolve(data);
//   });
// });

// promiseRead.then(data => console.log(data), err => console.log(err + ''));


let read = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
      if(err) return reject(err);
      resolve(data);
    })
  });
}

read('./a.txt').then(data => console.log(data), err => console.log(err + ''));


