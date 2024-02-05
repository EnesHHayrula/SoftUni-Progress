function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let fishers = input[2];
    rentCost = 0;

    if (season == "Spring") {
        rentCost = 3000;
    } else if (season == "Winter") {
        rentCost = 2600;
    } else if (season == "Summer") {
        rentCost = 4200;
    } else if (season == "Autumn") {
        rentCost = 4200;
    }

    if (fishers <= 6) {
        rentCost *= 0.90
    } else if (fishers <= 11) {
        rentCost *= 0.85
    } else if (fishers > 12) {
        rentCost *= 0.75
    }
    if (fishers % 2 == 0 && season != "Autumn") {
        rentCost *= 0.95
    }

    if (budget >= rentCost) {
        console.log(`Yes! You have ${((budget - rentCost).toFixed(2))} leva left.`);
    } else { console.log(`Not enough money! You need ${((rentCost - budget).toFixed(2))} leva.`); }

}

fishingBoat(["3000", "Summer", "11"])
fishingBoat(["3600", "Autumn", "6"])
fishingBoat(["2000", "Winter", "13"])