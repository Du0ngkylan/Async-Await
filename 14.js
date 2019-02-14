//               NODEJS Xử lý bất đồng bộ – Bài 14: Sử dụng await liên tiếp

// ví dụ qua bài toán tính diện tích hình thang

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

// let tinhDienTich = async (a, b, h) => {
//   try {
//     let ab = await add(a, b);
//     let abh = await multiply(ab, h);
//     let square = await divide(abh, 2);
//     console.log(square);
//   } catch (err) {
//     console.log(err + '');
//   }
// };


// muốn tái sử dụng thì ta sử dụng callback function để handle kết quả trả về

let tinhDienTich = async (a, b, h, cb) => {
  try {
    let ab = await add(a, b);
    let abh = await multiply(ab, h);
    let square = await divide(abh, 2);
    cb(undefined, square);
  } catch (err) {
    cb(err);
  }
};

tinhDienTich(4, 5, '6', (err, res) => {
  if(err) return console.log(err + '');
  console.log(res);
});


