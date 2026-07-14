const numbers = [1, 2, 100, 4, 5];
// sum() - calculates the sum of array elements
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log('Sum of numbers:', sum);
//without using reduce
let total = 0;
for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log('Sum of numbers (without reduce):', total);
//using forEach
let totalForEach = 0;
numbers.forEach((num) => {
  totalForEach += num;
});
console.log('Sum of numbers (using forEach):', totalForEach);