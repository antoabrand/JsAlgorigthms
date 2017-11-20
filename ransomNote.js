function ransomNote(desiredMsg, wordsToWorkWith) {
  var desiredMsgArray = desiredMsg.split(" ");
  var wordsToWorkWithArray = wordsToWorkWith.split(" ");
  var wordsToWorkWithObj = {};

  wordsToWorkWithArray.forEach(word => {
    if (!wordsToWorkWithObj[word]) wordsToWorkWithObj[word] = 0;
    wordsToWorkWithObj[word]++;
  });

  console.log(wordsToWorkWithObj);
}

ransomNote('', 'How many times is times a times');