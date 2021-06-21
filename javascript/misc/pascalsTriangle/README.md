# Pascals Triangle
Write a function that takes rowCount as an input and generates Pasca's triangle up to that row count. Pascal's triangle should be returned as an array of arrays, where each sub array is a row.

## Approach and Efficiency
1. create the `triangle` array, which will be returned at the end of the function
1. Escape clause -> if rowCount is 0, return the empty `triangle` array
1. Push `[1]` into the `triangle` array. This is the first row of Pascal's triangle.
1. Create a for loop to generate each row
    1. add an empty array to the `triangle` array. This array is the beginning of a new row.
     1. Knowing that every row in Pascal's triangle starts with 1, add a 1 to this array using `triangle[i][0] = 1`
        1. Create a nested for loop to build the interior elements of each row. Start this loop at 1, continuing as long as this loop's counter is less than that of the outer loop.
            1. Each triangle element (other than the first and last of each row) is equal to the sum of the elements above-and-to-the-left and above-and-to-the-right.
            ```
            triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
            ```
    1. Knowing that every row in Pascal's triangle ends with 1, add a 1 to this row using `triangle[i][i] = 1`
1. Return the `triangle` array

The nested loops make the efficiency:
- time = O(rowCount^2)
- Space = O(rowCount^2)

## Solution
- [JS Solution](./pascalsTriangle.js)
- [Python Solution]()
```
function generatePascalsTriangle(rowCount) {
  let triangle = [];
  if (rowCount === 0) return triangle;
  triangle.push([1]);
  for (var i = 0; i < rowCount; i++) {
    triangle[i] = [];
    triangle[i][0] = 1;

    for (var j = 1; j < i; j++) {
      triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }
    triangle[i][i] = 1;
  }
  return triangle;
}
```

