function triangleOfNumbers(n) {
    for (let row = 1; row <= n; row++) {
        let buff = ""
        for (column = 0; column < row; column++) {

            buff += row + " ";
        }
        console.log(buff);
    }
}

triangleOfNumbers(3);
console.log("------");
triangleOfNumbers(5);
console.log("------");
triangleOfNumbers(6);