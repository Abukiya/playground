class Solution:
    def containsDuplicate(self, nums: []) -> bool: # type: ignore
        num_set = set()
        for num in nums:
            if num in num_set:
                return True
            num_set.add(num)
        return False

nums = [1,2,3,4]
print(Solution().containsDuplicate(nums))
    
for i in range(1, len(nums)):
    print(i)
     
    def brute_force(self, nums: []) -> bool: # type: ignore
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i] == nums[j]:
                    return True
        return False