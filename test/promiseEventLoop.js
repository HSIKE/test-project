const a = new Promise((resolve, reject) => {
  console.log(1);
  // resolve(true);
  console.log(2);
  throw new Error('err');
  console.log(3);
  reject(false);
}).catch((err) => console.log(err))
.then((res) => {
  console.log(res);
  throw new Error('Fuck');
});
