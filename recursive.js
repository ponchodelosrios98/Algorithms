// Factorial
var factorial = function(n) {
  if(n === 0) {
      return 1;   
  } else {
   return n * factorial(n-1);   
  }
  
}; 

console.log("The value of 0! is " + factorial(0) + ".");
console.log("The value of 5! is " + factorial(5) + ".");

// Palindrome
var firstCharacter = function(str) {
  return str.slice(0, 1);
};

var lastCharacter = function(str) {
  return str.slice(-1);
};

var middleCharacters = function(str) {
  return str.slice(1, -1);
};

var isPalindrome = function(str) {
  if (str.length === 0 || str.length === 1) {
      return true;   
  } else if (lastCharacter(str) !== firstCharacter(str)) {
      return false;
  } else {
      return isPalindrome(middleCharacters(str));   
  }
};

var checkPalindrome = function(str) {
  println("Is this word a palindrome? " + str);
  println(isPalindrome(str));
};

checkPalindrome("a");
checkPalindrome("motor");
checkPalindrome("rotor");

