
// add whatever parameters you deem necessary
function averagePair(arr, average) {
  if (arr.length === 0) return false;
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (leftIdx <= rightIdx) {
    if (arr[leftIdx] > average)
      return false;
    let currAvg = (arr[leftIdx] + arr[rightIdx]) / 2
    if (currAvg === average) {
      return true;
    } else if (currAvg > average) {
      rightIdx--;
    } else if (currAvg < average) {
      leftIdx++;
    }
  }
  return false
}