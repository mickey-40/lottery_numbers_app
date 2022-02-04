//Picks numbers from 1-70
const powernum = function (){
let numArray1 = [];
 for (i = 0; i < 5; i++){
    let num = Math.floor(Math.random() * 70) + 1;
    numArray1.push(num);
} 
document.getElementById("powernum").innerHTML = numArray1;
}

window.onload = function() {
    powernum();
    document.getElementById("generate").addEventListener('click', powernum);
}
let bonusBall1 = Math.floor(Math.random() * 25) + 1;


let numArray2 = [];
for (j = 0; j < 5; j++){
    let num = Math.floor(Math.random() * 69) + 1;
    numArray2.push(num);
} 
let bonusBall2 = Math.floor(Math.random() * 26 + 1);






      
    
    


    
   

