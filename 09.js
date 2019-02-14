//             NODEJS Xử lý bất đồng bộ – Bài 9: Promise status và Promise value

// Promise có 3 trạng thái Pending - Fulfilled - Rejected
// - Pending là trạng thái khi bạn khởi tạo một Promise nhưng chưa thiết lập kết quả cho nó,
//   tức là chưa sử dụng resolve và reject.
// - Fulfilled còn được gọi là resolved, đây là trạng thái của Promise đã thành công,
//   trạng thái này xảy ra khi bạn sử dụng resolve.
// - Rejected là trạng thái thao tác thất bại, trạng thái này xảy ra khi bạn sử dụng reject.
//   Khi bạn sử dụng reject thì bắt buộc phải khai báo hành động xử lý cho nó (tức sử dụng then hoặc catch).


// PromiseStatus :
// PromiseValue : 
// khi 'pending' thì PromiseValue  là undifined
// khi 'resolved' thí PromiseValue là giá trị của Promise trả về


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

let a = add(4, 5)
.then(result => {
  console.log('Then thu nhat: ' + result);
  return 'Ket qua: ' + result;
}, err => {
  console.log(err + '');
  return 'Bi loi'
})
.then((b) => console.log('Thanh cong roi!' + b));

console.log(a);
setTimeout(() => console.log(a), 2500);

// Thứ tự thực hiện của câu lệnh then : câu lệnh then nào viết trước được thực hiện trước.
// giá trị của câu lệnh then tiếp theo nó lấy theo giá trị return của câu lệnh then phía trước.

