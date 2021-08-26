function freqCounter(string) {
  let charMap = new Map();
  for (let char of string) {
    let charCount = charMap.get(char) || 0;
    charMap.set(char, charCount + 1);
  }
  return charMap;
}

// add whatever parameters you deem necessary
function constructNote(message, letters) {
  if (message.length === 0) return true;
  if (letters.length === 0 || message.length > letters.length) return false;
  let messageMap = freqCounter(message);
  let lettersMap = freqCounter(letters);

  for (char of messageMap.keys()) {
    if (messageMap.get(char) > lettersMap.get(char))
      return false;
  }

  return true;
}
