function shopping(input) {
    let budget = Number(input[0]);
    let graphicCard = Number(input[1]);
    let processor = Number(input[2]);
    let ram = Number(input[3]);

    let graphicCardCost = 250;
    let totalGraphicCardCost = graphicCard * graphicCardCost
    let processorCost = totalGraphicCardCost * 0.35;
    let ramCost = totalGraphicCardCost * 0.10;

    let totalProcessorCost = processor * processorCost
    let totalRamCost = ram * ramCost
    let totalCost = totalGraphicCardCost + totalProcessorCost + totalRamCost
    if ((graphicCard > processor)) {
        totalCost *= 0.85
    }
    if (totalCost <= budget) {
        console.log(`You have ${(budget - totalCost).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalCost - budget).toFixed(2)} leva more!`)
    }

}


shopping(["900", "2", "1", "3"])
shopping(["920.45", "3", "1", "1"])