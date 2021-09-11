// add whatever parameters you deem necessary
function pivotIndex(arr) {
  if (arr.length < 2) return -1;

  let totalSum = arr.reduce((prev, curr) => prev + curr);
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 2; i < arr.length - 1; i++) {
    leftSum += arr[i - 2]
    rightSum = totalSum - leftSum - arr[i - 1]
    if (leftSum === rightSum)
      return i - 1;
  }
  return -1;
}