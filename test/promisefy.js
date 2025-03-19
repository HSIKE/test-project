
function promisefy(fn) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      const newArgs = [
        ...args,
        (error, data) => {
          if (error) {
            reject(error);
          } else {
            resolve(data);
          }
        }
      ];
      fn.call(null, newArgs);
    })
  };
}
