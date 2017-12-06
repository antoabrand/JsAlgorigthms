var inputList = 'a b e c d f f f g';
const ODD = 'odd';
const EVEN = 'even';

function oddAppearance(inputList, type) {
  let inputListArray = inputList.split(" ");
  let inputListObj = {};

  /* 
    foreach item in the array - populate obj with item and initialize with value
    0 if item does not exist in the obj, then increment the value by one 
    each time we come across the item again
  */
  if (inputList) {
    inputListArray.forEach(itemInList => {
      if (!inputListObj[itemInList]) {
        inputListObj[itemInList] = 0;
      }
      inputListObj[itemInList]++;
    });

    for (let item in inputListObj) {
      if (type === 'odd' && inputListObj[item] % 2 !== 0) {
        console.log(item + ': appears odd amount of times');
      } else if (type === 'even' && inputListObj[item] % 2 === 0) {
        console.log(item + ': appears even amount of times');
      }
    }
  }
}

function sort(inputList) {
  inputListArray = inputList.split(' ');
  for(let i in inputListArray){
    console.log(i);
  }
}

sort(inputList);
oddAppearance(inputList, ODD);
//oddAppearance('a b a b b c', 'even');