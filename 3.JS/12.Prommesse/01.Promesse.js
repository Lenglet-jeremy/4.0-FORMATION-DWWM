const promise = new Promise((res, rej) => {
    setTimeout(() => {
      res(11);
    }, 2000);
  });
  
  promise
    .then((r) => {
      // console.log(r);
      return r * 2;
    })
    .then((r) => {
      // console.log(r);
      return r + 4;
    })
    .then((r) => {
      console.log(r);
    })
    .catch((err) => console.error(err))
    .finally(console.log("COUCOU"));
  