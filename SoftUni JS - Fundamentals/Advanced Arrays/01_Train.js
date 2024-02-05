function train (input) {
    let wagons = input.shift() [0].split(" ").map(el => Number(el));
    // for (let i = 0; i < wagons.length; i++) {
    //     wagons[i] = Number(wagons[i]);
    // }
    console.table(wagons)
    let maxCapacity = Number(input.shift())

    for (let el of input) {
        let command = el.split(" ");
        if (command[0] === "Add") {
            wagons.push(Number(command[1]))
        }
    }
    console.log(wagons)
}

train['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']