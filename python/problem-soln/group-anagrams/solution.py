from collections import defaultdict

strs = ["eat","tea","tan","ate","nat","bat"]
class Solution:
    def groupAnagrams(self, strs):
        anagram_map = defaultdict(list)
        
        for word in strs:
            sorted_word = ''.join(sorted(word))
            anagram_map[sorted_word].append(word)
        
        return list(anagram_map.values())
print(Solution().groupAnagrams(strs))
 
hi = "hello"
print(hi)
sorted= sorted(hi) 
print(sorted)
joinned = ''.join(sorted)
print(joinned)

check_map = defaultdict(list)
check_map[joinned].append(hi)
check_map[hi].append("world")
print(dict(check_map))
