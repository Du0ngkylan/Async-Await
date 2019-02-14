//                NODEJS Xử lý bất đồng bộ – Bài 3: Ôn tập Bất đồng bộ trong javascript

// - Javascript là ngôn ngữ đơn luồng và bất đồng bộ.
// - Tuy nhiên, Javascript chỉ có 1 luồng duy nhất.
//   Javascript chọn cách xử lí tiến trình theo phương pháp bất đồng bộ để tránh tình trạng “treo” máy. (I/O blocking).

// Đồng bộ :
// Bất đồng bộ : 

// - Javascript cung cấp cho ta nhiều cách để xử lí tiến trình bất đồng bộ.
//   Có 3 cách cơ bản đó là: Hàm trả về (callback), promise và async/await.

// Thứ tự thục hiện các câu lệnh: câu lệnh nào viết trước sẽ được thực hiện trước 
// (nhưng câu lệnh nào viết trước chưa chắc đã chạy xong trước).

setTimeout(() => {
  console.log('Bat Dau Nao');
}, 1000);

console.log('Ket Thuc Roi!!!');

let a = 5;
a++;
console.log(a);

// Để xác định 1 tác vụ là đồng bộ hay bất đồng bộ cần phải đọc doc
// câu lệnh bất đồng bộ cung cấp cho chúng ta 1 callback để xử lý


