class Car {
  constructor(brand) {
    this.brand = brand;
  }
  drive() {
    console.log(`${this.brand} is driving`);
  }
}

const myCar = new Car("Toyota"); // myCar is an instance of Car
console.log(myCar instanceof Car); // true
myCar.drive(); // Output: "Toyota is driving"
console.log(myCar instanceof Object); // true, because all objects in JavaScript are instances of Object
console.log(myCar instanceof Array); // false, because myCar is not an instance of Array
console.log(Car.prototype);

// When checking: myCar instanceof Car
// JavaScript looks at:
console.log(Object.getPrototypeOf(myCar) === Car.prototype); // true
console.log(Object.getPrototypeOf(myCar)); // Car {}
console.log(Car.prototype); // Car {}