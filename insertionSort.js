var insert = function(array, rightIndex, value) {
  for (var i = rightIndex; array[i] > value; i--) {
   array[i + 1] = array[i];
  }
  array[i + 1] = value;
};

var insertionSort = function(array) {
  for(var i = 1; i < array.length; i++) {
   insert(array, i-1, array[i]);   
  }
};

var array = [3, 5, 7, 11, 13, 2, 9, 6];
var array2 = [-21, 4, 3, 1, 9, 7, 42];

insertionSort(array);
insertionSort(array2);
console.log(array2);
console.log("Array after sorting:  " + array2);
