function projectsCreation(input) {
    let architectsName = input[0];
    let projectCount = Number(input[1]);
    let hoursNeeded = projectCount * 3


    console.log(`The architect ${architectsName} will need ${hoursNeeded} hours to complete ${projectCount} project/s.`);



}


projectsCreation(["George ", "4 "])
projectsCreation(["Sanya ", "9 "])
