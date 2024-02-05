const eventBus = require("./eventBus.js");
eventBus.subscribe("car-added", () => {
  console.log("Car has been added!");
});

const unsubscribe = eventBus.subscribe("car-added", (carMake, carModel) => {
  console.log(`Car has been added, once again! Its is ${carMake} ${carModel}`);
});

eventBus.subscribe("car-removed", () => {
  console.log("Car has been removed!");
});

eventBus.publish("car-added", "Mercedes-Benz", "AMG GT");
eventBus.publish("car-removed");

unsubscribe();
