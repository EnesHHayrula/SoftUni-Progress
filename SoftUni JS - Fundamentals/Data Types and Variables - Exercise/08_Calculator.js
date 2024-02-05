function calculator(a, op, b) {
    switch (op) {
        case "+": result = a + b; break;
        case "-": result = a - b; break;
        case "*": result = a * b; break;
        case "/": result = a / b; break;
    }
    console.log(result.toFixed(2));
}

calculator(5, '+', 10)
calculator(25.5, '-', 3)