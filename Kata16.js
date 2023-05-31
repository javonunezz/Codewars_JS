// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  const newArray = arr.filter((element) => element !== 0);
  function addValue(valor, n) {
    for (let i = 0; i < n; i++) {
      newArray.push(valor);
    }
  }
  addValue(0, arr.length - newArray.length);
  return newArray;
}
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
