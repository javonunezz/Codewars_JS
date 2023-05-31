// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  let newList = [];
  str
    .split(" ")
    .map((word) =>
      /^[a-zA-Z]+$/.test(word)
        ? newList.push(
            word.split("").slice(1, word.length).join("") + word[0] + "ay"
          )
        : newList.push(word)
    );
  return newList.join(" ");
}
console.log(pigIt("hola como estas !"));
