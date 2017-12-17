var ransomNote = function (desiredMsg, wordsToWorkWith) {
  var desiredMsgArray = desiredMsg.split(' ');
  var wordsToWorkWithArray = wordsToWorkWith.split(' ');
  var wordsToWorkWithObj = {};
  var noteIsPossible = true;

  /**
   * Checks if property is present in wordsToWorkWithObj - if not present add the property and assign value of 0
   * then increment the value by 1 to keep count of how many times it's being pushed to new object
   **/
  wordsToWorkWithArray.forEach(word => {
    if (!wordsToWorkWithObj[word]) {
      wordsToWorkWithObj[word] = 0;
    }
    wordsToWorkWithObj[word]++;
  });

  desiredMsgArray.forEach(desiredWord => {
    //if word is present, decrement value by 1- keeps track of how many we have left
    if (wordsToWorkWithObj[availableWord]) {
      wordsToWorkWithObj[availableWord]--;
      //no more words left
      if (wordsToWorkWithObj[availableWord] < 0) {
        noteIsPossible = false;
      }
    } else {
      noteIsPossible = false;
    }

  });
  console.log('Note Is Possible: ' + noteIsPossible);
};
