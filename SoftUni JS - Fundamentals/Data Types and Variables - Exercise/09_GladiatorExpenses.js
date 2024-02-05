function gladiatorExpenses(lostFight, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let sum = 0;
    for (let i = 1; i <= lostFight; i++) {
        if (i % 2 === 0) {
            sum += helmetPrice
        }
        if (i % 3 === 0) {
            sum += swordPrice;
        }
        if (i % 6 === 0) {
            sum += shieldPrice;
        }
        if (i % 12 === 0) {
            sum += armorPrice
        }
    }
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}


gladiatorExpenses(7, 2, 3, 4, 5)
gladiatorExpenses(23, 12.50, 21.50, 40, 200)