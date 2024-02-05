function houseParty(arr) {
    let guests = [];

    for (let i = 0; i < arr.length; i++) {
        let currentInput = arr[i].split(" ");

        if (currentInput[2] === "going!") {
            if (!guests.includes(currentInput[0])) {
                guests.push(currentInput[0]);
            } else {
                console.log(`${currentInput[0]} is already in the list!`);
            }
        } else if (currentInput[2] === "not") {
            if (guests.includes(currentInput[0])) {
                let index = guests.indexOf(currentInput[0]);
                guests.splice(index, 1);
            } else {
                console.log(`${currentInput[0]} is not in the list!`);
            }
        }
    }

    guests.forEach((guest) => console.log(guest));
}

houseParty(['Tom is going!',

    'Annie is going!',

    'Tom is going!',

    'Garry is going!',

    'Jerry is going!'])