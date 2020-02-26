function permute(input, out, acc) {
  if (input.length == 0) return [...acc, out];

  var used_char = []; // For keeping track of duplicate char -> skip recursive call

  for (var i = 0; i < input.length; ++i) {
    var out_ = out + input[i];
    var remainder = input.slice(0, i) + input.slice(i + 1);

    if (!used_char.includes(input[i])) {
      acc = permute(remainder, out_, acc);
    }

    used_char.push(input[i]);
  }

  return acc;
}

function permutation(word) {
  console.log(
    permute(word, "", [])
      .toString()
      .split(",")
      .join(", ")
  );
}

permutation("ABC");
permutation("112");
permutation("AB");
