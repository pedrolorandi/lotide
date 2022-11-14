//The function takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array.
const without = function(source, itemsToRemove){
  const newArray = source.filter(element => !itemsToRemove.includes(element));
  return newArray;
}

module.exports = without;