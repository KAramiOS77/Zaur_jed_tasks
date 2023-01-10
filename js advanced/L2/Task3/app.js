let backendData = { name: "ali", age: 22 };

const myPromise = new Promise((resolve, reject) => {
  resolve({ backendData });
  reject(`Data not exist`);
});

getData();
async function getData() {
  try {
    const value = await myPromise;
    console.log(value);
  } catch (err) {
    console.log(err);
    console.log("Data not found");
  }
}
