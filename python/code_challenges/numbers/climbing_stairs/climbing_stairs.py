def fib(n):
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)
 
# Returns no. of ways to
# reach sth stair
def climbStairs(s):
    return fib(s + 1)