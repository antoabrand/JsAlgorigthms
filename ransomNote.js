var ransomNote = function (desiredMsg, wordsToWorkWith) {
  var desiredMsgArray = desiredMsg.split(' ');
  var wordsToWorkWithArray = wordsToWorkWith.split(' ');
  var wordsToWorkWithObj = {};
  var noteIsPossible = true;

  /**
   * Checks if propert is present in wordsToWorkWithObj - if not present add the property and assign value of 0
   * then increment the value by 1 to keep count of how man times its being pushed to new object
   **/
  wordsToWorkWithArray.forEach(word => {
    if (!wordsToWorkWithObj[word]) {
      wordsToWorkWithObj[word] = 0;
    }
    wordsToWorkWithObj[word]++;
  });

  desiredMsgArray.forEach(desiredWord => {
    //check if each word is present in wordsToWorkWithArray
    for (var availableWord in wordsToWorkWithObj) {
      //if word is present, decrement the value by 1 to keep track of how many we have left before we run
      if (desiredWord === availableWord) {
        wordsToWorkWithObj[availableWord]--;
        noteIsPossible = true;
      }
      //if there are no more words left of the desired word then return false since it'd be impossible to create the desired message 
      if (wordsToWorkWithObj[availableWord] <= 0) {
        noteIsPossible = false;
      }
    }
  });
  console.log('Note Is Possible: ' + noteIsPossible);
};
