function add(
  num1: number,
  num2: number,
  showResult: boolean,
  resultPhrase: string
) {
  if (showResult) {
    // console.log(resultPhrase + num1 + num2);
    // created a bug, since string is combined with numbers so it concatenates everything to string

    const result = num1 + num2;
    console.log(resultPhrase + result);
  } else {
    return num1 + num2;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);
