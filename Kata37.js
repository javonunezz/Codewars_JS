// convert the number to a roman numeral
function solution(number) {
  const romanValues = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let romanNumeral = "";

  for (const [symbol, value] of Object.entries(romanValues)) {
    const count = Math.floor(number / value);
    number -= count * value;
    romanNumeral += symbol.repeat(count);
  }

  return romanNumeral;
}
console.log(solution(56));
