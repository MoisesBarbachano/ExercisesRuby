const getSumHigher = (numbers) => {
  const maxPositions = getNumberColumns(numbers);
  const sumRows = getMaxSumRows(numbers);
  const sumColumns = getMaxSumColumns(numbers, maxPositions);
  
  return sumRows > sumColumns ? sumRows : sumColumns;
}

const getNumberColumns = (numbers) => {
  let maxPositions = 0;

  numbers.forEach(row => {
    let countRow = row.length;
    if(countRow > maxPositions) { maxPositions = countRow };
  });

  return maxPositions;
}

const getMaxSumRows = (numbers) => {
  let maxSum = 0;

  numbers.forEach(row =>{
    sumRow = row.reduce((previousNumber, nextNumber) => previousNumber + nextNumber);
    if(sumRow > maxSum) { maxSum = sumRow };  
  });

  return maxSum;
}

const getMaxSumColumns = (numbers, maxPositions) => {
  let maxSum = 0;

  for(position = 0; position <= maxPositions; position++){
    sumColumn = 0;
    numbers.forEach(row => {
      if(row[position]) { sumColumn += row[position] };
    });
    if(sumColumn > maxSum) { maxSum = sumColumn };
  };

  return maxSum;
}

numbers = [
  [6, 7, 8],
  [1, 4, 29, 2],
  [4, 78]
];

console.log(getSumHigher(numbers));