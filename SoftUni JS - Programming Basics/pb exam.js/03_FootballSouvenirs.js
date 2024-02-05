function footballSouvenirs(input) {

    let team = input[0];
    let souvenir = input[1];
    let boughtSouvenirs = Number(input[2]);
    price = 0;
    // "flags", "caps", "posters", "stickers"
    if (team === "Argentina") {
        if (souvenir == "flags") {
            price = 3.25;
        } else if (souvenir == "caps") {
            price = 7.20;
        } else if (souvenir == "posters") {
            price = 5.10;
        } else if (souvenir == "stickers") {
            price = 1.25;
        }
    } else if (team === "Brazil") {
        if (souvenir == "flags") {
            price = 4.20
        } else if (souvenir == "caps") {
            price = 8.50;
        } else if (souvenir == "posters") {
            price = 5.35;
        } else if (souvenir == "stickers") {
            price = 1.20
        }
    } else if (team === "Croatia") {
        if (souvenir == "flags") {
            price = 2.75
        } else if (souvenir == "caps") {
            price = 6.90
        } else if (souvenir == "posters") {
            price = 4.95
        } else if (souvenir == "stickers") {
            price = 1.10
        }
    } else if (team === "Denmark") {
        if (souvenir == "flags") {
            price = 3.10
        } else if (souvenir == "caps") {
            price = 6.50
        } else if (souvenir == "posters") {
            price = 4.80
        } else if (souvenir == "stickers") {
            price = 0.90
        }
    } console.log(`Pepi bought ${boughtSouvenirs} ${souvenir} of ${team} for ${(price * boughtSouvenirs).toFixed(2)} lv.`)

}


footballSouvenirs(["Brazil", "stickers", "5"])
footballSouvenirs(["bulgaria", "cas", "8"])

