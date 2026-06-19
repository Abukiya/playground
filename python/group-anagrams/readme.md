# Group Anagrams

## Problem Description
Given an array of strings, group the anagrams together. An anagram is a word or phrase formed by rearranging the letters of another, typically using all the original letters exactly once.

## Example
```
Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
```

## Approach
The solution uses a hash map (dictionary) to group anagrams:
1. For each word, sort its characters to create a canonical form
2. Use the sorted word as a key in a hash map
3. Append the original word to the list of values for that key
4. Words with the same sorted form are anagrams and will be grouped together

## Algorithm
- **Time Complexity**: O(n * k log k) where n is the number of strings and k is the maximum length of a string (sorting step)
- **Space Complexity**: O(n * k) to store all characters in the hash map

## Key Insights
- Sorting characters in a word creates a unique identifier for all anagrams of that word
- Using `defaultdict(list)` simplifies the code by auto-creating lists for new keys
- The `''.join(sorted(word))` pattern is a clean way to get a sorted string

---
*Note: This was a challenging problem that required understanding hash maps and string manipulation.* 