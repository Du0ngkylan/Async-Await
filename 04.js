//                       NODEJS Xử lý bất đồng bộ – Bài 4: Callback function

// Khái niệm về callback :
// Nói một cách dễ hiểu, callback tức là ta truyền một đoạn code (Hàm A) này vào một đoạn code khác (Hàm B).
// Tới một thời điểm nào đó, Hàm A sẽ được hàm B gọi lại (callback).

let square = (a, b, h) => (a + b) * h / 2;

console.log('Dien Tich: ' + square(2, 3, 3));


// giả sử các tác vụ bất đồng bộ sau :
// thao tác bất đồng bộ thường có thể xảy ra lỗi...
// hiểu ngầm cb(err, result)

let add = (a, b, cb) => {
  setTimeout(() => {
    if(typeof a != 'number' || typeof b != 'number') {
      return cb(new Error('Tham so phai co kieu number'));
    }
    cb(undefined, a + b);
  }, 1000);
}

add('4', 5, (err, res) => {
  if(err) return console.log('Loi ' + err);
  console.log('Ket qua: ' + res);
});

