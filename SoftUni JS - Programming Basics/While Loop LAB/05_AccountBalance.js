function accountBalance(input) {
let account = 0;
let index = 0;
let command = input[index];
index++;
while (command !== "NoMoreMoney") {
    let currentMoney = Number(command);
    if (currentMoney < 0 ) {
        console.log(`Invalid operation!`);
        break;
    }

    account += currentMoney;
    console.log(`Increase: ${currentMoney.toFixed(2)}`);
    command = input[index];
    index++;
}
console.log(`Total: ${account.toFixed(2)}`);

}


// accountBalance([
//     "5.51",
//     "69.42",
//     "100",
//     "NoMoreMoney"])

accountBalance(["120", "45.55", "-150"])