from typing import List


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        """Return the k most frequent numbers from nums."""
        frequencies = {}

        # Count how often each number appears.
        for number in nums:
            frequencies[number] = frequencies.get(number, 0) + 1

        # Sort unique numbers by frequency in descending order and keep the top k.
        ranked_numbers = sorted(frequencies, key=frequencies.get, reverse=True)
        return ranked_numbers[:k]


if __name__ == "__main__":
    sample_nums = [1, 2, 2, 3, 5]
    sample_k = 2

    solution = Solution()
    print(solution.topKFrequent(sample_nums, sample_k))