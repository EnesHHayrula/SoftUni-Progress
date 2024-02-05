function BasketballEquipment(input) {
    let annualFees = Number(input[0]);

    let shoes = annualFees * 0.6;
    let tracksuit = shoes * 0.8;
    let ball = tracksuit * 0.25
    let accesories = ball * 0.20
    totalCost = annualFees + shoes + tracksuit + ball + accesories

    console.log(totalCost);



}

BasketballEquipment(["365"])
BasketballEquipment(["550"])