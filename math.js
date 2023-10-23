class Car {
  constructor(name, color, speed) {
    console.log("Constructor");
    this.name = name;
    this.color = color;
    this.speed = speed;
    this.pcrice = 1000;
  }

  fullInfo() {
    console.log("Car name: ", this.name);
    console.log("Car name: ", this.color);
    console.log("Car name: ", this.speed);
  }

  getName(role) {
    if (role == "seller") {
      return this.name;
    } else {
      return "No permission";
    }
  }
  setName(name) {
    this.name = name;
  }
}
const car = new Car("BMW", "red", 200);
const car1 = new Car("Benz", "yellow", 900);

// car.fullInfo();
// car1.fullInfo();

console.log(car.getName());
car.setName("audio");
console.log(car.getName());

class Bus extends Car {
  constructor(name, color, speed, capacity) {
    super(name, color, speed);
    this.capacity = capacity;
  }
  fullInfo() {
    console.log("Car name: ", this.name);
    console.log("Car name: ", this.color);
    console.log("Car name: ", this.speed);
    console.log("Car name: ", this.capacity);
  }
}

const b1 = new Bus("Hino", "blue", 1000, 40);
console.log(b1.fullInfo());

car.fullInfo();
b1.fullInfo();
