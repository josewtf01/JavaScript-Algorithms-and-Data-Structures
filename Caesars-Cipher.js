function rot13(str) {
  
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  alphabet = alphabet.toUpperCase();
  
  //console.log(alphabet.split(""));
  
  let arr = alphabet.split("");
  let cipherArr = {};

  for(let index in arr){
    var charDecimal = arr[index].charCodeAt(0);
    if(charDecimal < 78){
      cipherArr[String.fromCharCode(charDecimal+13)]=arr[index];
    }
    else{
      cipherArr[String.fromCharCode(charDecimal-13)]=arr[index];
    }
    //console.log(arr[index],charDecimal);

  }
  //console.log(cipherArr)
  let result = [];
  let charArr = str.split("");
  for(let i = 0;i < charArr.length;i++){
    if(alphabet.includes(charArr[i])){
      result.push(cipherArr[charArr[i]])
    }
    else{
      result.push(charArr[i]);
    }
  }
  //console.log(result.join(""));
  return result.join("");
}

rot13("SERR PBQR PNZC");
