def moveZeroes(nums):
    for idx in range(len(nums) - 1, -1, -1):
        if nums[idx] == 0:
            nums.pop(idx)
            nums.append(0)
    return nums
