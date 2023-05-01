// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!


function expandedForm(num) {
    let listNum = num.toString().split("");
    let stringNum = ''
    for( let i=0; i<listNum.length; i++){
        if(listNum[i] != "0"){
            stringNum += listNum[i];
            stringNum += "0".repeat(listNum.length-(i+1));
            if(listNum.length-(i+1) != 0){
                stringNum += " + "
            }
        }
    }
    if(stringNum[stringNum.length - 2] == "+"){
        stringNum = stringNum.slice(0,stringNum.length-3);
        return stringNum;
    }
    return stringNum;
    
  }

console.log(expandedForm(9000000));