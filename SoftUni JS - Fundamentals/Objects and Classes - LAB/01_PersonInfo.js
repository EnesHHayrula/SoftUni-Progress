function personInfo(firstName, lastName, age) {
    let person = {
        firstName: firstName,
        lastName: lastName,
        age: age,
    }
    return person;
}

console.table(personInfo("Peter", "Pan", "20"));