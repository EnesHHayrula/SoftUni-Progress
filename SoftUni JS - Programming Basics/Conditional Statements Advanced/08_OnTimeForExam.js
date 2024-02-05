function onTimeForTheExam(input) {
    let hhExam = Number(input[0]);
    let mmExam = Number(input[1]);
    let hhTime = Number(input[2]);
    let mmTime = Number(input[3]);
    let examInMin = (hhExam * 60) + mmExam;
    let timeInMin = (hhTime * 60) + mmTime;
    let differenceMin = 0;
    let differenceHh = 0

    if (timeInMin > examInMin) {
        console.log("Late");
        differenceMin = (timeInMin - examInMin) % 60;
        differenceHh = (timeInMin - examInMin) / 60;
        if (differenceHh < 1) {

            console.log(`${differenceMin} minutes after the start`);

        } else {
            if (differenceMin < 10) {
                console.log(`${Math.floor(differenceHh)}:0${differenceMin} hours after the start`);
            } else {
                console.log(`${Math.floor(differenceHh)}:${differenceMin} hours after the start`);
            }
        }
    } else if (timeInMin <= examInMin) {
        if (timeInMin == examInMin) {
            console.log("On time");
        } else if (timeInMin < examInMin) {
            differenceMin = (examInMin - timeInMin) % 60;
            differenceHh = (examInMin - timeInMin) / 60;
            if (differenceHh < 1) {
                if (differenceMin <= 30) {
                    console.log("On time");

                    console.log(`${differenceMin} minutes before the start`);
                } else {
                    console.log("Early");

                    console.log(`${differenceMin} minutes before the start`);
                }

            } else {
                console.log("Early");
                if (differenceMin < 10) {
                    console.log(`${Math.floor(differenceHh)}:0${differenceMin} hours before the start`);
                } else {
                    console.log(`${Math.floor(differenceHh)}:${differenceMin} hours before the start`);
                }
            }
        }

    }
}

onTimeForTheExam(["9", "30", "9", "50"])
onTimeForTheExam(["9", "00", "8", "30"])
onTimeForTheExam(["16", "00", "15", "00"])