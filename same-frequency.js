function freqCounter(val) {
  let freqMap = new Map();
  for (let char of val) {
    let charCount = freqMap.get(char) || 0;
    freqMap.set(char, charCount + 1);
  }
  return freqMap;
}
// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
  num1 = num1.toString()
  num2 = num2.toString()
  if (num1.length !== num2.length) return false;
  let num1Map = freqCounter(num1);
  let num2Map = freqCounter(num2);
  if (num1Map.size !== num2Map.size) return false;
  for (let char of num1Map.keys()) {
    if (num1Map.get(char) !== num2Map.get(char))
      return false;
  }
  return true;
}
