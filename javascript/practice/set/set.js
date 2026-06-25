/**
 * JavaScript Set Practice - Comprehensive Examples
 * Demonstrates native Set methods and common set operations
 */

// ============================
// 1. BASIC SET CREATION & METHODS
// ============================

console.log("--- Basic Set Methods ---");

// Creating a Set
const letters = new Set(["a", "b", "c"]);
console.log("Initial Set:", letters); // Set(3) { 'a', 'b', 'c' }

// add() - Add element to the Set
letters.add("d");
console.log("After add('d'):", letters); // Set(4) { 'a', 'b', 'c', 'd' }

// size property - Get number of elements
console.log("Size:", letters.size); // 4

// has() - Check if element exists
console.log("Has 'a'?:", letters.has("a")); // true
console.log("Has 'z'?:", letters.has("z")); // false

// delete() - Remove specific element
letters.delete("b");
console.log("After delete('b'):", letters); // Set(3) { 'a', 'c', 'd' }

// clear() - Remove all elements
const tempSet = new Set([1, 2, 3]);
tempSet.clear();
console.log("After clear():", tempSet); // Set(0) {}

// ============================
// 2. ITERATING THROUGH SETS
// ============================

console.log("\n--- Iterating Through Sets ---");

const fruits = new Set(["apple", "banana", "orange"]);

// forEach() - Iterate and execute callback
console.log("Using forEach():");
fruits.forEach((value) => {
    console.log("  " + value);
});

// values() - Get iterator for values
console.log("\nUsing values() iterator:");
const valuesIterator = fruits.values();
console.log("  1st:", valuesIterator.next().value); // apple
console.log("  2nd:", valuesIterator.next().value); // banana
console.log("  3rd:", valuesIterator.next().value); // orange

// keys() - Get iterator for keys (same as values() for Sets)
console.log("\nUsing keys() iterator:");
const keysIterator = fruits.keys();
console.log("  1st:", keysIterator.next().value); // apple
console.log("  2nd:", keysIterator.next().value); // banana

// entries() - Get [key, value] pairs (keys and values are identical in Sets)
console.log("\nUsing entries() iterator:");
const entriesIterator = fruits.entries();
console.log("  1st:", entriesIterator.next().value); // [ 'apple', 'apple' ]
console.log("  2nd:", entriesIterator.next().value); // [ 'banana', 'banana' ]

// ============================
// 3. SET OPERATIONS (UNION, INTERSECTION, DIFFERENCE)
// ============================

console.log("\n--- Set Operations ---");

const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

console.log("Set A:", setA); // Set(3) { 1, 2, 3 }
console.log("Set B:", setB); // Set(3) { 3, 4, 5 }

// Union - All elements from both sets
const unionSet = new Set([...setA, ...setB]);
console.log("Union (A ∪ B):", unionSet); // Set(5) { 1, 2, 3, 4, 5 }

// Intersection - Elements common to both sets
const intersectionSet = new Set([...setA].filter(x => setB.has(x)));
console.log("Intersection (A ∩ B):", intersectionSet); // Set(1) { 3 }

// Difference - Elements in A but not in B
const differenceSet = new Set([...setA].filter(x => !setB.has(x)));
console.log("Difference (A - B):", differenceSet); // Set(2) { 1, 2 }

// Symmetric Difference - Elements in A or B but not in both
const symmetricDifferenceSet = new Set([
    ...[...setA].filter(x => !setB.has(x)),
    ...[...setB].filter(x => !setA.has(x))
]);
console.log("Symmetric Difference (A ⊕ B):", symmetricDifferenceSet); // Set(4) { 1, 2, 4, 5 }

// ============================
// 4. SET COMPARISON UTILITIES
// ============================

console.log("\n--- Set Comparison ---");

// isSubset - Check if setA is a subset of setB
const isSubset = [...setA].every(x => setB.has(x));
console.log("Is A subset of B?:", isSubset); // false

// isSuperset - Check if setA is a superset of setB
const isSuperset = [...setB].every(x => setA.has(x));
console.log("Is A superset of B?:", isSuperset); // false

// isDisjoint - Check if sets have no common elements
const isDisjoint = ![...setA].some(x => setB.has(x));
console.log("Are A and B disjoint?:", isDisjoint); // false

// ============================
// 5. WEAKSET - Reference-based Collection
// ============================

console.log("\n--- WeakSet (Objects Only) ---");

const weakSet = new WeakSet();
const obj1 = { name: "Object 1" };
const obj2 = { name: "Object 2" };

// add() - Only accepts objects
weakSet.add(obj1);
weakSet.add(obj2);

// has() - Check if object exists
console.log("WeakSet has obj1?:", weakSet.has(obj1)); // true
console.log("WeakSet has obj2?:", weakSet.has(obj2)); // true

// delete() - Remove object
weakSet.delete(obj1);
console.log("After deleting obj1, has obj1?:", weakSet.has(obj1)); // false

// Note: WeakSet cannot be iterated and has no size property