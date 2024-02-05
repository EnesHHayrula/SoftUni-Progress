function petShop(input) {
    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);
    let dogFoodPrice = 2.50
    let catFoodPrice = 4
    let totalCost = dogFood * dogFoodPrice + catFood * catFoodPrice
    console.log(` ${totalCost} lv.`);


}

petShop(["5 ", "4 "])
petShop(["13", "9"])