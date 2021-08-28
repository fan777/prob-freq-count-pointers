// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
  let subIdx = 0;
  for (let i in str2) {
    if (str2[i] === str1[subIdx])
      subIdx++
    if (subIdx === str1.length)
      return true;
  }
  return false;
}
