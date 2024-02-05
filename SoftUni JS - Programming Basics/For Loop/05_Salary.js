function salary(input) {
    let penaltyFacebook = 150;
    let penaltyInstagram = 100;
    let penaltyReddit = 50;

    let openedTabs = Number(input[0]);
    let salary = Number(input[1]);

    // for ( let i = 0; i < openedTabs; i++) {
    for (let i = 0; i < input.length - 2; i++) {
        let websiteName = input[i + 2];
        if (websiteName == "Facebook") {
            salary -= penaltyFacebook
        } else if (websiteName == "Instagram") {
            salary -= penaltyInstagram
        } else if (websiteName == "Reddit") {
            salary -= penaltyReddit
        }
    }

    if (salary <= 0) {
        console.log(`You have lost your salary.`);
    } else {
        console.log(salary);
    }

}

// salary(["10",
// "750",
// "Facebook",
// "Dev.bg",
// "Instagram",
// "Facebook",
// "Reddit",
// "Facebook","Facebook"])
// salary (["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"])