var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

/*
  Binary Search example
*/
const findPrime = (target) => {
  let min = 0;
  let max = primes.length - 1;

  while (min < max) {
    const guess = Math.round((min + max) / 2);
    if (primes[guess] === target) {
      return guess;
    } else if (primes[guess] > target) {
      max = guess -1;
    } else if (primes[guess] < target) {
      min = guess + 1;
    }
  }
  return -1;
}

/*
  Examines the length of an array an returns
  the needed steps in the worst case for binary search
*/
const getNeededSteps = (length) => (
  Math.log2(length)
)

console.log(getNeededSteps(1580000));

findPrime(41)