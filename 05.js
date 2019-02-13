// callback hell

let square = (a, b, h) => (a + b) * h / 2;

let add = (a, b, cb) => {
  setTimeout(() => {
    if (typeof a != 'number' || typeof b != 'number') {
      return cb(new Error('Tham so phai co kieu number'));
    }
    cb(undefined, a + b);
  }, 1000);
}