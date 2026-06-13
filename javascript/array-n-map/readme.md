# Array and Map Basics

This directory contains comprehensive examples and explanations of two fundamental JavaScript data structures: **Arrays** and **Maps**.

## Files Overview

### 📄 array.js
Explores the fundamentals of JavaScript Arrays with practical examples:

**Topics Covered:**
- Creating arrays (literals, constructor)
- Accessing array elements
- Array properties (length)
- Modifying elements
- Common array methods:
  - `push()` - adds element at end
  - `pop()` - removes last element
  - `unshift()` - adds element at beginning
  - `shift()` - removes first element
  - `includes()` - checks if element exists
  - `indexOf()` - finds element index
  - `forEach()` - iterates over elements
  - `map()` - transforms elements
  - `filter()` - filters elements
  - `slice()` - extracts portion of array
  - `join()` - combines elements into string
- Spread operator (`...`)
- Array destructuring

**Quick Example:**
```javascript
const fruits = ['apple', 'banana', 'orange'];
fruits.push('grape');
console.log(fruits); // ['apple', 'banana', 'orange', 'grape']
```

### 📄 map.js
Explores the fundamentals of JavaScript Maps with practical examples:

**Topics Covered:**
- Creating maps (constructor, initial values)
- Setting and getting values
- Checking key existence with `has()`
- Map size property
- Deleting keys with `delete()`
- Clearing all entries with `clear()`
- Iteration methods:
  - `entries()` - iterate over key-value pairs
  - `keys()` - iterate over keys
  - `values()` - iterate over values
  - `forEach()` - callback iteration
- Using different key types (strings, numbers, objects)
- Map vs Object comparison

**Quick Example:**
```javascript
const map = new Map();
map.set('name', 'John');
map.set('age', 30);
console.log(map.get('name')); // 'John'
```

## Key Differences: Array vs Map

| Feature | Array | Map |
|---------|-------|-----|
| **Indexed** | Yes (0-based) | No (key-value pairs) |
| **Key Types** | Only numeric indices | Any type |
| **Size Property** | `.length` | `.size` |
| **Iteration** | Built-in methods | `entries()`, `keys()`, `values()` |
| **Lookup** | By index | By key |
| **Use Case** | Ordered collections | Key-value associations |

## Running the Examples

**Run array examples:**
```bash
node array.js
```

**Run map examples:**
```bash
node map.js
```

**Run both:**
```bash
node array.js && node map.js
```

## When to Use Each

### Use Arrays When:
- You need an ordered collection of items
- You need to access elements by numeric index
- You want to use array methods like `map()`, `filter()`, `reduce()`
- Working with lists (todo items, comments, products, etc.)

### Use Maps When:
- You need key-value associations
- Keys are not just strings or numbers
- You need to check key existence efficiently
- You need to store metadata or configurations
- Objects keys don't suffice (need non-string keys)

## Learning Resources

These examples serve as a foundation for understanding:
- Data structure selection
- Performance implications
- Real-world application patterns
- Modern JavaScript conventions

Experiment with the code by modifying the examples and running them to see the outputs!
