from typing import List


class Solution:
  def runningSum(nums):
    newList = []
    runningTotal = 0
    for number in nums:
      runningTotal += number
      newList.append(runningTotal)
    return newList