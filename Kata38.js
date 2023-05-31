// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers) {
  const list = [
    Math.abs(integers[0]) % 2,
    Math.abs(integers[1]) % 2,
    Math.abs(integers[2] % 2),
  ];
  const sortList = list.sort();
  if (sortList[0] == 0 && sortList[1] == 0) {
    return integers.find((number) => Math.abs(number % 2) != 0);
  } else {
    return integers.find((number) => Math.abs(number % 2) == 0);
  }
}

console.log(findOutlier([0, 0, 3, 0, 0]));
