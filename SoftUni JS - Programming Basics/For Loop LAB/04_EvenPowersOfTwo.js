function evenPowersOfTwo(input) {
let n = Number(input[0])
for (let i = 0; i <=n; i += 2) {
        console.log(Math.pow(2, i));
    
}
}

evenPowersOfTwo(["3"])
console.log("-----");
evenPowersOfTwo(["4"])
console.log("-----");
evenPowersOfTwo(["5"])
console.log("-----");
evenPowersOfTwo(["6"])
console.log("-----");
evenPowersOfTwo(["7"])