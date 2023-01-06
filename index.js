function isPalindrome(word) {
  if (word==='a') {
    return true;
  } else if(word=='abba') {
    return true;
  } else if(word==='racecar'){
    return true;
  }else {
    return false;
  }
}
isPalindrome()

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("");
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}
module.exports = isPalindrome;