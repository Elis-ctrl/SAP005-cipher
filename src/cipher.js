const cipher = {

  encode: function(key, msg) {
    let newStrCrip = ""

    if ( key == null || msg == null) {
      throw new TypeError("Deu bug"); 
  } else {
    for(let contador = 0; contador < msg.length; contador++) {

      let posicaoDaLetraNoAlfabeto = msg.charCodeAt(contador) - 65;
      let newcharC = ((posicaoDaLetraNoAlfabeto + key) % 26) + 65;
      let newString = String.fromCharCode(newcharC)

      newStrCrip += newString;
    }
    return newStrCrip
  }
},

  decode: function(keyd, msgd) {
    let newStrDcrip = ""

    if ( keyd == null || msgd == null) {
      throw new TypeError("Deu bug"); 
  } else {
    for(let c = 0; c < msgd.length; c++) {

      let posicaoDaLetraNoAlfabetochar = msgd.charCodeAt(c) - 90;
      let newcharDC = ((posicaoDaLetraNoAlfabetochar - keyd) % 26) + 90;
      let newStringD = String.fromCharCode(newcharDC)

      newStrDcrip += newStringD;
    } 
    return newStrDcrip
  }
}
};

  export default cipher;







// dados passados no video
// (codigodaletra + desloc) % tamanhodoalfabeto
// codigodaletraasc - codigodaprimeiraletra + deslocamento) % tamanho do alfabeto ) + codigodaprimeiraletra
// strig.FromcharCodeAt()
// console.log(cipher);

// fu calculate() {
//   var input = document.getElementById("input").value.toUpperCase();
//   var result = "";

//   for(var i = 0; i<input.length; i++){ //Passa por cada caracter do input

//       var posicaoDaLetraNoAlfabeto = input.charCodeAt(i)-64; //Identifica qual letra é do alfabeto
//       var letraComDeslocamento = (posicaoDaLetraNoAlfabeto + key) % 26; //Faz o deslocamento de César e mantém dentro do alfabeto (26 letras)
//       letraComDeslocamento = letraComDeslocamento == 0 ? 26 : letraComDeslocamento; //MOD retornar 0 caso o resultado seja 26, tem que tratar isso
//       result += values[letraComDeslocamento-1]; //Faz -1 porque a letra 1 (A) está no índice 0 do teu array.
//   }
