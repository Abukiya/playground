// Basics of Array in JavaScript

// 1. Creating an Array
const fruits = ['apple', 'banana', 'orange'];
const numbers = [1, 2, 100, 4, 5];
const mixed = [1, 'hello', true, null];
const empty = [];

console.log('\n--- Creating Arrays ---');
console.log('fruits:', fruits);
console.log('numbers:', numbers);

// 2. Accessing Array Elements (0-indexed)
console.log('\n--- Accessing Elements ---');
console.log('First fruit:', fruits[0]);
console.log('Last fruit:', fruits[fruits.length - 1]);

// 3. Array Properties
console.log('\n--- Array Properties ---');
console.log('Length of fruits:', fruits.length);

// 4. Modifying Array Elements
console.log('\n--- Modifying Elements ---');
fruits[1] = 'mango';
console.log('Updated fruits:', fruits);

// 5. Common Array Methods
console.log('\n--- Common Array Methods ---');

// push() - adds element at the end
fruits.push('grape');
console.log('After push(grape):', fruits);

// pop() - removes last element
const removed = fruits.pop();
console.log('Popped:', removed);
console.log('After pop():', fruits);

// unshift() - adds element at the beginning
fruits.unshift('kiwi');
console.log('After unshift(kiwi):', fruits);

// shift() - removes first element
const shifted = fruits.shift();
console.log('Shifted:', shifted);
console.log('After shift():', fruits);

// includes() - checks if element exists
console.log('\n--- Checking Elements ---');
console.log('Includes "apple":', fruits.includes('apple'));

// indexOf() - finds index of element
console.log('Index of "banana":', fruits.indexOf('banana'));


//sort() - sorts the array
console.log('\n--- Sorting Arrays ---');
console.log('Sorted fruits:', fruits.sort());
console.log('Sorted numbers:', numbers.sort()); // Default sort (lexicographical)
console.log('Sorted numbers:', numbers.sort((a, b) => a - b)); // Numeric sort
console.log("random sort:", numbers.sort(() => Math.random() - 0.5)); // Random sort

// 6. Array Iteration Methods
console.log('\n--- Array Iteration ---');

// forEach() - executes function for each element
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});

// map() - creates new array with transformed elements
const uppercased = fruits.map(fruit => fruit.toUpperCase());
console.log('Uppercased:', uppercased);

// filter() - creates new array with filtered elements
const nums = [1, 2, 3, 4, 5, 6];
const evenNumbers = nums.filter(num => num % 2 === 0);
console.log('Even numbers:', evenNumbers);

// 7. Array Slicing and Joining
console.log('\n--- Slicing and Joining ---');
console.log('slice(1, 3):', fruits.slice(1, 3));
console.log('join(", "):', fruits.join(', '));

// 8. Spread Operator
console.log('\n--- Spread Operator ---');
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log('Combined arrays:', combined);

// 9. Destructuring
console.log('\n--- Destructuring ---');
const [first, second, ...rest] = numbers;
console.log('First:', first, 'Second:', second, 'Rest:', rest);


