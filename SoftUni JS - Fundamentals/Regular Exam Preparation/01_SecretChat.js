function secretChat(arr) {
    let secretMessage = arr.shift();

    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(':|:');
        let command = tokens[0];
        let values = tokens.slice(1);

        switch (command) {
            case 'ChangeAll': {
                let substring = values[0];
                let replacement = values[1];
                while (secretMessage.includes(substring)) {
                    secretMessage = secretMessage.replace(substring, replacement);
                };
                console.log(secretMessage);
                break;
            }
            case 'Reverse': {
                let substring = values[0];
                if (secretMessage.includes(substring)) {
                    secretMessage = secretMessage.replace(substring, '');
                    let reversed = reverseString(substring);
                    secretMessage += reversed;
                    console.log(secretMessage);
                } else {
                    console.log('error');
                }
                break;
            }

            case 'InsertSpace': {
                let index = Number(values[0]);
                let leftSide = secretMessage.substring(0, index);
                let rightSide = secretMessage.substring(index);
                secretMessage = leftSide + ' ' + rightSide;
                console.log(secretMessage);
                break;
            }

            case 'Reveal': {
                console.log(`You have a new text message: ${secretMessage} `)
                return;
            }
        }
    }

    function reverseString(text) {
        return text.split('').reverse().join('');
    }
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal',
]);