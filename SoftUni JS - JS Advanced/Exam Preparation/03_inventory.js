function inventory(input) {
    let items = input.shift().split(", ");
    
    for (let i = 0; i < input.length; i++) {
      let [command, item] = input[i].split(" - ");
      
      if (command === "Collect") {
        if (!items.includes(item)) {
          items.push(item);
        }
      } else if (command === "Drop") {
        if (items.includes(item)) {
          let index = items.indexOf(item);
          items.splice(index, 1);
        }
      } else if (command === "Combine Items") {
        let [oldItem, newItem] = item.split(":");
        if (items.includes(oldItem)) {
          let index = items.indexOf(oldItem);
          items.splice(index + 1, 0, newItem);
        }
      } else if (command === "Renew") {
        if (items.includes(item)) {
          let index = items.indexOf(item);
          items.splice(index, 1);
          items.push(item);
        }
      } else if (command === "Craft!") {
        break;
      }
    }
    
    console.log(items.join(", "));
  }

  inventory([
    'Iron, Wood, Sword', 
    'Collect - Gold', 
    'Drop - Wood', 
    'Craft!'
  ])
  inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ])