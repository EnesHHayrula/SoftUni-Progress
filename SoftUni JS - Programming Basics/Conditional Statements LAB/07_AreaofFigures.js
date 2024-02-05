function figures(input) {
    let typeOfFigure = input[0];
    let result = 0;
    let x = Number(input[1]);
    let y = Number(input[2])

    if (typeOfFigure === "square") {
        result = x * x;

    } else if (typeOfFigure === "rectangle") {
        result = x * y;

    } else if (typeOfFigure === "circle") {
        result = Math.PI * Math.pow(x, 2);

    } else {
        result = x * y / 2
    } console.log(result.toFixed(3));


}

figures(["square", "5"]);
figures(["rectangle", "7", "2.5"]);
figures(["circle", "6"]);
figures(["triangle", "4.5", "20"]);