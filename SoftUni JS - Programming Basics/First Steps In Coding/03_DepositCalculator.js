function depositCalculator(input) {
    let depositAmount = Number(input[0]);
    let depositMonths = Number(input[1]);
    let annualInterestRate = Number(input[2]) / 100;

    let finalAmount = depositAmount + depositMonths * ((depositAmount * annualInterestRate)) / 12

    console.log(finalAmount)
}

depositCalculator(["200", "3", "5.7"]);
depositCalculator(["2350", "6", "7"])
