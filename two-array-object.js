// add whatever parameters you deem necessary
function twoArrayObject(keys, vals) {
  const arrObj = {}
  for (let i = 0; i < keys.length; i++) {
    arrObj[keys[i]] = vals[i] || null;
  }
  return arrObj
}
