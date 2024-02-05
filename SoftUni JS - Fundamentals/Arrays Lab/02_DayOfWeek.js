
function dayOfWeek(dayNum) {
    let dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (dayNum >= 1 && dayNum <= 7) {
        console.log(dayNames[dayNum - 1]);
    } else {
        console.log(`Invalid day!`);
    }


}



dayOfWeek(11);
dayOfWeek(6);