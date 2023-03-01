// let bg1 = "url(img/bg.jpeg)";
// let bg2 = "url(img/sfondo.jpg)";
// let bg3 = "url(img/453757.jpg)"

// rnNUM = [bg1, bg2, bg3];

// randomq = Math.floor(Math.random()*4) +1;

function n(dato){
    document.getElementById("risultato").value += dato;
}

function operazione() {
    document.getElementById("risultato").value = eval(document.getElementById("risultato").value); 
}

function cancella() {
    document.getElementById("risultato").value = "";
}
