function hotelRoom(input) {
    const month = input[0];
    const night = Number(input[1]);
    let studioPricePerNight = 0;
    let appPricePerNight = 0;
    let finalStudioPrice = 0;
    let finalAppPrice = 0;
    switch (month) {
        case 'May':
        case 'October':
            studioPricePerNight = 50;
            appPricePerNight = 65;
            if (night > 7 && night < 14) {
                finalStudioPrice = studioPricePerNight * night * 0.95;
                finalAppPrice = appPricePerNight * night;
            } else if (night > 14) {
                finalStudioPrice = studioPricePerNight * night * 0.7;
                finalAppPrice = appPricePerNight * night * 0.9
            } else {
                finalAppPrice = appPricePerNight * night;
                finalStudioPrice = studioPricePerNight * night;
            }; break;
        case 'June':
        case 'September':
            studioPricePerNight = 75.2;
            appPricePerNight = 68.7;

            if (night > 14) {
                finalStudioPrice = studioPricePerNight * night * 0.8;
                finalAppPrice = appPricePerNight * night * 0.9;
            } else {
                finalStudioPrice = studioPricePerNight * night;
                finalAppPrice = appPricePerNight * night;
            } break;
        case 'July':
        case 'August':
            studioPricePerNight = 76;
            appPricePerNight = 77;
            if (night > 14) {
                finalAppPrice = appPricePerNight * night * 0.9;
                finalStudioPrice = studioPricePerNight * night;
            } else {
                finalStudioPrice = studioPricePerNight * night;
                finalAppPrice = appPricePerNight * night;
            } break;
    } console.log(`Apartment: ${finalAppPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${finalStudioPrice.toFixed(2)} lv.`);
}

hotelRoom(["May","15"])
hotelRoom(["June","14"])
hotelRoom(["August", "20"])