function programmingBook(input) {

    let priceForPage = Number(input[0]);
    let priceForCover = Number(input[1]);
    let discount = Number(input[2]) / 100;
    let designerCost = Number(input[3]);
    let teamCover = Number(input[4]) / 100;

    let pages = 899
    let cover = 2

    let printingPrice = priceForPage * pages + priceForCover * cover;
    let totalPrice = printingPrice + designerCost ;
    let finalPrice = totalPrice - (printingPrice * discount) 
    let price = finalPrice - (finalPrice * teamCover)

        console.log(`Avtonom should pay ${price.toFixed(2)} BGN.`);
}



programmingBook(["0.01", "1","10","20","20"]);
programmingBook(["0.05" , "1.20", "40" ,"19.99","20"]);
