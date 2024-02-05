function pascalCaseSplitter(text) {
let result = [];
startIndex = 0;
    for(let i = 1; i < text.length; i++){
    let char = text[i];
    if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90){
        result.push(text.substring(startIndex, i))
        startIndex = i;
    }
}
result.push(text.substring(startIndex));
console.log(result.join(", "));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
console.log("--------------------");
pascalCaseSplitter('HoldTheDoor');
console.log("--------------------");
pascalCaseSplitter('ThisIsSoAnnoyingToDo');