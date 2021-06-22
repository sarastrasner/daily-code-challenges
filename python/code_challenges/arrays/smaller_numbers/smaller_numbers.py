def smallerNumbersThanCurrent(nums):
    result = []
    tempNums = nums.copy()
    nums.sort()
    for n in tempNums:
        result.append(nums.index(n))
    return result