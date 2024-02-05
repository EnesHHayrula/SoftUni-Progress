function heroes() {
    // Mage obj
  const mageHero = {
    // proto for Mage
    mageProto: {
      cast: function (spell) {
        this.mana -= 1;
        console.log(`${this.name} cast ${spell}`);
      },
    },
    // constructor for Mage
    mage: function (name) {
      const mageObj = {
        ...this.mageProto,
        name: name,
        mana: 100,
        health: 100,
      };
      return mageObj;
    },
  };
// Fighter obj
  const fighterHero = {
    // proto for fighter
    fighterProto: {
      fight: function (spell) {
        this.stamina -= 1;
        console.log(`${this.name} slashes at the foe!`);
      },
    },
    // constructor for Fighter
    fighter: function (name) {
      const fighterObj = {
        ...this.fighterProto,
        name: name,
        stamina: 100,
        health: 100,
      };
      return fighterObj;
    },
  };
// All Heroes
  const allHeroes = {
    ...mageHero,
    ...fighterHero,
  };

  return allHeroes;
}

let create = heroes();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();
console.log(scorcher2.stamina);
console.log(scorcher.mana);
