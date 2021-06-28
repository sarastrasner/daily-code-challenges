function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

// Returns number of
// ways to reach s'th stair
function climbStairs(s) {
  return fib(s + 1);
}

module.exports = climbStairs;
