function reverseString(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

function reverseString1(str) {
  let revStr = "";
  for (let c of str) {
    revStr = c + revStr;
  }

  return revStr;
}

function reverseString2(str) {
  return str
    .split("")
    .reverse()
    .join("");
}
