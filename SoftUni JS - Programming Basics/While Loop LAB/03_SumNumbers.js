function sumNumbers (input) {
    let index = 0;
let num = input[index];
index++;

currentNum = Number(input[index]);
index++;

let sum = 0;

while (sum < num) {
    sum+= currentNum;
    currentNum = Number(input[index]);
    index++
    
}console.log(sum);

}


sumNumbers(["100", "10", "20", "30", "40"])