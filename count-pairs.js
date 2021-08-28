// add whatever parameters you deem necessary
function countPairs(arr, num) {
  let matchCounter = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if ((arr[i] + arr[j]) === num)
        matchCounter++;
    }
  }
  return matchCounter;
}
// naive, non performant approach