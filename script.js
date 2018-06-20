function calculMultiplication(){
var firstNumber = document.getElementById("firstNumber").value;
var secondNumber = document.getElementById("secondNumber").value;
  if(/^[0-9.]+$/.test(firstNumber && secondNumber) == true){
    firstNumber = Math.floor(firstNumber);
    secondNumber = Math.floor(secondNumber);
    var result = firstNumber * secondNumber;
    alert(result);
  }else{
    alert('Ce n\'est pas un nombre.');
  }
}
