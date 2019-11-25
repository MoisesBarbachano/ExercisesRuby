const sumPositions = (values) => {
  let position = 0;
  let sumNumbers = 0;

  values.forEach(numbers => {
    numbersSeparated = numbers.split('.');
    const number = parseInt(numbersSeparated[position]);
    if(isNaN(number)) return
    sumNumbers += number
    position++
  })

  return sumNumbers;
}

const valuesSeparated = ["13.09.2017", "13.aa.2018", "44.09.2018", "13.09.7"];
console.log(sumPositions(valuesSeparated));