function manOWar(input) {
    let pirateShip = input.shift().split(">").map(Number);
    let warship = input.shift().split(">").map(Number);
    let maxHealth = Number(input.shift());
  
    for (let line of input) {
      if (line === "Retire") {
        break;
      }
      let tokens = line.split(" ");
      let command = tokens[0];
      if (command === "Fire") {
        let index = Number(tokens[1]);
        let damage = Number(tokens[2]);
        if (index >= 0 && index < warship.length) {
          warship[index] -= damage;
          if (warship[index] <= 0) {
            console.log("You won! The enemy ship has sunken.");
            return;
          }
        }
      } else if (command === "Defend") {
        let startIndex = Number(tokens[1]);
        let endIndex = Number(tokens[2]);
        let damage = Number(tokens[3]);
        if (startIndex >= 0 && startIndex < pirateShip.length && endIndex >= 0 && endIndex < pirateShip.length) {
          for (let i = startIndex; i <= endIndex; i++) {
            pirateShip[i] -= damage;
            if (pirateShip[i] <= 0) {
              console.log("You lost! The pirate ship has sunken.");
              return;
            }
          }
        }
      } else if (command === "Repair") {
        let index = Number(tokens[1]);
        let health = Number(tokens[2]);
        if (index >= 0 && index < pirateShip.length) {
          pirateShip[index] = Math.min(pirateShip[index] + health, maxHealth);
        }
      } else if (command === "Status") {
        let count = 0;
        for (let section of pirateShip) {
          if (section < 0.2 * maxHealth) {
            count++;
          }
        }
        console.log(`${count} sections need repair.`);
      }
    }
  
    let pirateShipSum = pirateShip.reduce((a, b) => a + b, 0);
    let warshipSum = warship.reduce((a, b) => a + b, 0);
  
    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warshipSum}`);
  }




manOWar(["12>13>11>20>66", "12>22>33>44>55>32>18", "70", "Fire 2 11", "Fire 8 100", "Defend 3 6 11", "Defend 0 3 5", "Repair 1 33", "Status", "Retire"])
// manOWar(["2>3>4>5>2",
//     "6>7>8>9>10>11",
//     "20",
//     "Status",
//     "Fire 2 3",
//     "Defend 0 4 11",
//     "Repair 3 18",
//     "Retire"])