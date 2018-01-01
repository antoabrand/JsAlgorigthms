(function () {

    var vm = this;
    vm.encryptMsg = encryptMsg;
    vm.decryptMsg = decryptMsg;

    function encryptMsg(string, key) {

        var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
        var alphabetLength = alphabet.length;
        var encryptedMsg = [];
        var remainder;

        if (string) {
            string = string.toLowerCase().split('');
            string.forEach(function (letter) {
                if (alphabet.indexOf(letter) + key > alphabetLength - 1) {
                    remainder = alphabetLength - alphabet.indexOf(letter);
                    encryptedMsg.push(alphabet[Math.abs(remainder - key)]);
                } else if (alphabet.indexOf(letter) < 0) {
                    encryptedMsg.push(letter);
                } else
                    encryptedMsg.push(alphabet[alphabet.indexOf(letter) + key]);

            });
            console.log('(' + string.join('') + ')' + ' becomes: ' + '(' + encryptedMsg.join('') + ')');
        }
    }

    function decryptMsg(string, key) {

        var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
        var alphabetLength = alphabet.length;
        var decryptedMsg = [];
        var remainder;
        if (string) {
            string = string.toLowerCase().split('');
            string.forEach(function (letter) {
                if (alphabet.indexOf(letter) + key > alphabetLength - 1) {
                    remainder = alphabetLength - alphabet.indexOf(letter);
                    decryptedMsg.push(alphabet[Math.abs(remainder + key)]);
                } else if (alphabet.indexOf(letter) < 0) {
                    decryptedMsg.push(letter);
                } else
                    decryptedMsg.push(alphabet[alphabet.indexOf(letter) - key]);

            });

            console.log('(' + string.join('') + ')' + ' becomes: ' + '(' + decryptedMsg.join('') + ')');
        }
    }
})();