function decryptingCommands(input) {
    let message = input.shift();
  
    for (let command of input) {
      let [action, ...params] = command.split(' ');
  
      switch (action) {
        case 'Replace':{
          let [currentChar, newChar] = params;
          message = message.split(currentChar).join(newChar);
          console.log(message);
          break;
        }
        case 'Cut':{
          let [startIndex, endIndex] = params.map(Number);
          if (startIndex < 0 || endIndex >= message.length || startIndex > endIndex) {
            console.log('Invalid indices!');
          } else {
            message = message.substring(0, startIndex) + message.substring(endIndex + 1);
            console.log(message);
          }
          break;
        }
        case 'Make':{
          let upperLower = params[0];
          if (upperLower === 'Upper') {
            message = message.toUpperCase();
          } else if (upperLower === 'Lower') {
            message = message.toLowerCase();
          }
          console.log(message);
          break;
        }
        case 'Check':{
          let str = params[0];
          if (message.includes(str)) {
            console.log(`Message contains ${str}`);
          } else {
            console.log(`Message doesn't contain ${str}`);
          }
          break;
        }
        case 'Sum':{
          let [start, end] = params.map(Number);
          if (start < 0 || end >= message.length || start > end) {
            console.log('Invalid indices!');
          } else {
            let substring = message.substring(start, end + 1);
            let sum = 0;
            for (let char of substring) {
              sum += char.charCodeAt(0);
            }
            console.log(sum);
          }
          break;
        }
        case 'Finish':
          return;
  
        default:
          console.log('Invalid command!');
          break;
      }
    }
  }
  decryptingCommands(["HappyNameDay",
  "Replace p r",
  "Make Lower",
  "Cut 2 23",
  "Sum -2 2",
  "Finish"])
  console.log("---------------------------------------");
  decryptingCommands(["ILikeSoftUni",
  "Replace I We",
  "Make Upper",
  "Check SoftUni",
  "Sum 1 4",
  "Cut 1 4",
  "Finish"])
  