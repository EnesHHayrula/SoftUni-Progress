function cityTaxes(name, numberOfPeople, treasury) {
  let obj = {
    name,
    population: numberOfPeople,
    treasury,
    taxRate: 10,
    collectTaxes() {
      this.treasury += this.population * this.taxRate;
    },
    applyGrowth(percent) {
      this.population += (this.population * percent) / 100;
    },
    applyRecession(percent) {
      this.treasury -= (this.treasury * percent) / 100;
    },
  };
  return obj;
}

const city = cityTaxes("Tortuga", 7000, 15000);
console.log(city);
city.applyRecession(5)
console.log(city);
console.log("-----------------------");
// const city = cityTaxes("Tortuga", 7000, 15000);
// city.collectTaxes();
// console.log(city.treasury);
// city.applyGrowth(5);
// console.log(city.population);
