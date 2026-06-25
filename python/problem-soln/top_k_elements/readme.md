# Top K Frequent Elements

## Problem Note
Given an integer array, return the `k` most frequent elements. This solution keeps the implementation simple by using a hash map to count frequencies and then sorting the unique values by their counts.

## Approach
1. Traverse the array and count each number with a dictionary.
2. Sort the unique numbers by their frequency in descending order.
3. Return the first `k` numbers from that sorted list.

## Complexity
- Time Complexity: `O(n log n)` because of sorting the unique elements
- Space Complexity: `O(n)` for the frequency map

## Example
Input: `[1, 2, 2, 3, 5]`, `k = 2`

Output: `[2, 1]`

