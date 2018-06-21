//Déclaration de la fonction
function calculMultiplication(){
var firstNumber = document.getElementById("firstNumber").value;
var secondNumber = document.getElementById("secondNumber").value;
var regex = /^[0-9]+[.1][0-9]+$/;
//déclaration de la condition
    if((regex.test(firstNumber) == true) || (regex.test(secondNumber) == true)){
      //Renvoie le plus grand entier qui est inférieur ou égal à un nombre x
      firstNumber = Math.trunc(firstNumber);
      //Affichage du résultat
      alert(firstNumber * secondNumber);
    }
  else{
    //Echec
    alert('Ce n\'est pas un nombre à virgule.');
  }
}
