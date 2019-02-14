//                NODEJS Xử lý bất đồng bộ – Bài 11: Phương thức all và race

let add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a != 'number' || typeof b != 'number') {
        return reject(new Error('Tham so phai co kieu number PHEP CONG'));
      }
      resolve(a + b);
    }, 2000);
  });
}

let multiply = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof a != 'number' || typeof b != 'number') {
         return reject(new Error('Tham so phai co kieu number PHEP NHAN'));
      }
      resolve(a * b);
    }, 2000);
  });
}

// Phương thức all truyền vào 1 list các Promise
// câu lệnh handle kết quả trả về chỉ được gọi khi và chỉ khi tất cả các promise truyền vào đều resolve.
// trường hợp xảy ra lỗi thì sẽ trả về lỗi của promise bị reject trước.

// Promise.all([add(4, 5), multiply(2, 8)])
// .then(res => console.log(res))
// .catch(err => console.log(err + ''));


// Phương thức race truyền vào 1 list các Promise
// lấy giá trị promise trả về đầu tiên.
Promise.race([add(3,'5'), multiply(5, 6)])
.then(res => console.log(res))
.catch(err => console.log(err + ''));

