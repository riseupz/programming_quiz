function getKey(word) {
  var alphabets_list = Array(26).fill(0); // initialzing array for each of the 26 alphabets_list with 0 appearance count

  for (var i = 0; i < word.length; ++i) {
    ++alphabets_list[word.charCodeAt(i) - 65]; // increment appearance count for the alphabet
  }

  var result = "";

  for (var j = 0; j < 26; ++j) {
    if (alphabets_list[j] > 0) {
      // appearance count more than once
      result += String.fromCharCode(65 + j).repeat(alphabets_list[j]);
    }
  }

  return result;
}

function formatOutput(wordGroup) {
  var entry = 0;

  for (var group in wordGroup) {
    console.log(
      ++entry +
        ". " +
        wordGroup[group]
          .toString()
          .split(",")
          .join(" - ")
    );
  }
}

function groupWords(words) {
  var result = {};

  for (var word of words) {
    var key = getKey(word);
    if (result.hasOwnProperty(key)) {
      result[key].push(word);
    } else {
      result[getKey(word)] = [word];
    }
  }

  formatOutput(result);
}

var words = [
  "VMRCO",
  "VORCM",
  "MCRTOX",
  "ZXTAC",
  "XZATC",
  "XMTCOR",
  "OXVS",
  "AZTXC",
  "VXOS",
  "RZAT",
  "MRCOTX",
  "SVXO",
  "TRAZ",
  "ZTAR",
  "MVOCR"
];
groupWords(words);
