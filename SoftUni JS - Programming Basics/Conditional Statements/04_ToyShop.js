function toyShop(input) {
    let puzzlePrice = 2.60;
    let dollPrice = 3;
    let teddyBearPrice = 4.10;
    let minionPrice = 8.20;
    let truckPrice = 2;

    let vacationCost = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let teddyBearCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let totalIncome = puzzlePrice * puzzleCount + dollPrice * dollCount + teddyBearPrice * teddyBearCount
        + minionPrice * minionCount + truckPrice * truckCount

    if ((puzzleCount + dollCount + teddyBearCount + minionCount + truckCount) >= 50) {
        totalIncome *= 0.75;
    }
    totalIncome *= 0.90
    if (totalIncome >= vacationCost) {
        console.log(`Yes! ${(totalIncome - vacationCost).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(vacationCost - totalIncome).toFixed(2)} lv needed.`);
    }

}

toyShop(["40.8", "20", "25", "30", "50", "10"])
toyShop(["320", "8", "2", "5", "5", "1"])