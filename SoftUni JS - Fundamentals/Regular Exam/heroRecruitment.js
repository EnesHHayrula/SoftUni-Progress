function heroBook(input) {
    let heroes = {};
  
    for (let line of input) {
      if (line === "End") {
        break;
      }
  
      let tokens = line.split(" ");
      let command = tokens[0];
      let heroName = tokens[1];
      let spellName = tokens[2];
  
      if (command === "Enroll") {
        if (!heroes.hasOwnProperty(heroName)) {
          heroes[heroName] = [];
        } else {
          console.log(`${heroName} is already enrolled.`);
        }
      } else if (command === "Learn") {
        if (heroes.hasOwnProperty(heroName)) {
          if (heroes[heroName].includes(spellName)) {
            console.log(`${heroName} has already learnt ${spellName}.`);
          } else {
            heroes[heroName].push(spellName);
          }
        } else {
          console.log(`${heroName} doesn't exist.`);
        }
      } else if (command === "Unlearn") {
        if (heroes.hasOwnProperty(heroName)) {
          if (heroes[heroName].includes(spellName)) {
            let index = heroes[heroName].indexOf(spellName);
            heroes[heroName].splice(index, 1);
          } else {
            console.log(`${heroName} doesn't know ${spellName}.`);
          }
        } else {
          console.log(`${heroName} doesn't exist.`);
        }
      }
    }
  
    let sortedHeroes = Object.keys(heroes).sort();
    console.log("Heroes:");
    for (let hero of sortedHeroes) {
      console.log(`== ${hero}: ${heroes[hero].join(", ")}`);
    }
  }


  heroBook(["Enroll Stefan",
  "Enroll Peter",
  "Enroll Stefan",
  "Learn Stefan ItShouldWork",
  "Learn John ItShouldNotWork",
  "Unlearn George Dispel",
  "Unlearn Stefan ItShouldWork",
  "End"])
  console.log("------------------------");
  heroBook(["Enroll Stefan",
  "Learn Stefan ItShouldWork",
  "Learn Stefan ItShouldWork",
  "Unlearn Stefan NotFound",
  "End"])
  console.log("------------------------");
  heroBook(["Enroll Stefan",
  "Enroll Peter",
  "Enroll John",
  "Learn Stefan Spell",
  "Learn Peter Dispel",
  "End"])