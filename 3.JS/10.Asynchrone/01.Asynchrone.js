const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("John");
  }, 2000);
});

const func = async () => {
  try {
    const value = await promise;
    console.log(value);
    hello(value);
  } catch (error) {
    console.log(error);
  }
};

function hello(value) {
  console.log("Hello " + value);
}

func();
