/* questa funzione è stata presa dalla dispensa di Programmazione in JavaScript di
Vincenzo Ambriola con qualche modificazione per un uso adeguato al progetto */
function gestoreFoto () {
    try {
     if(nodoTestoVisualizzato){
        nodoTestoVisualizzato.setAttribute("class", "desc");
     }
     var idFoto = this.id;
     var nodoTesto = tabellaIdFotoNodoTesto[idFoto];                                         
     nodoTesto.setAttribute("class", "desc_f");
     nodoTestoVisualizzato = nodoTesto ;
    } catch ( e ) {
    alert("gestoreFoto " + e);
    }
   }
   var nodoTestoVisualizzato ;
   var nodoFoto1 ;
   var nodoFoto2 ;
   var nodoFoto3 ; 
   var nodoTesto1 ;
   var nodoTesto2 ;
   var nodoTesto3 ;
   function gestoreLoad () {
    try {
    nodoFoto1 = document.getElementById("imagina1");
    nodoFoto2 = document.getElementById("imagina2");
    nodoFoto3 = document.getElementById("imagina3");
    nodoTesto1 = document.getElementById("test1");
    nodoTesto2 = document.getElementById("test2");
    nodoTesto3 = document.getElementById("test3");
    // la funzione onmouseover è stata portata da una esperienza sul web e usata per obbietivi di presentazione 
    nodoFoto1.onmouseover = gestoreFoto;
    nodoFoto2.onmouseover = gestoreFoto;
    nodoFoto3.onmouseover = gestoreFoto;
    tabellaIdFotoNodoTesto = {
     imagina1 : nodoTesto1,
     imagina2 : nodoTesto2,
     imagina3 : nodoTesto3
    }
    nodoTestoVisualizzato = null;
} catch ( e ) {
    alert("gestoreLoad " + e);
    }
}
window.onload = gestoreLoad;   