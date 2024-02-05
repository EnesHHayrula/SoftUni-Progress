function chatLogger(input) {
  let chat = [];

  for (let i = 0; i < input.length; i++) {
    let [command, ...args] = input[i].split(' ');

    switch (command) {
      case 'Chat':
        chat.push(args[0]);
        break;
      case 'Delete':
        chat = chat.filter(msg => msg !== args[0]);
        break;
      case 'Edit':
        let msgIndex = chat.indexOf(args[0]);
        if (msgIndex !== -1) {
          chat[msgIndex] = args[1];
        }
        break;
      case 'Pin':
        let index = chat.indexOf(args[0]);
        if (index !== -1) {
          chat.splice(index, 1);
          chat.push(args[0]);
        }
        break;
      case 'Spam':
        chat.push(...args);
        break;
      case 'end':
        console.log(chat.join('\n'));
        break;
    }
  }
}




chatLogger(["Chat Hello",
    "Chat darling",
    "Edit darling Darling",
    "Spam how are you",
    "Delete Darling",
    "end"])