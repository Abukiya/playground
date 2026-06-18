# Contains Duplicate Problem

## Overview
This solution solves the classic "Contains Duplicate" problem, which checks whether an array contains any duplicate elements.

## Approaches

### 1. Brute Force Method (Initial Solution)
- Compares each element with every other element
- Time Complexity: O(n²)
- Space Complexity: O(1)
- Simple but not optimized

### 2. Optimized Solution (Current)
- Uses a **Hash Set** to track seen elements
- Time Complexity: O(n)
- Space Complexity: O(n)
- Compares set length with array length to detect duplicates
- **Much more efficient!**

## Improvements Made
Upgraded from the brute force approach to the optimized hash set method for better performance on large datasets.