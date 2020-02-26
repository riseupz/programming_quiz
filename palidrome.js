function isPalindrome(word) {
  var lowerCaseWord = word.toLowerCase();
  for (var i = 0, j = lowerCaseWord.length - 1; i <= j; i++, j--) {
    if (lowerCaseWord[i] != lowerCaseWord[j]) {
      return false;
    }
  }

  return true;
}

var word = "Deleveled";
console.log(word, isPalindrome(word));
