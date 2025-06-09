/* Questa funzione è stata utilizzata per la semplicità del codice in base agli argomenti affrontati durante 
i laboratori e qualche estratto della dispensa */ 
function gestoreFoto () {
    try {
        var nodoFoto=this.id;
     switch (nodoFoto){
case "foto1":
    scriviMessaggio(nodoTesto1, "Extreme Nord");
    break;
case "foto2":
    scriviMessaggio(nodoTesto2, "Nord");
    break;
case "foto3":
    scriviMessaggio(nodoTesto3, "Adamaoua");
    break;
case "foto4":
    scriviMessaggio(nodoTesto4, "Ouest");
    break;
case "foto5":
    scriviMessaggio(nodoTesto5, "Nord-Ouest");
    break;
case "foto6":
    scriviMessaggio(nodoTesto6, "Sud-Ouest");
    break;
case "foto7":
    scriviMessaggio(nodoTesto7, "Littoral");
    break;
case "foto8":
    scriviMessaggio(nodoTesto8, "Centre");
    break;
case "foto9":
    scriviMessaggio(nodoTesto9, "Est");
    break;
case "foto10":
    scriviMessaggio(nodoTesto10, "Sud");
    break;
default :
    scriviMessaggio(nodoTuttiTesti, "niente");
}
} catch ( e ) {
alert("gestoreFoto " + e);
}
}
function scriviMessaggio (nodo, messaggio) {
var nodoTesto = document.createTextNode(messaggio);
nodo.replaceChild(nodoTesto, nodo.firstChild);
}
function gestoreDisattivare () {
    try {
     nodoBox.setAttribute("class", "attivare");                              
     nodoImagina.setAttribute("class", "disattivare");
    } catch ( e ) {
    alert("gestoreDisattivare " + e);
    }
   }
   function gestoreAttivare () {
    try {                                
     nodoImagina.setAttribute("class", "attivare");
     nodoBox.setAttribute("class", "disattivare");
    } catch ( e ) {
    alert("gestoreAttiva " + e);
    }
   }
   var nodoFoto1 ;
   var nodoFoto2 ;
   var nodoFoto3 ;
   var nodoFoto4 ;
   var nodoFoto5 ;
   var nodoFoto6 ;
   var nodoFoto7 ;
   var nodoFoto8 ;
   var nodoFoto9 ;
   var nodoFoto10 ;
   var nodoTesto1 ;
   var nodoTesto2 ;
   var nodoTesto3 ;
   var nodoTesto4 ;
   var nodoTesto5 ;
   var nodoTesto6 ;
   var nodoTesto7 ;
   var nodoTesto8 ;
   var nodoTesto9 ;
   var nodoTesto10 ;
   var nodoMappaPaese ;
   var nodoImagina ;
   var nodoBox ;
   function gestoreLoad () {
try {
    nodoImagina = document.getElementById("imagina");
    nodoBox = document.getElementById("box");
    nodoMappaPaese = document.getElementById("Mappa");
    nodoFoto1 = document.getElementById("foto1");
    nodoFoto2 = document.getElementById("foto2");
    nodoFoto3 = document.getElementById("foto3");
    nodoFoto4 = document.getElementById("foto4");
    nodoFoto5 = document.getElementById("foto5");
    nodoFoto6 = document.getElementById("foto6");
    nodoFoto7 = document.getElementById("foto7");
    nodoFoto8 = document.getElementById("foto8");
    nodoFoto9 = document.getElementById("foto9");
    nodoFoto10 = document.getElementById("foto10");
    nodoTesto1 = document.getElementById("citta1");
    nodoTesto2 = document.getElementById("citta2");
    nodoTesto3 = document.getElementById("citta3");
    nodoTesto4 = document.getElementById("citta4");
    nodoTesto5 = document.getElementById("citta5");
    nodoTesto6 = document.getElementById("citta6");
    nodoTesto7 = document.getElementById("citta7");
    nodoTesto8 = document.getElementById("citta8");
    nodoTesto9 = document.getElementById("citta9");
    nodoTesto10 = document.getElementById("citta10");
    nodoFoto1.onmouseover = gestoreFoto;
    nodoFoto2.onmouseover = gestoreFoto;
    nodoFoto3.onmouseover = gestoreFoto;
    nodoFoto4.onmouseover = gestoreFoto;
    nodoFoto5.onmouseover = gestoreFoto;
    nodoFoto6.onmouseover = gestoreFoto;
    nodoFoto7.onmouseover = gestoreFoto;
    nodoFoto8.onmouseover = gestoreFoto;
    nodoFoto9.onmouseover = gestoreFoto;
    nodoFoto10.onmouseover = gestoreFoto;
    nodoMappaPaese.onclick = gestoreDisattivare ;
    nodoMappaPaese.ondblclick = gestoreAttivare ; // evento on double click
    var text = document.createTextNode("");
    var text1 = document.createTextNode(""); 
    var text2 = document.createTextNode("");
    var text3 = document.createTextNode("");
    var text4 = document.createTextNode("");
    var text5 = document.createTextNode("");
    var text6 = document.createTextNode("");
    var text7 = document.createTextNode("");
    var text8 = document.createTextNode("");
    var text9 = document.createTextNode("");
    nodoTesto1.appendChild(text);
    nodoTesto2.appendChild(text1);
    nodoTesto3.appendChild(text2);
    nodoTesto4.appendChild(text3);
    nodoTesto5.appendChild(text4);
    nodoTesto6.appendChild(text5);
    nodoTesto7.appendChild(text6);
    nodoTesto8.appendChild(text7);
    nodoTesto9.appendChild(text8);
    nodoTesto10.appendChild(text9); 
}catch ( e ) {
    alert("gestoreLoad " + e);
    }
}
window.onload = gestoreLoad;   