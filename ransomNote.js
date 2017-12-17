var ransomNote = function (desiredMsg, wordsToWorkWith) {
  var desiredMsgArray = desiredMsg.split(' ');
  var wordsToWorkWithArray = wordsToWorkWith.split(' ');
  var wordsToWorkWithObj = {};

  wordsToWorkWithArray.forEach(word => {
    if (!wordsToWorkWithObj[word]) {
      wordsToWorkWithObj[word] = 0;
    }
    wordsToWorkWithObj[word]++;
  });

  var noteIsPossible = true;
  var wordQty;
  desiredMsgArray.forEach(desiredWord => {
    //check if each word is present in wordsToWorkWithArray
    for (var availableWord in wordsToWorkWithObj) {
      if (desiredWord === availableWord) {
        wordsToWorkWithObj[availableWord]--;
        noteIsPossible = true;
      }
      if (wordsToWorkWithObj[availableWord] <= 0) {
        noteIsPossible = false;
      }
    }
  });
  console.log('Note Is Possible: ' + noteIsPossible);
};
