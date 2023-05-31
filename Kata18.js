// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

// /[_-]\w/g. Esta expresión regular se puede dividir en dos partes: el patrón y las banderas.

// El patrón es la parte principal de la expresión regular y describe lo que se está buscando. En este caso, el patrón es [_-]\w. Esta expresión regular se lee de la siguiente manera:

// [_-]: Busca cualquier carácter que sea un guión bajo o un guión.
// \w: Busca cualquier carácter que sea una letra, un número o un guión bajo.
// Por lo tanto, la expresión regular busca cualquier letra o número que siga a un guión bajo o un guión. Este patrón coincide con cada palabra que debe convertirse en CamelCase.

// Las banderas son opcionales y controlan cómo se busca el patrón. En este caso, se utiliza la bandera g (de "global") para buscar todas las coincidencias en toda la cadena. Sin la bandera g, solo se encontraría la primera coincidencia.

function toCamelCase1(str) {
  return str.replace(/[_-]\w/g, (match) => match.charAt(1).toUpperCase());
}

console.log(toCamelCase1("the_stealth_warrior"));
