# Pascals Triangle
Write a function that takes rowCount as an input and generates Pasca's triangle up to that row count. Each row of Pascal's triangle should be returned as an array. 

## Approach and Efficiency
1. Initialize the first row, using `trow`
1. Iitialize variable y=0. 
1. Use a for loop to run the code for `n` iterations, where `n` is the number of rows.
1. Inside the for loop we will print the list initialized by trow variable.
1. Each triangle element (other than the first and last of each row) is equal to the sum of the elements above-and-to-the-left and above-and-to-the-right. Use `zip()` to create a tuple representing the left and right values

## Solution
- [JS Solution](../../../../javascript/misc/pascalsTriangle/README.md)
- [Python Solution](./pascals_triangle.py)
```
def PascalTriangle(n):
   trow = [1]
   y = [0]
   for x in range(n):
      print(trow)
      trow=[left+right for left,right in zip(trow+y, y+trow)]
   return n>=1
```

