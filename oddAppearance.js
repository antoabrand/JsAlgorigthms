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

oddAppearance('a b a b b c', 'odd');
//oddAppearance('a b a b b c', 'even');
