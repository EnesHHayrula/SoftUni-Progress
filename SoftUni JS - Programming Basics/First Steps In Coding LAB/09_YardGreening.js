function yardGreening(input) {
    let squareMeters = Number(input[0]);
    let pricePerSquare = 7.61
    let greeningCost = squareMeters * pricePerSquare
    let discount = greeningCost * 0.18
    let finalCost = greeningCost - discount
    console.log(`The final price is: ${finalCost} lv.
The discount is: ${discount} lv.`);



}


yardGreening(["550"])
yardGreening(["150"])
