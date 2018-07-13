// Takes in an array that has two sorted subarrays,
//  from [p..q] and [q+1..r], and merges the array
var merge = function(array, p, q, r) {
  // Initialize Halfs
  var lowHalf = [];
  var highHalf = [];

  var k = p;
  var i;
  var j;

  for (i = 0; k <= q; i++, k++) {
      lowHalf[i] = array[k];
  }
  for (j = 0; k <= r; j++, k++) {
      highHalf[j] = array[k];
  }

  k = p;
  i = 0;
  j = 0;
  
  // Repeatedly compare the lowest untaken element in
  //  lowHalf with the lowest untaken element in highHalf
  //  and copy the lower of the two back into array
  while(i < lowHalf.length && j < highHalf.length) {
   if (lowHalf[i] < highHalf[j]) {
      array[k] = lowHalf[i];
      i += 1;
   } else {
      array[k] = highHalf[j];
      j += 1;
   }
   k += 1;
  }
  
  while (j < highHalf.length) {
   array[k] = highHalf[j];
   k++;
   j++;
  }
  
  while(i < lowHalf.length) {
   array[k] = lowHalf[i];
   k++;
   i++;
  }

};


/*
  Takes one array and the low and top limits of how it should merge
  if p !== r it's going to use recursion
*/
var mergeSort = function(array, p, r) {
  if (p !== r) {
      var q = Math.floor((p + r) / 2);
      mergeSort(array, p, q);
      mergeSort(array, q + 1, r);
      array = merge(array, p, q, r);
  }
};

var array = [14, 7, 3, 12, 9, 11, 6, 2,4,54,325,423,43,32,42,3,43,32,35,4,4,64,463,6,65,6,5,643];
mergeSort(array, 0, array.length-1);
console.log("Array after sorting: " + array);
