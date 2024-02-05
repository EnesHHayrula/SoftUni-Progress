function phoneBook(input) {
    let dict = {};
    input.forEach(el => {
        let tokens = el.split(' ');
        let name = tokens[0];
        let number = tokens[1];
        dict[name] = number
    });
    for (const key in dict) {
        console.log(`${key} -> ${dict[key]}`);
    }
}


phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])
console.log("--------------------");
phoneBook(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344'])
