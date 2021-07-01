def thirdMax(nums):
    nums = sorted(set(nums))
    x = len(nums)
    if x > 2:
        return nums[-3]
    else:
        return max(nums)
