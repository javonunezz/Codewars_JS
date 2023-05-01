// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

function add(a, b) {
  let numberListA = a.split("").reverse();
  let numberListB = b.split("").reverse();
  let numbersList = [numberListA, numberListB];
  let numberSum = [];
  let numbersLength = [numberListA.length, numberListB.length];
  let numberDown =
    numbersList[numbersLength.indexOf(Math.min(...numbersLength))];
  let numberTop =
    numbersList[numbersLength.indexOf(Math.max(...numbersLength))];
  let resto = 0;
  for (let i = 0; i < numberDown.length; i++) {
    if (Number(numberListA[i]) + Number(numberListB[i]) + resto > 9) {
      numberSum.push(
        Number(numberListA[i]) + Number(numberListB[i]) + resto - 10
      );
      resto = 1;
    } else {
      numberSum.push(Number(numberListA[i]) + Number(numberListB[i]) + resto);
      resto = 0;
    }
  }
  if (resto == 1 && numberListA.length == numberListB.length) {
    numberSum.push(resto);
    return numberSum.reverse().join("").toString();
  } else {
    let listresto = numberTop.slice(numberDown.length).map((digit) => {
      if (resto == 1) {
        if (Number(digit) + resto <= 9) {
          let valor = Number(digit) + resto;
          resto = 0;
          return valor;
        } else {
          return Number(digit) + resto - 10;
        }
      } else {
        return Number(digit);
      }
    });
    if (resto == 1) {
      listresto.push(resto);
    }
    return numberSum.concat(listresto).reverse().join("").toString();
  }
}

console.log(add("63829983432984289347293874", "90938498237058927340892374089"));
