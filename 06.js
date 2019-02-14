// Tìm hiểu Promise trong Javascript - ES6

// Promise được đưa vào Javascript từ ES6,
// đây có thể coi là một kỹ thuật nâng cao giúp xử lý vấn đề bất đồng bộ hiệu quả hơn.
// Trước đây kết quả của một tác vụ đồng bộ và
// bất đồng bộ sẽ trả về một kiểu dữ liệu nào đó hoặc thực hiện một Callback Function.
// Với trường hợp thực hiện Callback Function thì sẽ dễ xảy ra lỗi Callback Hell,
// nghĩa là gọi callback quá nhiều và lồng nhau nên dẫn đến không kiểm soát được chương trình
// hoặc bộ nhớ không đủ để hoạt động.

// Vậy promise sinh ra để xử lý kết quả của một hành động cụ thể,
// kết quả của mỗi hành động sẽ là thành công hoặc thất bại và Promise sẽ giúp chúng ta giải quyết câu hỏi "Nếu thành công thì làm gì? Nếu thất bại thì làm gì?".
// Cả hai câu hỏi này ta gọi là một hành động gọi lại (callback action).

// Khi một Promise được khởi tạo thì nó có một trong ba trạng thái sau:

// - Fulfilled : Hành động xử lý xong và thành công
// - Rejected : Hành động xử lý xong và thất bại
// - Pending : Hành động đang chờ xử lý hoặc bị từ chối

// Tạo một Promise
// cú pháp: var promise = new Promise(callback);
// Trong đó callback là một function có hai tham số truyền vào như sau:
// var promise = new Promise(function(resolve, reject){});
// Trong đó: 
// - resolve là một hàm callback xử lý cho hành động thành công.
// - reject là một hàm callback xử lý cho hành động thất bại.

let aPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Thanh cong");
    reject(new Error('khong the ket noi den server'));
  }, 2000);
})

aPromise.then((msg) => console.log('Da thuc thi: ' + msg),
(errMsg) => console.log(errMsg + ''));





































