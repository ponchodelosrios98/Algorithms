var swap = function(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

var partition = function(array, p, r) {
  var q = p;
  for (var i = p; i < r ; i++) {
      if (array[i] <= array[r]) {
          swap(array, i, q);
          q++;
      }
  }
  swap(array, r, q);
  return q;
};

var quickSort = function(array, p, r) {
  if (p < r) {
   var q = partition(array, p, r);
   quickSort(array, p, q -1);
   quickSort(array, q + 1, r);
  }
};

var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
quickSort(array, 0, array.length-1);
console.log(array, [2,3,5,6,7,9,10,11,12,14]);

var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 3];
quickSort(array, 0, array.length-1);
console.log(array, [2,3, 3, 5,7,9,10,11,12,14]);
