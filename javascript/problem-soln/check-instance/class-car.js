class Car {
  constructor(brand) {
    this.brand = brand;
  }
  drive() {
    console.log(`${this.brand} is driving`);
  }
}

// Look deeper at Car.prototype:
console.log(Car.prototype); // Car {} (appears empty)

// But it HAS properties:
console.log(Object.getOwnPropertyNames(Car.prototype)); 
// ['constructor', 'drive']

console.log(Car.prototype.constructor); // [class Car]
console.log(Car.prototype.drive); // [Function: drive]

// Expand in DevTools or use:
console.log(Object.getOwnPropertyDescriptors(Car.prototype));
// Shows: 
// {
//   constructor: { value: [class Car], writable: true, enumerable: false, configurable: true },
//   drive: { value: [Function], writable: true, enumerable: false, configurable: true }
// }

// Or simply:
Object.entries(Car.prototype); // [['drive', Function]]