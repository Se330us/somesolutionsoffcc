function findLongestWordLength(str) {
  let strsplit = str.split(' ');
  var longestword = 0;
  for (let i = 0; i < strsplit.length; i++){
    if (longestword < strsplit[i].length){
      longestword = strsplit[i].length;
    }
  }
  console.log(longestword)
  return longestword;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");