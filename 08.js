//                  NODEJS Xử lý bất đồng bộ – Bài 8: Promise liên tiếp

// Để giải quyết vấn đề callback hell chúng ta phải sử dụng các promise liên tiếp nhau

let add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof a != 'number' || typeof b != 'number') {
         return reject(new Error('Tham so phai co kieu number'));
      }
      resolve(a + b);
    }, 2000);
  });
}

let multiply = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof a != 'number' || typeof b != 'number') {
         return reject(new Error('Tham so phai co kieu number'));
      }
      resolve(a * b);
    }, 2000);
  });
}

let divide = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof a != 'number' || typeof b != 'number') {
         return reject(new Error('Tham so phai co kieu number'));
      }
      if(b == 0) return reject(new Error('Chia cho so 0'));
      resolve(a / b);
    }, 2000);
  });
}


// phương thức then ngoài việc sử lý resolve do mà Promise trả về.
// nó còn return về 1 Promise

// ví dụ tính biểu thức : (4 + 5) + 6
add(4, 5)
.then(res => add(res, 6), err => console.log(err + ''))
.then(result => console.log('Ket qua la: ' + result), err => console.log(err + ''))

// có cách nào để dừng 1 chuỗi Promise lại khi nó đụng phải reject

add('4', 5)
.then(res => add(res, 6))
.then(result => console.log('Ket qua la: ' + result))
.catch(err => console.log(err + ''))


// làm lại ví dụ tính diện tích hình thang
// DT = (a + b) * h / 2

let tinhDienTich = (a, b, h) => {
  return add(a, b)
  .then(res => multiply(res, h))
  .then(result => divide(result, 2))
};

tinhDienTich(6, 4, 5)
.then(square => console.log('Dien tich hinh thang = ' + square))
.catch(err => console.log(err + ''));


