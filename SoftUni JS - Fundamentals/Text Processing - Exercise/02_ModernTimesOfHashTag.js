function modernTimesOfHashTag(text) {
    let result = [];
    let words = text.split(" ")
    .filter(x => x.startsWith("#") && x.length > 1);

    for (let el of words) {
            let isSpecial = true;
            el = el.substring(1)
            for (let char of el) {
                char = char.toLowerCase();
                if (char.charCodeAt(0) < 97 || char.charCodeAt(0) > 122) {
                    isSpecial = false
                    break;
                }
            }
            if (isSpecial) {
                result.push(el)
            }
        
    }
    console.log(result.join("\n"));
}

modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
console.log("------------");
modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');