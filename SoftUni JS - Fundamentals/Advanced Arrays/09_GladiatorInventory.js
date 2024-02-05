function gladiatorInventory(input) {
    let inventory = input.shift().split(" ");
  
    for (let i = 0; i < input.length; i++) {
      let [command, item] = input[i].split(" ");
  
      switch (command) {
        case "Buy":
          if (!inventory.includes(item)) {
            inventory.push(item);
          }
          break;
        case "Trash":
          if (inventory.includes(item)) {
            inventory.splice(inventory.indexOf(item), 1);
          }
          break;
        case "Repair":
          if (inventory.includes(item)) {
            inventory.splice(inventory.indexOf(item), 1);
            inventory.push(item);
          }
          break;
        case "Upgrade":
          let [currentItem, upgrade] = item.split("-");
          if (inventory.includes(currentItem)) {
            inventory.splice(
              inventory.indexOf(currentItem) + 1,
              0,
              `${currentItem}:${upgrade}`
            );
          }
          break;
        default:
          break;
      }
    }
  
    console.log(inventory.join(" "));
  }
    


// gladiatorInventory(['SWORD Shield Spear',
// 'Buy Bag',
// 'Trash Shield',
// 'Repair Spear',
// 'Upgrade SWORD-Steel'])
gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V'])