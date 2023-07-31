const mode = function(arr) {
  var mode;
  var max = 0;
  for (num of arr) {
    var temp = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === num) {
        temp++;
      }
    }
    console.log("temp:", temp);
    if (temp > max) {
      max = temp;
      mode = num;
    }
  }
  console.log("max:", max);
  console.log("mode:", mode);
};

mode([1 , 3, 5, 5, 6])