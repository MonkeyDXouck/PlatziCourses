const promise1 = new Promise((resolve, reject) => resolve("reject"));
const promise2 = new Promise((resolve, reject) => reject("resolve 1"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 2"));
const promise4 = new Promise((resolve, reject) => reject("reject 2"));

Promise.any([promise1, promise2, promise3, promise4])
.then(response => console.log(response));