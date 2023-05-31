//Statement
// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:

// solution(1000); // should return 'M'
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Remember that there can't be more than 3 identical symbols in a row.

// More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals

//Enunciado
// Crear una función que tome como parámetro un número entero positivo entre 1 y 3999 (ambos incluidos) y devuelva una cadena que contenga la representación en números romanos de dicho número entero.

// Los números romanos modernos se escriben expresando cada dígito por separado empezando por el dígito situado más a la izquierda y omitiendo cualquier dígito con valor cero. En números romanos 1990 se representa: 1000=M, 900=CM, 90=XC; dando como resultado MCMXC. 2008 se escribe como 2000=MM, 8=VIII; o MMVIII. 1666 utiliza cada símbolo romano en orden descendente: MDCLXVI.

// Ejemplo:

// solución(1000); // debería devolver 'M'
// Ayuda:

// Valor del símbolo
// I 1
// V 5
// X 10
// L 50
// C 100
// D 500
// M 1,000
// Recuerda que no puede haber más de 3 símbolos iguales seguidos.

// Más información sobre los números romanos - http://en.wikipedia.org/wiki/Roman_numerals

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
