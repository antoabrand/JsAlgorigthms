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

  desiredMsgArray.forEach(desiredWord => {
    //check if each word is present in wordsToWorkWithArray
    for (var availableWord in wordsToWorkWithObj) {
      if (availableWord === desiredWord) {
        wordsToWorkWithObj[availableWord]--;
        console.log( wordsToWorkWithObj[availableWord]);
      }
    }
    if (wordsToWorkWithObj[availableWord] <= 0)
      return console.log('Not enough words, sorry :(');
    else {
      return console.log("You're good!");
    }
  });
};
