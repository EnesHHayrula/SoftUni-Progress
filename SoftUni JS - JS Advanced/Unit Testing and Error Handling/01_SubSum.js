function subSum(arr, startIndex, endIndex) {
  if (Array.isArray(arr) === false) {
    return NaN;
  }

//   if (arr.find((x) => Number.isNaN(Number(x)))) {
//     return NaN;
//   }

  if (startIndex < 0) {
    startIndex = 0;
  }

  if (endIndex > arr.length - 1) {
    endIndex = arr.length - 1;
  }

  return arr
    .map((x) => Number(x))
    .reduce((a, c, i) => {
      if (i >= startIndex && i <= endIndex) {
        a += c;
      }
      return a;
    }, 0);
}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
console.log("--------------------------");
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log("--------------------------");
console.log(subSum([10, "twenty", 30, 40], 0, 2));
console.log("--------------------------");
console.log(subSum([], 1, 2));
console.log("--------------------------");
console.log(subSum("text", 0, 2));
