// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  if (string === "") return {};
  let obj = {};
  string
    .split("")
    .sort()
    .join("")
    .match(/(\w)\1*/g)
    .forEach((letters) => {
      obj[letters[0]] = letters.length;
    });
  return obj;
}

console.log(count("aabbc"));
