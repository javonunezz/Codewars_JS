// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

function firstNonRepeatingLetter(s) {
  let repeatLetter = "";
  //   const listS = s.split("");
  const listS = [4, 3, 2, 1];
  console.log(
    listS.sort((a, b) => {
      console.log("soy el a", a), console.log("soy el b", b);
      return a - b;
    })
  );
  //   listS.forEach((letter) => {
  //     let count = 0;
  //     listS.forEach((letterComp) => {
  //       if (letter.toUpperCase() == letterComp.toUpperCase()) count += 1;
  //     });
  //     if (count == 1) {
  //       repeatLetter += letter;
  //     } else {
  //       count = 0;
  //     }
  //   });
  //   if (repeatLetter == []) {
  //     return "";
  //   } else {
  //     return repeatLetter[0];
  //   }
}

firstNonRepeatingLetter("holaa");
