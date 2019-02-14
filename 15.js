//             NODEJS Xử lý bất đồng bộ – Bài 15: Async function trả về promise

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

// muốn tái sử dụng thì ta sử dụng promise thay callback function để handle kết quả trả về

let tinhDienTich = async (a, b, h) => {
  try {
    let ab = await add(a, b);
    let abh = await multiply(ab, h);
    let square = await divide(abh, 2);
    return Promise.resolve(square);
  } catch (err) {
    return Promise.reject(err);
  }
};

tinhDienTich(4, 5,' 6')
.then(res => console.log(res))
.catch(err => console.log(err + ''));

