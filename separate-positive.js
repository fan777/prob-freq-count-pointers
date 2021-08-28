// add whatever parameters you deem necessary
function separatePositive(arr) {
  if (arr.length > 1) {
    leftIdx = 0;
    rightIdx = arr.length - 1;
    while (leftIdx < rightIdx) {
      if (arr[leftIdx] > 0) {
        leftIdx++;
      } else if (arr[leftIdx] < 0) {
        if (arr[rightIdx] < 0) {
          rightIdx--;
        } else {
          let temp = arr[leftIdx];
          arr[leftIdx] = arr[rightIdx]
          arr[rightIdx] = temp
          leftIdx++;
          rightIdx--;
        }
      }
    }
  }
  return arr;
}
