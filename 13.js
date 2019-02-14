//                 NODEJS Xử lý bất đồng bộ – Bài 13: Làm quen với async – await


// Tại sao nên dùng async/await?
// - Code dễ đọc hơn rất rất nhiều, không cần phải then rồi catch gì cả,
//   chỉ viết như code chạy tuần tự, sau đó dùng try/catch thông thường để bắt lỗi.
// - Viết vòng lặp qua từng phần tử trở nên vô cùng đơn giản, chỉ việc await trong mỗi vòng lặp.
// - Debug dễ hơn nhiều, vì mỗi lần dùng await được tính là một dòng code,
//   do đó ta có thể đặt debugger để debug từng dòng như thường.
// - Khi có lỗi, exception sẽ chỉ ra lỗi ở dòng số mấy chứ không chung chung là un-resolved promise.
// - Với promise hoặc callback, việc kết hợp if/else hoặc retry với code asynchnous là một cực hình
//   vì ta phải viết code lòng vòng, rắc rối. Với async/await, việc này vô cùng dễ dàng.


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

// let a = await aPromise

let show = async () => {
  let res = await add(4, 5);
  console.log(res);
}

show();
















