function leftJoin(table1, table2) {
  let resultsArray = [];
  if (!table1 || !table2) throw new Error();
  for (let i = 0; i < table1.length; i++) {
    let key = table1[i][key];
    let value = table2[i][key];
    resultsArray.push(key, value);
  }
  console.log(resultsArray);
  for (let j = 0; j < table2.length; j++) {
    let key = table2[j][0];
    let value = table2[j][1];
    for (let k = 0; k < resultsArray.length; k++) {
      if (key === resultsArray[k][0]) resultsArray[k].push(value);
      else resultsArray[k].push(null);
    }
  }
  return resultsArray;
}

module.exports = leftJoin;
