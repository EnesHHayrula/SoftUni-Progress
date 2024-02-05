function lift(arr) {
    let people = Number(arr[0])
    let newArr = []
    newArr = arr[1].split(' ')
    let finalArr = []
    let maxPersons = 4
    let bull = true
    for (let i = 0; i < newArr.length; i++) {
        let leftplaces = 0
        let currentPersons = Number(newArr[i])
    if (people >= 4) {
        leftplaces = maxPersons - currentPersons
        people -= leftplaces
        finalArr.push(maxPersons)
        continue
    } else if (people < 4 && people >= 0) {
        leftplaces = maxPersons - currentPersons
        if (leftplaces >= people) {
            finalArr.push(people + currentPersons)
            people = 0
            bull = false
            continue
        } else {
            people -= leftplaces
            finalArr.push(maxPersons)
            bull = false
            continue
        }
    }
}
    if (bull) {
        console.log(`There isn't enough space! ${people} people in a queue!`)
    } else {
        console.log(`The lift has empty spots!`)
    }
    console.log(`${finalArr.join(' ')}`)
}
 
lift(['10', '4 4'])
lift(['15', '0 0 0 0'])
lift(['0', '1 0 4 1'])
lift(["20", "0 2 0"])