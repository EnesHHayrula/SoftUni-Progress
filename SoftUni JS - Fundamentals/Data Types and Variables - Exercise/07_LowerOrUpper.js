function lowerOrUpper(char) {
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
        console.log(`upper-case`);
    } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
        console.log(`lower-case`);
    } else {console.log(`invalid`);}

}


lowerOrUpper("E");
lowerOrUpper("e");