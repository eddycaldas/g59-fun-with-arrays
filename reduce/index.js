
function sumNumbers(array) {
  // let sum = 0;
  // for (let i = 0; i < array.length; i++) {
  //   sum = sum + array[i]
  // }
  // return array
  return array.reduce((sum, value) => sum + value, 0)
}
// -------------------------------------------------->

// 'Transform' an Array to Another Size Array w/ .reduce
function squareEvenNumbers(array) {
  // TODO: Use at least 1 .reduce,
  // square ONLY the even numbers
  // & push the results into the return array
  return array.reduce(function(newArray, num) {
    if (num % 2 ===0)
    newArray.push(num * num)
    return newArray;
  }, [])

}
// ---------------------------------------------------->
// Use reduce to group an array of
// objects on a specified key
function groupByKey(array, key = 'key') {
  return array.reduce((obg, item) => {
    console.log("item",item);
    if (!obg[item.key]) {
      obg[item.key] = []
    } 
    obg[item.key].push(item)
    console.log(obg);
    return obg
  }, {})
  
}







module.exports = {
  sumNumbers,
  squareEvenNumbers,
  groupByKey
}
