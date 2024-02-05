function repainting(input) {
    let nylon = 1.50
    let paint = 14.50
    let thinner = 5
    let packs = 0.40

    let neededNylon = Number(input[0]);
    let neededPaint = Number(input[1]);
    let neededThinner = Number(input[2]);
    let hoursWorked = Number(input[3]);
    let extraPaint = neededPaint * 0.10
    // let extraNylon = 2
    let priceForNylon = (neededNylon + 2) * nylon
    let priceForPaint = (neededPaint + extraPaint) * paint
    let priceForThinner = neededThinner * thinner

    let totalPrice = priceForNylon + priceForPaint + priceForThinner + packs
    let mechanicFee = (totalPrice * 0.30) * hoursWorked
    let finalTotalPrice = totalPrice + mechanicFee
    console.log(finalTotalPrice);

}

repainting(["10", "11", "4", "8"])
repainting(["5", "10", "10", "1"])