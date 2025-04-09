function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  let delimiter = ",";
  let numbersToProcess = numbers;

  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    delimiterlimiter = numbers.slice(2, delimiterEndIndex);
    numberToProcess = numbers.slice(delimiterEndIndex + 1);
  }

  numbersToProcess = numbersToProcess.replace(/\n/g, delimiter);
  const numberStrings = numbersToProcess.split(delimiter);
  let sum = 0;
  const negativeNumbers = [];

  for (const numberStr of numberStrings) {
    const number = parseInt(numberStr, 10);
    if (number < 0) {
      negativeNumbers.push(number);
    } else {
      sum += number;
    }
  }

  if (negativeNumbers.length > 0) {
    throw new Error(
      "negative nummbers not allowed:" + negativeNumbers.join(",")
    );
  }
  return sum;
}

module.exports = { add };
