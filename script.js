

let count = 0; 

function countCards (card) {

switch (card){

case 2: 
case 3:
case 4: 
case 5: 
case 6: 
count += 1; 
    break; 


case 7 : 
case 8 : 
case 9 : 
count+= 0; 
break; 

case 10: 
case "J":
case "Q":
case "K": 
case "As": 

    count -= 1; 

    break; 

}

if (count >0){

    console.log (count + " Bet")
}
else {console.log (count + " Hold")}

}
  
