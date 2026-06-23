# Array and Map Basics

This directory contains comprehensive examples and explanations of two fundamental JavaScript data structures: **Arrays** and **Maps**.

## Files Overview

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

**Run map examples:**
```bash
node map.js
```
