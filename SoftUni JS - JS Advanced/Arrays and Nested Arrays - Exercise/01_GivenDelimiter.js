function print(collectionOfWords, delimeter) {
const output = collectionOfWords.join(delimeter);
console.log(output);

}

print([
    'One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-');
print([
    'How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!'],
    '_'
);