function shoppingList(input) {
    let groceries = input.shift().split('!');
    
    for (let command of input) {
      if (command === 'Go Shopping!') {
        break;
      }
      
      let [action, ...params] = command.split(' ');
      let item = params[0];
      let newItem = params[1];
      
      switch (action) {
        case 'Urgent':
          if (!groceries.includes(item)) {
            groceries.unshift(item);
          }
          break;
        case 'Unnecessary':
          if (groceries.includes(item)) {
            groceries = groceries.filter(g => g !== item);
          }
          break;
        case 'Correct':
          let index = groceries.indexOf(item);
          if (index >= 0) {
            groceries.splice(index, 1, newItem);
          }
          break;
        case 'Rearrange':
          if (groceries.includes(item)) {
            groceries = groceries.filter(g => g !== item);
            groceries.push(item);
          }
          break;
      }
    }
    
    console.log(groceries.join(', '));
  }

  
  shoppingList(["Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!"]);
  console.log("-------------------------");
  shoppingList(["Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!"])