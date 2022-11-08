const middle = function(array) {
  let middleArray = [];
  let halfIndex = Math.floor(array.length / 2);

  if (array.length <= 2) return middleArray;

  if (array.length % 2 === 0) {
    middleArray = array.slice(halfIndex - 1, halfIndex + 1);
  } else {
    middleArray.push(array[halfIndex]);
  }

  return middleArray;
};

module.exports = middle;