# JavaScript instanceof Operator Deep Dive

This folder contains educational examples and demonstrations of how the `instanceof` operator works in JavaScript, with a focus on understanding prototype chain traversal.

## Files

- **script.js** - Basic `instanceof` demonstration with the Car class
- **class-car.js** - Detailed explanation of prototypes and prototype chain traversal methods

## What is instanceof?

The `instanceof` operator checks whether an object is an instance of a specific class or constructor by traversing the prototype chain.

```javascript
const myCar = new Car("Toyota");
console.log(myCar instanceof Car); // true
```

## How It Works

`instanceof` works by:
1. Getting the constructor's prototype (e.g., `Car.prototype`)
2. Comparing it against each prototype in the object's prototype chain
3. Returning `true` if found, `false` if it reaches the end (null)

### Prototype Chain Example

```
myCar → Car.prototype → Object.prototype → null
         ↑                ↑
    instanceof Car   instanceof Object
    Found here ✓     Found here ✓
```

## Running the Examples

```bash
# Basic instanceof example
node script.js

# Detailed prototype chain traversal
node class-car.js
```

## Key Concepts

- **Prototype Chain**: A linked series of objects connected through their prototypes
- **Object.getPrototypeOf()**: Retrieves the prototype of an object
- **Non-enumerable Properties**: Class methods are non-enumerable and hidden in console display
- **Inheritance**: `instanceof` works with class inheritance hierarchies

## Prototype Chain Traversal Methods

### Method 1: Loop through the chain
```javascript
let currentProto = Object.getPrototypeOf(myCar);
let level = 0;

while (currentProto !== null) {
  console.log(`Level ${level}:`, currentProto);
  currentProto = Object.getPrototypeOf(currentProto);
  level++;
}
```

### Method 2: Manual step-by-step
```javascript
const step1 = Object.getPrototypeOf(myCar);        // Car.prototype
const step2 = Object.getPrototypeOf(step1);        // Object.prototype
const step3 = Object.getPrototypeOf(step2);        // null
```

### Method 3: How instanceof checks
```javascript
// Check each level:
Object.getPrototypeOf(myCar) === Car.prototype;     // true at level 0
Object.getPrototypeOf(Object.getPrototypeOf(myCar)) === Object.prototype;  // true at level 1
```

## Learn More

The examples demonstrate:
- Basic instanceof checks
- Prototype chain structure
- How to manually traverse the prototype chain
- instanceof with inheritance
- Non-enumerable method properties
