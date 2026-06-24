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