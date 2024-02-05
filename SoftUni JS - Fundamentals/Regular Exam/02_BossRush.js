function bossRush(inputs) {
    let bossRegex = /^\|([A-Z]{4,})\|:\#([A-Za-z]+ [A-Za-z]+)\#$/;
    
    for (let i = 1; i < inputs.length; i++) {
      let input = inputs[i];
      
      if (!bossRegex.test(input)) {
        console.log("Access denied!");
        continue;
      }
      
      let [, name, title] = input.match(bossRegex);
      
      console.log(`${name}, The ${title}`);
      console.log(`>> Strength: ${name.length}`);
      console.log(`>> Armor: ${title.length}`);
    }
  }

  bossRush(['3',
  '|PETER|:#Lead architect#',
  '|GEORGE|:#High Overseer#',
  '|ALEX|:#Assistant Game Developer#'])
  console.log("-------------");
  bossRush(['3',
  '|STEFAN|:#H1gh Overseer#',
  '|IVAN|:#Master detective#',
  '|KARL|: #Marketing lead#'])