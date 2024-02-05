function imitationGame(data) {
    let text = data.shift();

    for (let line of data) {
        if (line === "Decode") {
            break;
        }
        let tokens = line.split("|");
        let action = tokens[0];

        switch (action) {
            case "Move":
                let n = Number(tokens[1]);
                for (let i = 0; i < n; i++) {
                    let firstLetter = text.substring(0, 1);
                    let otherLetters = text.substring(1);
                    text = otherLetters + firstLetter;
                }
                break;
            case "Insert":
                let index = Number(tokens[1]);
                let value = tokens[2];
                text = text.substring(0, index) + value + text.substring(index);
                break;
            case "ChangeAll":
                let oldLetters = tokens[1];
                let newLetters = tokens[2];
                while (text.includes(oldLetters)) {
                    text = text.replace(oldLetters, newLetters)
                }
                break;
        }
    }
    console.log(`The decrypted message is: ${text}`);
}

imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
])