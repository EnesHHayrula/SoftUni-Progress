function usdToBgn(input) {
    let usd = Number(input[0]);
    let usdAsNumber = Number(usd);
    let bgn = usdAsNumber * 1.79549;

    console.log(bgn)
}

usdToBgn(["22"]);
usdToBgn(["100"]);
usdToBgn(["12.5"]);

// 1 USD = 1.79549 BGN