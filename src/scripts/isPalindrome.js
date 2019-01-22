function isPalindrome(string) {
    //formatting string 
    string = string.toLowerCase();
    var charArray = string.split('');
    //for checking only valid chars
    var validChars = 'abcdefghijklmnopqrstuvwxyz'.split('');
    //push to this array if formatted string has chars in validChars 
    var lettersArr = [];
    charArray.forEach(function (char) {
        //ignores invalid chars - will only push to new array if an index is found
        if (validChars.indexOf(char) > -1)
            lettersArr.push(char);
    });
    //checks reversal is same original strin = definition of palindrome 
    if (lettersArr.join('') === lettersArr.reverse().join(''))
        return true;
    else
        return false;
}