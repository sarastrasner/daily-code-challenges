def shuffle(nums, n):
    newList = []
    for i in range(n):
        newList.append(nums[i])
        newList.append(nums[i + n])
    return newList
