function suppliesForSchool(input) {
    let penPrice = 5.80; //2 * 5.8
    let markerPrice = 7.20; //3 * 7.2
    let detergentPrice = 1.20; // 4 * 1.2

    let packsOfPens = Number(input[0]);
    let packsOfMarkers = Number(input[1]);
    let litersOfDetergent = Number(input[2]);
    let discount = Number(input[3]) / 100;

    let totalPrice = packsOfPens * penPrice + packsOfMarkers * markerPrice + litersOfDetergent * detergentPrice;

    let finalTotalPrice = totalPrice - (totalPrice * discount);

    console.log(finalTotalPrice)


}

suppliesForSchool(["2", "3", "4", "25"]);
suppliesForSchool(["4", "2", "5", "13"])