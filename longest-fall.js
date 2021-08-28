// add whatever parameters you deem necessary
function longestFall(arr) {
  if (arr.length === 0) return 0
  let longest = 1;
  let thisFall = 1;
  for (let i = 0; i < arr.length - 1; i++) {
    let num1 = arr[i]
    let num2 = arr[i + 1]
    if (num1 > num2) {
      thisFall++
      if (thisFall > longest)
        longest = thisFall
    } else {
      thisFall = 1
    }
  }
  return longest;
}
