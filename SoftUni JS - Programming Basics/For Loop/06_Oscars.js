function oscars(input) {
    let actorName = input[0];
    let actorPoints = Number(input[1]);
    let evaluators = Number(input[2]);

    for (let i = 0; i < evaluators * 2; i += 2) {
        let evaluatorName = input[i + 3];
        let evaluatorPoints = Number(input[i + 4]);

        actorPoints += evaluatorName.length * evaluatorPoints / 2;
        if (actorPoints > 1250.50) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${actorPoints.toFixed(1)}!`);
            break;
        }
    }
    if (actorPoints <= 1250.50) {
        console.log(`Sorry, ${actorName} you need ${(1250.50 - actorPoints).toFixed(1)} more!`);

    }


}

// oscars(["Zahari Baharov",
//     "205",
//     "4",
//     "Johnny Depp",
//     "45",
//     "Will Smith",
//     "29",
//     "Jet Lee",
//     "10",
//     "Matthew Mcconaughey",
//     "39"])
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])