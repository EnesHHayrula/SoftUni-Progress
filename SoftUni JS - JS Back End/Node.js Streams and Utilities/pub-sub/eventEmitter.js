const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("car-added", () => {
  console.log("New car has been added to the list!");
});

eventEmitter.on("car-added", (carMake, carModel) => {
  console.log(`Car has been added, once again! It is ${carMake} ${carModel}`);
});

eventEmitter.on("car-removed", () => {
  console.log("Car has been removed!");
});

eventEmitter.emit("cars-added", "Audi", "RS6");
eventEmitter.emit("car-removed");
