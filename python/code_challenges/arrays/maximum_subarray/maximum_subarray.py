def maxSubArray(nums):
    max_sum, current_sum = -float('inf'), 0
    for num in nums:
        current_sum = max(num, current_sum + num)
        max_sum = max(current_sum, max_sum)
    return max_sum