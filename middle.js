const middle = function(arr) {
  const middle = [];
  if (arr.length < 3) {
    return middle;
  }

  if (arr.length % 2 === 1) {
    middle.push(arr[(arr.length - 1) / 2]);
    return middle;
  }

  middle.push(arr[arr.length / 2 - 1]);
  middle.push(arr[arr.length / 2]);
  return middle;
};

module.exports = middle;