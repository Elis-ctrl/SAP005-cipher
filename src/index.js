import cipher from './cipher.js';

    const Bc = document.getElementById("bc")
        Bc.addEventListener("click", Decode)
    const Bd = document.getElementById("bd")
        Bd.addEventListener("click", Encode)
    let msg = document.getElementById("msgcrip").value.toUpperCase();
    let key = +document.getElementById("key").value.number;
    let msgd = document.getElementById("msgdcrip").value.toUpperCase();
    let keyd = +document.getElementById("keyd").value.number;
    let newStrCrip = " " ;
    let newStrDcrip = " ";
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    let Nalphabet = 26

    function Decode(){
        console.log("chamou o botão encrip")
    }

    function Encode(){
        console.log("chamou o botão decrip")

    }

    // let values = Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
    // outra forma de fracionar o alfabeto //
