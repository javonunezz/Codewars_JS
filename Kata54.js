function titleCase(title, minorWords = "") {
  function upperFirstWord(word) {
    const upperWord = word.toLowerCase().replace(/^\w/, function (l) {
      return l.toUpperCase();
    });
    return upperWord;
  }
  if (title === "") return "";
  const lowerTitle = title[0].toUpperCase() + title.slice(1).toLowerCase();
  const lowerMinorWords = minorWords.toLowerCase();
  let listWords = lowerTitle.split(" ");
  const invalidWords = lowerMinorWords.split(" ");
  const result = [listWords[0]].concat(
    listWords
      .slice(1)
      .map((word) =>
        invalidWords.includes(word) ? word.toLowerCase() : upperFirstWord(word)
      )
  );
  return result.join(" ");
}

console.log(titleCase("a clash of KINGS', 'a an the of"));
