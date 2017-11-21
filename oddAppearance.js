/** given a list of items - print out 
//odd occurences or even depending on type input 
    'odd' || 'even'
**/
function oddsOrEvens(inputList, type) {
  var inputListArray = inputList.split(" ");
  var inputListObj = {};
  
  inputListArray.forEach(itemInList => {
    if (!inputListObj[itemInList]) inputListObj[itemInList] = 0;
    inputListObj[itemInList]++;
  });

  for (let item in inputListObj) {
    if (type === 'odd' && inputListObj[item] % 2 !== 0) {
      console.log(item + ': appears odd amount of times');
    }
    else if (type === 'even' && inputListObj[item] % 2 === 0){
        console.log(item + ': appears even amount of times')
    }
  }
}
oddsOrEvens('a b a b b c', 'odd');
