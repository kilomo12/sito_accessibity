/*Questa funzione è stata creata in base alle competenze acquisite  */
function cambiaBackground(){
    try {
       var s = this.id;
        var body = document.getElementById("gruppo");
switch (s) {
    case "1":
        body.setAttribute("class","gruppo1");
        nodoBackground.value = "La bellezza dei fiori";
        break;
    case "2":
        body.setAttribute("class","gruppo2");
        nodoBackground.value = "L'acqua";
        break;
    case "3":
        body.setAttribute("class","gruppo3");
        nodoBackground.value = "Multidimenzionale";
        break;
    case "4":
        body.setAttribute("class","gruppo4");
        nodoBackground.value = "Universo";
        break;
    case "reset":
        body.setAttribute("class","gruppo");
        nodoBackground.value = "Background";
        break;
    default:
        body.setAttribute("class","gruppo");
        break;
}
    } catch (error) {
        
    }
}
var nodoBackground;
var nodoCambia;
var nodoCambia1;
var nodoCambia2;
var nodoCambia3;
var nodoReset;
function gestoreLoad () {
    try {
        nodoCambia = document.getElementById("1");
        nodoCambia1 = document.getElementById("2");
        nodoCambia2 = document.getElementById("3");
        nodoCambia3 = document.getElementById("4");
        nodoReset = document.getElementById("reset");
        nodoBackground = document.getElementById("background");
        nodoCambia.onclick = cambiaBackground;
        nodoCambia1.onclick = cambiaBackground;
        nodoCambia2.onclick = cambiaBackground;
        nodoCambia3.onclick = cambiaBackground;
        nodoReset.onclick = cambiaBackground;
        nodoBackground.value = "Background";
} catch ( e ) {
    alert("gestoreLoad " + e);
    }
}
window.onload = gestoreLoad;   