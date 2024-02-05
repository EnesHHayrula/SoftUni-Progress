function spaceTravel(input) {
    let [route, fuel, ammo] = input;
    let stops = route.split("||");
  
    for (let i = 0; i < stops.length; i++) {
      let [command, value] = stops[i].split(" ");
  
      switch (command) {
        case "Travel":
          if (fuel < value) {
            console.log("Mission failed.");
            return;
          }
          fuel -= value;
          console.log(`The spaceship travelled ${value} light-years.`);
          break;
  
        case "Enemy":
          let enemyPoints = parseInt(value);
          if (ammo >= enemyPoints) {
            ammo -= enemyPoints;
            console.log(`An enemy with ${enemyPoints} armour is defeated.`);
          } else {
            let fuelCost = enemyPoints * 2;
            if (fuel < fuelCost) {
              console.log("Mission failed.");
              return;
            }
            fuel -= fuelCost;
            console.log(`An enemy with ${enemyPoints} armour is outmaneuvered.`);
          }
          break;
  
        case "Repair":
          let [ammoToAdd, fuelToAdd] = value.split("|");
          ammo += 2 * parseInt(ammoToAdd);
          fuel += Number(fuelToAdd);
          console.log(`Ammunitions added: ${2 * ammoToAdd}.`);
          console.log(`Fuel added: ${fuelToAdd}.`);
          break;
  
        case "Titan":
          console.log("You have reached Titan, all passengers are safe.");
          return;
      }
    }
  
    console.log("Mission failed.");
  }

  spaceTravel(['Travel 10||Enemy 30||Repair 15||Titan', '50', '80'])
  spaceTravel