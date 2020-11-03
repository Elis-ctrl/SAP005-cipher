const cipher = {

  // function decode(msg, key) {
    
  //     for(let contador = 0; contador < msg.length; contador++){
  //      let posicaoDaLetraNoAlfabeto = msg.charCodeAt(contador)-65;
  //       let letraComDeslocamento = (posicaoDaLetraNoAlfabeto + key) % Nalphabet;
  //       letraComDeslocamento = letraComDeslocamento == 0 % 26 : letraComDeslocamento;
  //       newStrCrip += values[letraComDeslocamento];
  //     }
  // {
    
  // }
  // function decode(params) {  
  // }
// console.log(cipher);

// function calculate() {
//   var input = document.getElementById("input").value.toUpperCase();
//   var result = "";

//   for(var i = 0; i<input.length; i++){ //Passa por cada caracter do input

//       var posicaoDaLetraNoAlfabeto = input.charCodeAt(i)-64; //Identifica qual letra é do alfabeto
//       var letraComDeslocamento = (posicaoDaLetraNoAlfabeto + key) % 26; //Faz o deslocamento de César e mantém dentro do alfabeto (26 letras)
//       letraComDeslocamento = letraComDeslocamento == 0 ? 26 : letraComDeslocamento; //MOD retornar 0 caso o resultado seja 26, tem que tratar isso
//       result += values[letraComDeslocamento-1]; //Faz -1 porque a letra 1 (A) está no índice 0 do teu array.
//   }

//   document.getElementById("output").innerHTML = result;
// }

// Function CeasarCipherD (str,num)  

// for(let i = 0; <  CaseStr.length ; i++) {
//   let currentletter = TouperCaseStr[i];
//   if(currentletter === "") {
//       NewStr += currentletter;
//       continue;
//   }
//   let currentIndex = alphabet.indexOf(currentLetter)
//   let newIndex = currentLetter + num;
//   if(newIndex > 25) newIndex = newIndex - 26;
//   if(newIndex < 0) newIndex = newIndex + 26;
//   if(str[i]) === str[i].toupperCase()){
//       newStr += alphabet[newIndex];
//   }
//   }
//   else newStr += alphabet[newIndex];
// }
// // return NewStr;



// // };

// cipher.encode() e cipher.decode()

export default cipher;

// (codigodaletra + desloc) % tamanhodoalfabeto

// codigodaletraasc - codigodaprimeiraletra + deslocamento) % tamanho do alfabeto ) + codigodaprimeiraletra

// strig.FromcharCodeAt()