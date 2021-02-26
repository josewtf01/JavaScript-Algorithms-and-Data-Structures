function checkCashRegister(price, cash, cid) {
  var changeVar = cash - price;
  //console.log(changeVar);
  for(let element in cid){
    //console.log(cid[element][1]);
    if(cid[element][1] === changeVar){
      return {status:"CLOSED",change:cid};
    }

  }

   let valueArr = {"PENNY":0.01,"NICKEL":0.05,"DIME":0.1,"QUARTER":0.25,"ONE":1,"FIVE":5,"TEN":10,"TWENTY":20,"ONE HUNDRED":100};
  
  let amountArr = {};
  for(let element in cid){
    //console.log(cid[element][1]);
    amountArr[cid[element][0]] = Math.round(cid[element][1] / valueArr[cid[element][0]]);
  };
  //console.log(amountArr);
  let resultArr = [];

  let coinsAndBills = ["PENNY","NICKEL","DIME","QUARTER","ONE","FIVE","TEN","TWENTY","ONE HUNDRED"];

  for(let i = coinsAndBills.length-1;i >= 0;i--){
    //console.log(coinsAndBills[i]);
    
    //console.log("amount ->",amountArr[coinsAndBills[i]])
    if(amountArr[coinsAndBills[i]] === 0){
      continue;
    }

    let quantity = Math.floor(changeVar/valueArr[coinsAndBills[i]]);
    if(quantity === 0){
      continue;
    }
    if(quantity >= amountArr[coinsAndBills[i]]){
      resultArr.push([coinsAndBills[i],cid[i][1] ]);
      changeVar -= cid[i][1];
      changeVar = changeVar.toFixed(2);
    }
    else{
      resultArr.push( [ coinsAndBills[i] , quantity*valueArr[coinsAndBills[i]] ] );
      changeVar -= quantity*valueArr[coinsAndBills[i]];
      changeVar = changeVar.toFixed(2);
    }
    if(changeVar === 0){
      break;
      return {status:"OPEN", change:resultArr}
    }
    //console.log("change: ",changeVar);
    //console.log(resultArr);
    
  }

  if(changeVar == 0){
      return {status:"OPEN", change:resultArr}
    }

  return {status: "INSUFFICIENT_FUNDS", change: []};
  
};

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

//console.log( checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) );

