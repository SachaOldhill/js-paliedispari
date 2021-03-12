function isPalindrome(s,i) {
 return (i=i||0)<0||i>=s.length>>1||s[i]==s[s.length-1-i]&&isPalindrome(s,++i);
}
// ho fatto copia incolla fino a qui
var pal = isPalindrome('racecar');
// console.log(pal)

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
   document.getElementById('result').innerHTML = 'WIN'
} else {
  document.getElementById('result').innerHTML = 'LOSE'
}
console.log(numPc ,numUtente, sum)
