function reverseArray(n, arr) {
    let reversedArray = [];
    for (let i = 0; i < n; i++) {
      reversedArray.push(arr[i]);
    }
    let result = reversedArray.reverse().join(" ");
    console.log(result);
  }

  reverseArray(3, [10, 20, 30, 40, 50]);
  reverseArray(4, [-1, 20, 99, 5]);
  reverseArray(2, [66, 43, 75, 89, 47])