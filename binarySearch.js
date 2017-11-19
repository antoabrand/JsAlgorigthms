//collection needs to be sorted before entering binarySearch fun
function binarySearch(collectionOfThings, key) {
  var high = collectionOfThings.length - 1;
  var low = 0;
  var mid;
  var newMid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2, 10);
    newMid = collectionOfThings[mid];
    if (newMid > key) {
      high = mid - 1;
    } else if (newMid < key) {
      low = mid + 1;
    } else
      //once newMid equals key return item as found
      return mid;
  }
  //incase item is not found
  return -1;
}

//populating through iteration will always give sorted
var collectionOfNums = [];
function populateCollection(num) {
  for (let i = 0; i < num; i++) {
    collectionOfNums.push(i);
  }
}

//sorting here just in case
collectionOfNums.sort();

populateCollection(1000);
console.log(binarySearch(collectionOfNums, 1001));
