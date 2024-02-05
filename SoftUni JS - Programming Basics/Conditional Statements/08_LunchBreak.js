function lunchBreak(input) {
    let seriesName = input[0];
    let episodeLenght = Number(input[1]);
    let breakDuration = Number(input[2]);
    let lunchTime = breakDuration * 0.125
    let breakTime = breakDuration * 0.25
    let timeLeft = breakDuration - lunchTime - breakTime

    if (timeLeft >= episodeLenght) {
        console.log(`You have enough time to watch ${seriesName} and left with ${(Math.ceil(timeLeft - episodeLenght))} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${(Math.ceil(episodeLenght - timeLeft))} more minutes.`);
    }

}

lunchBreak(["Game of Thrones", "60", "96"])
lunchBreak(["Teen Wolf", "48", "60"])