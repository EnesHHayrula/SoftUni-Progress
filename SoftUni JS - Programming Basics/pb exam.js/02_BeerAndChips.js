function beerAndChips(input) {
    let fanName = input[0];
    let budget = Number(input[1]);
    let beerCount = Number(input[2]);
    let chipsCount = Number(input[3]);

    let beerPrice = 1.20
    

    let totalBeerPrice = beerPrice * beerCount;
    let chipsPrice = totalBeerPrice * 0.45;
    let totalChipsPrice = Math.ceil(chipsPrice * chipsCount)
    let finalPrice = totalBeerPrice + totalChipsPrice;
    if (budget > finalPrice) {
        console.log(`${fanName} bought a snack and has ${(budget - finalPrice).toFixed(2)} leva left.`);
    } else { console.log(`${fanName} needs ${(finalPrice - budget).toFixed(2)} more leva!`); }

}

beerAndChips(["Valetin",
"5",
"2",
"4"])
