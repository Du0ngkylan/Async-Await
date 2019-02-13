// Js là ngôn ngữ bất đồng bộ

// Đồng bộ :
// Bất đồng bộ : 

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



















