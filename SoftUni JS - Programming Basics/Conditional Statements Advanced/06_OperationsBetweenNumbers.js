function operationsBetweenNumbers(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];

    let result = 0;
    let resultAsString = "";


    if (operator == "+") {
        result = n1 + n2;
        let evenOrOdd;

        if (result % 2 == 0) {
            evenOrOdd = "even";
        } else {
            evenOrOdd = "odd";
        }

        resultAsString = `${n1} ${operator} ${n2} = ${result} - ${evenOrOdd}`;
    } else if (operator == "-") {
        result = n1 - n2;
        let evenOrOdd;

        if (result % 2 == 0) {
            evenOrOdd = "even"
        } else {
            evenOrOdd = "odd"
        }
        resultAsString = `${n1} ${operator} ${n2} = ${result} - ${evenOrOdd}`;
    } else if (operator == "*") {
        result = n1 * n2;
        let evenOrOdd;

        if (result % 2 == 0) {
            evenOrOdd = "even";
        } else {
            evenOrOdd = "odd";
        }
        resultAsString = `${n1} ${operator} ${n2} = ${result} - ${evenOrOdd}`;
    } else if (operator == "/") {
        if (n2 == 0) {
            resultAsString = `Cannot divide ${n1} by zero`
        } else {
            result = n1 / n2;
            resultAsString = `${n1} ${operator} ${n2} = ${result.toFixed(2)}`
        }
    } else if (operator == "%") {
        if (n2 == 0) {
            resultAsString = `Cannot divide ${n1} by zero`;
        } else {
            result = n1 % n2;
            resultAsString = `${n1} ${operator} ${n2} = ${result}`;
        }
    }

    console.log(resultAsString)
}





operationsBetweenNumbers(["10", "12", "+"])
operationsBetweenNumbers(["123", "12", "/"])
operationsBetweenNumbers(["112", "0", "/"])
operationsBetweenNumbers(["10", "1", "-"])
operationsBetweenNumbers(["10", "3", "%"])
operationsBetweenNumbers(["10", "0", "%"])
operationsBetweenNumbers(["7", "3", "*"])
