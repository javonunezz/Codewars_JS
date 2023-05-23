// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321              [12345]            [1]       [12345]

function descendingOrder(n) {
  const list = n.toString().split("");
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (list[j] < list[j + 1]) {
        let aux = list[j];
        list[j] = list[j + 1];
        list[j + 1] = aux;
      }
    }
  }
  console.log(typeof list.join(""));
  return list.join("");
}

descendingOrder(423154325);
