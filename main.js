
    document.addEventListener('click', function (){
    let numArray1 = [];
    let numArray2 = [];
     for (i = 1; i <= 6; i++){
        if(i<6){
          let num1 = Math.floor(Math.random() * 70) + 1;
          let num2 = Math.floor(Math.random() * 70) + 1;
          numArray1.push(num1);
          numArray2.push(num2);
    }else {
      let num1 = Math.floor(Math.random() * 26) + 1;
      let num2 = Math.floor(Math.random() * 25) + 1;
      numArray1.push(num1);
      numArray2.push(num2);
    }
    document.getElementById("powernum").innerHTML = numArray1;
    document.getElementById("meganum").innerHTML = numArray2;
    }
    });
