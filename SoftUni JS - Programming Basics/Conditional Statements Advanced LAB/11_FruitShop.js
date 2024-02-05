function fruitShop(input) {
    let product = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let totalPrice = 0;

    if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') {
        switch (product
        ) {
            case 'banana': totalPrice = console.log((quantity * 2.50).toFixed(2)); break;
            case 'apple': totalPrice = console.log((quantity * 1.20).toFixed(2)); break;
            case 'orange': totalPrice = console.log((quantity * 0.85).toFixed(2)); break;
            case 'grapefruit': totalPrice = console.log((quantity * 1.45).toFixed(2)); break;
            case 'kiwi': totalPrice = console.log((quantity * 2.70).toFixed(2)); break;
            case 'pineapple': totalPrice = console.log((quantity * 5.50).toFixed(2)); break;
            case 'grapes': totalPrice = console.log((quantity * 3.85).toFixed(2)); break;
            default: console.log("error"); break;
        }

    } else if (day === 'Saturday' || day === 'Sunday') {
        switch (product) {
            case 'banana': totalPrice = console.log((quantity * 2.70).toFixed(2)); break;
            case 'apple': totalPrice = console.log((quantity * 1.25).toFixed(2)); break;
            case 'orange': totalPrice = console.log((quantity * 0.90).toFixed(2)); break;
            case 'grapefruit': totalPrice = console.log((quantity * 1.60).toFixed(2)); break;
            case 'kiwi': totalPrice = console.log((quantity * 3.00).toFixed(2)); break;
            case 'pineapple': totalPrice = console.log((quantity * 5.60).toFixed(2)); break;
            case 'grapes': totalPrice = console.log((quantity * 4.20).toFixed(2)); break;
            default: console.log("error"); break;
        }
    }
    else {
        console.log('error');
    }
}

fruitShop(["orange", "Sunday", "3"])
fruitShop(["apple", "Tuesday", "2"])
fruitShop(["kiwi", "Monday", "2.5"])
fruitShop(["grapes", "workday", "0.5"])
fruitShop(["tomato", "Monday", "0.5"])