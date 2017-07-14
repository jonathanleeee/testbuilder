// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  
  // if first two numbers are 38 or 39 or length of 14 return 'Diner's Club'
  // if first two numbers are 34 or 37 or length of 15 return 'American Express'
  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
  var first4Digits = cardNumber.slice(0, 4);
  var first6Digits = cardNumber.slice(0, 6);
  var first3Digits = cardNumber.slice(0, 3);
  var first2Digits = cardNumber.slice(0, 2);
  if (cardNumber.length === 14 && (first2Digits === '38' || first2Digits ===  '39')) return "Diner's Club";
  else if (cardNumber.length === 15 && (first2Digits === '34' || first2Digits === '37')) return "American Express";  
  else if ((cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19 ) && (first4Digits === '4903' || first4Digits === '4905' || first4Digits === '4911' || first4Digits === '4936' || first6Digits === '564182' || first6Digits === '633110' || first4Digits === '6333' || first4Digits === '6759')) return "Switch";
  else if ((cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) && (cardNumber[0] === '4')) return "Visa";
  else if ((cardNumber.length === 16) && (first2Digits === '51' || first2Digits === '52' || first2Digits === '53' || first2Digits === '54' || first2Digits === '55')) return "MasterCard";
  else if ((cardNumber.length === 16 || cardNumber.length === 19) && (first4Digits === '6011' || (first3Digits >= '644' && first3Digits <= '649') || first2Digits === '65')) return "Discover";
  else if (((12 <= cardNumber.length) && (cardNumber.length <= 19)) && (first4Digits === '5018' || first4Digits === '5020' || first4Digits === '5038' || first4Digits === '6304')) return "Maestro";
  else if (((parseInt(first6Digits) >= 622126 && parseInt(first6Digits) <= 622925) ||(parseInt(first3Digits) >= 624 && parseInt(first3Digits) <= 626) || parseInt(first4Digits) >= 6282 && parseInt(first4Digits) <= 6288) && ((16 <= cardNumber.length) && (cardNumber.length <= 19))) return "China UnionPay";
};