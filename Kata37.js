// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function (size) {
  let initialList = [];
  let listBig = [];
  for (let i = 1; i < size + 1; i++) {
    initialList.push(i);
  }
  for (let i = 1; i < size + 1; i++) {
    const listAdd = initialList.map((number) => number * i);
    listBig.push(listAdd);
  }
  return listBig;
};

multiplicationTable(3);
