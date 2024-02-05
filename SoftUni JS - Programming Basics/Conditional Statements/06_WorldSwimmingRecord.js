function worldSwimmingRecord(input) {
    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSeconds = Number(input[2]);

    let neededDistance = distanceInMeters * timeInSeconds;

    let distanceInMetersFixed = Math.floor(distanceInMeters / 15) * 12.5;
    let totalTime = neededDistance + distanceInMetersFixed;
    if (recordInSeconds <= totalTime) {

        totalTime = totalTime - recordInSeconds
        console.log(`No, he failed! He was ${Math.abs(totalTime).toFixed(2)} seconds slower.`
        );
    } else if (recordInSeconds >= totalTime) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }
}


worldSwimmingRecord(["10464", "1500", "20"])
worldSwimmingRecord(["55555.67", "3017", "5.03"])