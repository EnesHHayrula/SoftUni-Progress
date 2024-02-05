function tradeCommissions(input) {
    const city = input[0];
    const sales = Number(input[1]);
    let commission = 0;

    if (sales >= 0 && sales <= 500) {
        switch (city) {
            case "Sofia": commission = sales * 0.05; break;
            case "Varna": commission = sales * 0.045; break;
            case "Plovdiv": commission = sales * 0.055; break;
            default: commission = "error"; break;
        }
    } else if (sales >= 500 && sales <= 1000) {
        switch (city) {
            case "Sofia": commission = sales * 0.07; break;
            case "Varna": commission = sales * 0.075; break;
            case "Plovdiv": commission = sales * 0.08; break;
            default: commission = "error"; break;
        }
    } else if (sales >= 1000 && sales <= 10000) {
        switch (city) {
            case "Sofia": commission = sales * 0.08; break;
            case "Varna": commission = sales * 0.1; break;
            case "Plovdiv": commission = sales * 0.12; break;
            default: commission = "error"; break;
        }
    } else if (sales > 10000) {
        switch (city) {
            case "Sofia": commission = sales * 0.12; break;
            case "Varna": commission = sales * 0.13; break;
            case "Plovdiv": commission = sales * 0.145; break;
            default: commission = "error"; break;
        }
    }
    if (commission > 0) {
        console.log(commission.toFixed(2));
    } else {
        console.log("error");
    }
}



tradeCommissions(["Sofia", "1500"])
tradeCommissions(["Plovdiv", "499.99"])
tradeCommissions(["Varna", "3874.50"])
tradeCommissions(["Kaspichan", "-50"])