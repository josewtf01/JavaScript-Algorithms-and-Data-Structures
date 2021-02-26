function palindrome(str) {
  var regex = /[a-z0-9]/g;
  
  let result = [...str.toLowerCase().matchAll(regex)].flat().reverse();
  console.log(result.join(""));

  if([...str.toLowerCase().matchAll(regex)].flat().join("") === result.join("")){
    return true;
  }  
  return false;
}

palindrome("eye");
palindrome("race car");
