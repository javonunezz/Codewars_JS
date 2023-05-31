// In mathematics, the factorial of integer n is written as n!. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

// Your mission is simple: write a function that takes an integer n and returns the value of n!.

// You are guaranteed an integer argument. For any values outside the non-negative range, return null, nil or None (return an empty string "" in C and C++). For non-negative numbers a full length number is expected for example, return 25! =  "15511210043330985984000000"  as a string.

// For more on factorials, see http://en.wikipedia.org/wiki/Factorial

// NOTES:

// The use of BigInteger or BigNumber functions has been disabled, this requires a complex solution

// I have removed the use of require in the javascript language.
function multiplyBigIntegers(a, b) {
  const product = Array(a.length + b.length).fill(0);

  for (let i = a.length - 1; i >= 0; i--) {
    let carry = 0;

    for (let j = b.length - 1; j >= 0; j--) {
      const digitA = parseInt(a[i]);
      const digitB = parseInt(b[j]);
      const partialProduct = digitA * digitB + carry + product[i + j + 1];
      product[i + j + 1] = partialProduct % 10;
      carry = Math.floor(partialProduct / 10);
    }
    product[i] += carry;
  }

  return product.join("").replace(/^0+/, "");
}
function factorial(n) {
  if (n < 0) return null;
  let number = "1";
  let stringNum = "";
  for (let i = 1; i <= n; i++) {
    number = multiplyBigIntegers(number, i.toString());
  }
  return number;
}

console.log(multiplyBigIntegers("258", "122"));
