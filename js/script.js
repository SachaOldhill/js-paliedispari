function isPalindrome(value) {

  var valLeng = Math.floor(value.length / 2);
  console.log(value, valLeng);
  for (var i = 0; i < valLeng; i++) {
    console.log(value[i], value[value.length - 1 - i])
    if (value[i] == value[value.length - 1 - i]) {
      // console.log('true');
    } else {
      // console.log('false');
      return false;
    }
  }
  return true;
}
var parola = prompt('inserisci una parola');
var result = isPalindrome(parola);
if (result) {
  console.log('La tua parola è palindroma')
} else {
  console.log('La tua parola non è palindroma')
}

function getRnd(min,max){

  var minRnd = min;
  var maxRnd = max - minRnd + 1;
  var rnd = Math.floor(Math.random()*maxRnd) + minRnd;
  return rnd;
}
// function isPair(value){
//   if (value % 2 == 0) {
//     return 'win';
//   } else {
//     return 'lose';
//   }
// }
var numUtente = 2;
var numPc = getRnd(1,5);
var sum = numUtente + numPc;
var isPair = sum % 2 === 0;

if (isPair) {
   document.getElementById('result').innerHTML = "It's Pair, You Win"
} else {
  document.getElementById('result').innerHTML = "It's Odd, You Lose"
}
// console.log('numPc',numPc ,'numUtente',numUtente,'sum', sum)
