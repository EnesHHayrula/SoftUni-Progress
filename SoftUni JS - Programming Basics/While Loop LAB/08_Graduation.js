function graduation (input) {
    let index = 0;
let name = input[index];
index++;
let badGrade = 0;
let i = 1;
let sumGrade = 0;
let isExcluded = false;
while (i <= 12) {
  let currentGrade = Number(input[index]);
  index++;
  if ( currentGrade < 4) {
badGrade++;
if (badGrade == 2 ) {
    isExcluded = true
    console.log(`${name} has been excluded at ${i} grade`);
    break;
}
continue;
  } i++;
  sumGrade += currentGrade
  
} if(!isExcluded) {
    console.log(`${name} graduated. Average grade: ${(sumGrade / 12).toFixed(2)}`);
  }   


}

graduation(["Gosho",
"5",
"5.5",
"6", 
"5.43", 
"5.5", 
"6", 
"5.55",
 "5", 
 "6", 
 "6", 
 "5.43", 
 "5"])
// graduation (["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"])