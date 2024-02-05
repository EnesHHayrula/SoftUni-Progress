function christmasGifts(input) {
    let kids = 0;
    let adults = 0;
    let sweaters = 0;
    let toys = 0;
    let moneyForToys = 0;
    let moneyForSweaters = 0;
    let i = 0;
    let command = "Christmas"
    while (true) {
        let current = input[i]; i++;
        if (current !== command) {
            let age = Number(current)
            if (age <= 16) {
                kids++
                toys++
                moneyForToys += 5;
            } else {
                adults++;
                sweaters++;
                moneyForSweaters += 15;
            }
        } else {
            console.log(`Number of adults: ${adults}`);
            console.log(`Number of kids: ${kids}`);
            console.log(`Money for toys: ${moneyForToys}`);
            console.log(`Money for sweaters: ${moneyForSweaters}`);
            break;
        }
    }
}

christmasGifts(["16",
    "20",
    "46",
    "12",
    "8",
    "20",
    "49",
    "Christmas"])
christmasGifts(["16",
    "16",
    "16",
    "16",
    "16",
    "Christmas"])
