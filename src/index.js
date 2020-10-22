const { bgRed } = require("colors");

module.exports = function toReadable (number) {
  if (number === 0) return 'zero';
  function getWord (num){
    let Word='';
    switch (num) {
      case 1: 
      Word = 'one';
      break;
      case 2: 
      Word = 'two';
      break;
      case 3: 
      Word = 'three';
      break;
      case 4: 
      Word = 'four';
      break;
      case 5: 
      Word = 'five';
      break;
      case 6: 
      Word = 'six';
      break;
      case 7: 
      Word = 'seven';
      break;
      case 8: 
      Word = 'eight';
      break;
      case 9: 
      Word = 'nine';
      break;
      case 0:
      Word = '';
      break;
    }
    return Word;
  }
  function getDecWord(num){
    let Word='';
    switch (num) {
      case 2: 
      Word = 'twenty ';
      break;
      case 3: 
      Word = 'thirty ';
      break;
      case 4: 
      Word = 'forty ';
      break;
      case 5: 
      Word = 'fifty ';
      break;
      case 6: 
      Word = 'sixty ';
      break;
      case 7: 
      Word = 'seventy ';
      break;
      case 8: 
      Word = 'eighty ';
      break;
      case 9: 
      Word = 'ninety ';
      break;
      case 0:
      Word = '';
      break;
    }
    return Word;
  }
  function getFirstDec(num){
    let Word='';
    switch (num) {
      case 11: 
      Word = 'eleven';
      break;
      case 12: 
      Word = 'twelve';
      break;
      case 13: 
      Word = 'thirteen';
      break;
      case 14: 
      Word = 'fourteen';
      break;
      case 15: 
      Word = 'fifteen';
      break;
      case 16: 
      Word = 'sixteen';
      break;
      case 17: 
      Word = 'seventeen';
      break;
      case 18: 
      Word = 'eighteen';
      break;
      case 19: 
      Word = 'nineteen';
      break;
      case 10:
      Word = 'ten';
      break;
    }
    return Word; 
  }

  let ed = number % 10;
  let dec = Math.trunc(number / 10) % 10;
  let sot = Math.trunc(number / 100);
  let edWord = '';
  let sotWord = '';
   let hundred = '';
   let decWord = '';

  if(sot !== 0) hundred = ' hundred ';
  sotWord = getWord(sot);

  if (dec === 1){
    edWord = '';
    dec = number % 100
    decWord = getFirstDec(dec)
    return ''.concat(sotWord,hundred,decWord,edWord).trim();
  }
  edWord = getWord(ed);
  decWord = getDecWord(dec);

  if (ed === 0) return ''.concat(sotWord,hundred,decWord).trim()
 
  return ''.concat(sotWord,hundred,decWord,edWord).trim(); 
  
}
