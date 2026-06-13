nums = [1,1,2]
new_num =[]

for i in range(len(nums)):
    check =nums[i]
    for i in range(i+1,len(nums)):
        if check == nums[i]:
            continue
        else:
            new_num.append(check)
print(check)
print(new_num)