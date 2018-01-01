function mapForEach(arr, aFunc) {
    newArray = [];
    for (item of arr) {
        if(item !== undefined){       
         newArray.push(aFunc(item))}
    }
    return newArray;
}

var intialArray = [1, 2, 3];
console.log(intialArray);

var initialArrayTimes2 = mapForEach(intialArray, function (item) {
    return item * 2;
})
console.log(initialArrayTimes2);

var oddItemsInInitialArray = mapForEach(intialArray, function(item){
    if (item % 2 !== 0){
        return item;
    }
    return;
})

console.log(oddItemsInInitialArray);