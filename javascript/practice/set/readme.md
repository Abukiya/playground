# JavaScript Set - Practice Guide

## Overview
A **Set** is a built-in JavaScript object that stores unique values. Each value can only occur once in a Set, regardless of how many times it's added. Sets are useful for storing collections of unique items and performing set operations.

## Key Differences: Set vs Array

| Feature | Set | Array |
|---------|-----|-------|
| Uniqueness | ✅ Automatically ensures unique values | ❌ Allows duplicates |
| Lookup Performance | ✅ O(1) - Very fast | ⚠️ O(n) - Slower |
| Iteration | ✅ Maintains insertion order | ✅ Maintains order |
| Methods | Limited but optimized | Extensive methods |

## Basic Set Methods

### 1. **Creating a Set**
```javascript
const set = new Set();                    // Empty Set
const set = new Set([1, 2, 3]);          // Set with initial values
const set = new Set("hello");             // Set(4) { 'h', 'e', 'l', 'o' }
```

### 2. **add(value)** - Add element
```javascript
const numbers = new Set([1, 2]);
numbers.add(3);                           // Returns the Set object
numbers.add(2);                           // Duplicate ignored
console.log(numbers);                     // Set(3) { 1, 2, 3 }
```

### 3. **has(value)** - Check if element exists
```javascript
const colors = new Set(['red', 'blue']);
console.log(colors.has('red'));           // true
console.log(colors.has('green'));         // false
```

### 4. **delete(value)** - Remove element
```javascript
const animals = new Set(['cat', 'dog', 'bird']);
animals.delete('dog');                    // Returns true (element existed)
animals.delete('fish');                   // Returns false (element didn't exist)
```

### 5. **clear()** - Remove all elements
```javascript
const items = new Set([1, 2, 3]);
items.clear();
console.log(items);                       // Set(0) {}
```

### 6. **size** - Get number of elements
```javascript
const fruits = new Set(['apple', 'banana']);
console.log(fruits.size);                 // 2
```

## Iterating Through Sets

### 1. **forEach()** - Execute callback for each element
```javascript
const numbers = new Set([10, 20, 30]);
numbers.forEach((value) => {
    console.log(value);                   // 10, 20, 30
});
```

### 2. **values()** - Get iterator for values
```javascript
const letters = new Set(['a', 'b', 'c']);
const iterator = letters.values();
console.log(iterator.next().value);       // 'a'
console.log(iterator.next().value);       // 'b'
```

### 3. **keys()** - Get iterator for keys (same as values() in Sets)
```javascript
const iterator = letters.keys();
console.log(iterator.next().value);       // 'a'
```

### 4. **entries()** - Get [key, value] pairs
```javascript
const iterator = letters.entries();
console.log(iterator.next().value);       // ['a', 'a']
console.log(iterator.next().value);       // ['b', 'b']
```

### 5. **for...of** - Modern iteration
```javascript
const numbers = new Set([1, 2, 3]);
for (const num of numbers) {
    console.log(num);                     // 1, 2, 3
}
```

## Set Operations

### 1. **Union** (∪) - All elements from both sets
```javascript
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);
const union = new Set([...setA, ...setB]);
console.log(union);                       // Set(5) { 1, 2, 3, 4, 5 }
```

### 2. **Intersection** (∩) - Common elements
```javascript
const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log(intersection);                // Set(1) { 3 }
```

### 3. **Difference** (A - B) - Elements in A but not in B
```javascript
const difference = new Set([...setA].filter(x => !setB.has(x)));
console.log(difference);                  // Set(2) { 1, 2 }
```

### 4. **Symmetric Difference** (A ⊕ B) - Elements in either but not both
```javascript
const symmetricDiff = new Set([
    ...[...setA].filter(x => !setB.has(x)),
    ...[...setB].filter(x => !setA.has(x))
]);
console.log(symmetricDiff);               // Set(4) { 1, 2, 4, 5 }
```

## Set Comparison Utilities

### 1. **isSubset** - Is A ⊆ B? (All elements of A are in B)
```javascript
const setA = new Set([1, 2]);
const setB = new Set([1, 2, 3, 4]);
const isSubset = [...setA].every(x => setB.has(x));
console.log(isSubset);                    // true
```

### 2. **isSuperset** - Is A ⊇ B? (All elements of B are in A)
```javascript
const isSuperset = [...setB].every(x => setA.has(x));
console.log(isSuperset);                  // false
```

### 3. **isDisjoint** - Do A and B have no common elements?
```javascript
const isDisjoint = ![...setA].some(x => setB.has(x));
console.log(isDisjoint);                  // false
```

## WeakSet - Special Case

A **WeakSet** holds weak references to objects. Objects can be garbage collected if there's no other reference to them.

**Characteristics:**
- Only stores objects (no primitives)
- Not iterable
- No `size` property
- Cannot be cleared with `clear()`

```javascript
const weakSet = new WeakSet();
const obj1 = { name: 'Object 1' };

weakSet.add(obj1);
console.log(weakSet.has(obj1));           // true
weakSet.delete(obj1);
console.log(weakSet.has(obj1));           // false
```

## Common Use Cases

### 1. **Remove Duplicates from Array**
```javascript
const duplicates = [1, 2, 2, 3, 3, 3];
const unique = [...new Set(duplicates)];
console.log(unique);                      // [1, 2, 3]
```

### 2. **Check for Unique Values**
```javascript
function hasUniqueValues(arr) {
    return new Set(arr).size === arr.length;
}
console.log(hasUniqueValues([1, 2, 3]));  // true
console.log(hasUniqueValues([1, 1, 2]));  // false
```

### 3. **Fast Lookup Operations**
```javascript
const validUsers = new Set(['alice', 'bob', 'charlie']);
if (validUsers.has(username)) {
    // User is valid
}
```

### 4. **Merge and Deduplicate**
```javascript
const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
const merged = [...new Set([...arr1, ...arr2])];
console.log(merged);                      // [1, 2, 3, 4, 5]
```

## Performance Characteristics

| Operation | Time Complexity |
|-----------|-----------------|
| add()     | O(1) |
| has()     | O(1) |
| delete()  | O(1) |
| forEach() | O(n) |
| Union     | O(n + m) where n, m are set sizes |
| Intersection | O(min(n, m)) |

## Tips & Best Practices

✅ **DO:**
- Use Sets when you need to maintain unique values
- Use Sets for fast membership checking
- Convert to array when you need array methods: `[...set]`
- Use Set operations for data analysis and filtering

❌ **DON'T:**
- Don't use Set if you need duplicate values
- Don't assume Set methods exist (intersection, difference are not native)
- Don't iterate large Sets repeatedly - cache the result
- Don't store primitives in WeakSet (only objects allowed)

## Resources
- [MDN Set Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [MDN WeakSet Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)
