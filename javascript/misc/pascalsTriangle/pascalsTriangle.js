function generatePascalsTriangle(rowCount) {
  let triangle = [];
  if (rowCount === 0) return triangle;
  triangle.push([1]);
  for (var i = 0; i < rowCount; i++) {
    triangle[i] = [];
    //Second base case
    triangle[i][0] = 1;

    for (var j = 1; j < i; j++) {
      triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }
    //The last element of all rows are always 1.
    triangle[i][i] = 1;
  }
  return triangle;
}

module.exports = generatePascalsTriangle;
