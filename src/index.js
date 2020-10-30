import cipher from './cipher.js';

Funcion ceasarCipher (str,num)  
    num = num % 26;
    let touppercase = str.totoupperCase();
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    let newStr = "";

for(let i = 0; <  CaseStr.length ; i++) {
    let currentletter = TouperCaseStr[i];
    if(currentletter === "") {
        NewStr += currentletter;
        continue;
    }
    let currentIndex = alphabet.indexOf(currentLetter)
    let newIndex = currentLetter + num;
    if(newIndex > 25) newIndex = newIndex - 26;
    if(newIndex < 0) newIndex = newIndex + 26;
    if(str[i]) === str[i].toupperCase()){
        newStr += alphabet[newIndex];
    }
    }
    else newStr += alphabet[newIndex];
}
return NewStr;
}

console.log(cipher);

