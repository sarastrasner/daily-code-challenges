from typing import List

def createTargetArray(nums, index):
    target =[]
    for i in range(len(nums)):
        target.insert(index[i], nums[i])
    return target
