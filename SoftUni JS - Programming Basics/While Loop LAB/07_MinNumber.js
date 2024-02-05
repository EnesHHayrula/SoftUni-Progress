function minNumber(input) {
        let index = 0;
        let command = input[index];
        index++;
        
        let minNumber = Number.MAX_SAFE_INTEGER;
        while (command !== "Stop") {
            let currentNum = Number(command);
        if (minNumber > currentNum) {
            minNumber = currentNum
        }
        command = input[index];
        index++;
        }
        console.log(minNumber);
        
        }



minNumber(["100",
    "99",
    "80",
    "70",
    "Stop"])