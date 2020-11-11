let sum = (array) => {
  let result = null;
  for (let i = 2; i < array.length; i++) {
    result = result + Number(array[i]);
  }
  return result;
};
console.log(sum(process.argv));
