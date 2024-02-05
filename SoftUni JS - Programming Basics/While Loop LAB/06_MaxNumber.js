function maxNumber(input) {
let index = 0;
let command = input[index];
index++;

let maxNumber = Number.MIN_SAFE_INTEGER;
while (command !== "Stop") {
    let currentNum = Number(command);
if (maxNumber < currentNum) {
    maxNumber = currentNum
}
command = input[index];
index++;
}
console.log(maxNumber);

}

maxNumber(["100",
    "99",
    "80",
    "70",
    "Stop"])
maxNumber(["-10", "20", "-30", "Stop"])