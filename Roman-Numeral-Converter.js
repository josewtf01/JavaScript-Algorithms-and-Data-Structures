function romanNumber(a){
     var arr = {};
        
            if(a<10){
            arr = {1:"I",2:"II",3:"III",4:"IV",5:"V",6:"VI",7:"VII",8:"VIII",9:"IX"};
            return arr[a];
            }
            
            else if (a >= 10 && a < 100){
            arr = {10:"X",20:"XX",30:"XXX",40:"XL",50:"L",60:"LX",70:"LXX",80:"LXXX",90:"XC"};
            return arr[a];
            }
     
            else if (a >= 100 && a < 1000){
            arr = {100:"C",200:"CC",300:"CCC",400:"CD",500:"D",600:"DC",700:"DCC",800:"DCCC",900:"CM"};
            return arr[a];
            }
            
            else if(a >= 1000 && a < 10000){
            arr = {1000:"M",2000:"MM",3000:"MMM"};
            return arr[a];
            }
            
            return "";
        
}

function convertToRoman(num) {
 let digits = num.toString(10);
 digits = digits.split("");
 console.log(digits.reverse());
 let result = [];
for(let i = 0; i < digits.length;i++){
    //console.log("for : ",digits[i]*Math.pow(10,i));
    result.push(romanNumber(digits[i]*Math.pow(10,i)))

}

//console.log(result.reverse().join(""))



 //console.log(num.toString(10));
 return result.reverse().join("");
}

console.log(convertToRoman(12));
