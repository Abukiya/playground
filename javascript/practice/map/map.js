// Basics of Map in JavaScript

// 1. Creating a Map
console.log('\n--- Creating Maps ---');
const map1 = new Map();
const map2 = new Map([
  ['name', 'John'],
  ['age', 30],
  ['city', 'New York']
]);

console.log('Empty map:', map1);
console.log('Map with initial values:', map2);

// 2. Setting Values
console.log('\n--- Setting Values ---');
map1.set('key1', 'value1');
map1.set('key2', 'value2');
map1.set('key3', 'value3');
console.log('After setting values:', map1);

// 3. Getting Values
console.log('\n--- Getting Values ---');
console.log('Get key1:', map1.get('key1'));
console.log('Get non-existent key:', map1.get('key4'));

// 4. Checking if Key Exists
console.log('\n--- Checking Keys ---');
console.log('Has key1:', map1.has('key1'));
console.log('Has key4:', map1.has('key4'));

// 5. Map Size
console.log('\n--- Map Size ---');
console.log('Size of map1:', map1.size);

// 6. Deleting Keys
console.log('\n--- Deleting Keys ---');
map1.delete('key2');
console.log('After deleting key2:', map1);
console.log('Size after deletion:', map1.size);

// 7. Clearing Map
const tempMap = new Map([['a', 1], ['b', 2]]);
console.log('\n--- Clearing Map ---');
console.log('Before clear:', tempMap);
tempMap.clear();
console.log('After clear:', tempMap);

// 8. Iterating Over Map
console.log('\n--- Iterating Over Map ---');
const userMap = new Map([
  ['user1', { name: 'Alice', age: 25 }],
  ['user2', { name: 'Bob', age: 30 }],
  ['user3', { name: 'Charlie', age: 35 }]
]);

// Using entries()
console.log('\nUsing entries():');
for (const [key, value] of userMap.entries()) {
  console.log(`${key}: ${JSON.stringify(value)}`);
}

// Using keys()
console.log('\nUsing keys():');
for (const key of userMap.keys()) {
  console.log('Key:', key);
}

// Using values()
console.log('\nUsing values():');
for (const value of userMap.values()) {
  console.log('Value:', JSON.stringify(value));
}

// Using forEach()
console.log('\nUsing forEach():');
userMap.forEach((value, key) => {
  console.log(`${key} => ${JSON.stringify(value)}`);
});

// 9. Map with Different Key Types
console.log('\n--- Map with Different Key Types ---');
const mixedKeyMap = new Map();
mixedKeyMap.set('string', 'string key');
mixedKeyMap.set(1, 'number key');
mixedKeyMap.set(true, 'boolean key');
mixedKeyMap.set({ id: 1 }, 'object key');

console.log('Mixed key map size:', mixedKeyMap.size);
console.log('Get with string key:', mixedKeyMap.get('string'));
console.log('Get with number key:', mixedKeyMap.get(1));

// 10. Map vs Object
console.log('\n--- Map vs Object ---');
const obj = { name: 'John', age: 30 };
const map = new Map([['name', 'John'], ['age', 30]]);

console.log('Object keys:', Object.keys(obj));
console.log('Map size:', map.size);
console.log('Object key access:', obj.name);
console.log('Map key access:', map.get('name'));