# LeetCode 121. Best Time to Buy and Sell Stock
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:
```
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
```
Example 2:
```
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
```

## Approach & Efficiency
1. Set an arbitrarily high min and a max of 0.
1. Loop over the prices array:
  1. Set the min to be the smallest number of the min, and prices[i]
  1. Set the max to be the larges number between the max, and prices[i] - min
1. Return the max.

## Solution
```
def maxProfit(prices):
    if not prices:
        return 0

    maxProfit = 0
    minPurchase = prices[0]
    for i in range(1, len(prices)):
        maxProfit = max(maxProfit, prices[i] - minPurchase)
        minPurchase = min(minPurchase, prices[i])
    return maxProfit

```
- [Python Solution](./buy_and_sellstock.py)
- [JavaScript Solution](../../../../javascript/arrays/buyAndSellStock/README.md)

 