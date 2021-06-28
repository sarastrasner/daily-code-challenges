# LetCode 70: Climbing Stairs
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 
Example 1:
```
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
```
Example 2:
```
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
```

## Approach and Efficiency
1. We can easily find the recursive nature in the above problem. 1. The person can reach nth stair from either (n-1)th stair or from (n-2)th stair. 
1. So, for each stair n, we try to find out the number of ways to reach n-1th stair and n-2th stair and add them to give the answer for the nth stair. 
1. Therefore the expression for such an approach comes out to be : 
```
ways(n) = ways(n-1) + ways(n-2)
```
1. The above expression is actually the expression for Fibonacci numbers, but there is one thing to notice, the value of ways(n) is equal to fibonacci(n+1). 

## Solution
```
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

function climbStairs(s) {
  return fib(s + 1);
}
```

- [JavaScript Solution](./climbingStairs.js)
- [Python Solution](../../../python/code_challenges/numbers/climbing_stairs/README.md)
