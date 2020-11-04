import cipher from './cipher.js';

const bc = document.getElementById("bc");
bc.addEventListener("click", cifrarMensagem);

function cifrarMensagem(event) {
    event.preventDefault();
    let msg = document.getElementById("msgcrip").value.toUpperCase();
    let key = document.getElementById("key").value;
    const stringCifrada = cipher.encode(Number(key), msg)
    const exibeStringCifrada = document.getElementById("newStrCrip");
    exibeStringCifrada.innerHTML = stringCifrada
}

const bd = document.getElementById("bd");
bd.addEventListener("click", decifrarMensagem); 

function decifrarMensagem(event){
    event.preventDefault();
    let msgd = document.getElementById("msgdcrip").value.toUpperCase();
    let keyd = document.getElementById("keyd").value;
    const stringDecifrada = cipher.decode(Number(keyd), msgd)
    const exibeStringDecifrada = document.getElementById("newStrDcrip");
    exibeStringDecifrada.innerHTML = stringDecifrada
}


    // function Decode(){
    //      console.log("chamou o botão encrip")
    // }

    // function Encode(){
    //     console.log("chamou o botão decrip")

    // let values = Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
    // outra forma de fracionar o alfabeto //
    // let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    

