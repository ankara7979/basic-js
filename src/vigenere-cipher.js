const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {constructor (machine = true) {
  this.machine = machine;
}
encrypt(message, key) {
  if (message === undefined || key === undefined) {
    throw new Error('THROWN');
  } else {
    if (key.length < message.length) {
      for (let i=0; i<message.length; i++) {
        key += key[i % key.length];
      }
    }
    key = key.toUpperCase();
    let mes = message.toUpperCase().match(/[a-z]/gi);
    if (mes !== null) {
      mes = mes.join(''); }
    let rez = '';
    let n=0;
    for (let i=0; i<message.length; i++) {     
      if (message[i].match(/[a-z]/i) !== null ) {
        let a = mes.charCodeAt(n)-65;
        let b = key.charCodeAt(n)-65;
        rez += String.fromCharCode(((a+b)%26)+65); 
        n=n+1;
      } else { 
        rez += message[i];
        }
    } if (!this.machine) { 
      return rez.split("").reverse().join("");
    } else {
      return rez;
    }
  }
}    
decrypt(message, key) {
  if (message === undefined || key === undefined) {
    throw new Error('THROWN');
  } else {
    if (key.length < message.length) {
      for (let i=0; i<message.length; i++) {
        key += key[i % key.length];
      }
    }
    key = key.toUpperCase();
    let mes = message.toUpperCase().match(/[a-z]/gi);
    if (mes !== null) {
      mes = mes.join(''); }
    let rez = '';
    let n=0;
    for (let i=0; i<message.length; i++) {     
      if (message[i].match(/[a-z]/i) !== null ) {
        let a = mes.charCodeAt(n)-65;
        let b = key.charCodeAt(n)-65;
        rez += String.fromCharCode(((a+26-b)%26)+65); 
        n=n+1;
      } else { 
        rez += message[i];
        }
    } if (!this.machine) { 
      return rez.split("").reverse().join("");
    } else {
      return rez;
    }
  }
}
}

module.exports = VigenereCipheringMachine;
