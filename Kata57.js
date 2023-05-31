// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// Dada una matriz de números enteros, encuentre el que aparece un número impar de veces.

// Siempre habrá un solo número entero que aparecerá un número impar de veces.

// Ejemplos
// [7] debería devolver 7, porque ocurre 1 vez (lo cual es impar).
// [0] debería devolver 0, porque ocurre 1 vez (lo cual es impar).
// [1,1,2] debería devolver 2, porque ocurre 1 vez (lo cual es impar).
// [0,1,0,1,0] debería devolver 0, porque ocurre 3 veces (lo cual es impar).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] debería devolver 4, porque aparece 1 vez (lo cual es impar).

function findOdd(A) {
  const arrayReduce = A.reduce((acummulator, currentValue) => {
    if (acummulator[currentValue]) {
      acummulator[currentValue] += 1;
    } else {
      acummulator[currentValue] = 1;
    }
    return acummulator;
  }, {});

  const firstOddTimes = Number(
    Object.entries(arrayReduce).find((numerTimes) => numerTimes[1] % 2 === 1)[0]
  );
  return firstOddTimes;
}
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
