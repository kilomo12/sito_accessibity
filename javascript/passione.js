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
   // il mio lavoro
   function cambiareBackground(){
   try{
    var elemento ;
    var elemento3;
    elemento = nodoPlaylist;
    elemento3 = nodoTabella;
        elemento.setAttribute("class","red");
        elemento3.setAttribute("class","tabella_background");
   } catch ( e ){
   alert("cambiareBackground" + e );
   }
   }function cambiareBackground2(){
    try{
     var elemento2 ;
     elemento2 = nodoBasket;
         elemento2.setAttribute("class","green");
    } catch ( e ){
    alert("cambiareBackground2" + e );
    }
    }
   function togliereBackground(){
    try{
     var elemento ;
     var elemento3;
     elemento = nodoPlaylist;
     elemento3 = nodoTabella;
         elemento.setAttribute("class","deuxieme");
         elemento3.setAttribute("class","premier li");
    } catch ( e ){
    alert("togliereBackground" + e );
    }
    }
    function togliereBackground2(){
        try{
         var elemento2 ;
         elemento2 = nodoBasket;
             elemento2.setAttribute("class","basketball");
        } catch ( e ){
        alert("togliereBackground2" + e );
        }
        }
        //
   var nodoTestoVisualizzato ;
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
   var nodoFoto11 ;
   var nodoFoto12 ;
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
   var nodoTesto11 ;
   var nodoTesto12 ;

   var nodoDue;
   var nodoUno;
   var nodoPlaylist;
   var nodoBasket;
   var nodoTabella;
   var nodoCantattore;

function gestoreLoad () {
    try {
    nodoUno = document.getElementById("1");
    nodoDue = document.getElementById("2");
    nodoPlaylist = document.getElementById("playlist");
    nodoBasket = document.getElementById("basket");
    nodoCantattore = document.getElementById("cantattore");
    nodoTabella = document.getElementById("tabella");
    nodoFoto1 = document.getElementById("imagina1");
    nodoFoto2 = document.getElementById("imagina2");
    nodoFoto3 = document.getElementById("imagina3");
    nodoFoto4 = document.getElementById("imagina4");
    nodoFoto5 = document.getElementById("imagina5");
    nodoFoto6 = document.getElementById("imagina6");
    nodoFoto7 = document.getElementById("imagina7");
    nodoFoto8 = document.getElementById("imagina8");
    nodoFoto9 = document.getElementById("imagina9");
    nodoFoto10 = document.getElementById("imagina10");
    nodoFoto11 = document.getElementById("imagina11");
    nodoFoto12 = document.getElementById("imagina12");
    nodoTesto1 = document.getElementById("test1");
    nodoTesto2 = document.getElementById("test2");
    nodoTesto3 = document.getElementById("test3");
    nodoTesto4 = document.getElementById("test4");
    nodoTesto5 = document.getElementById("test5");
    nodoTesto6 = document.getElementById("test6");
    nodoTesto7 = document.getElementById("test7");
    nodoTesto8 = document.getElementById("test8");
    nodoTesto9 = document.getElementById("test9");
    nodoTesto10 = document.getElementById("test10");
    nodoTesto11 = document.getElementById("test11");
    nodoTesto12 = document.getElementById("test12");
    // la funzione onmouseover è stata portata da una esperienza sul web e usata per obbietivi di presentazione 
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
    nodoFoto11.onmouseover = gestoreFoto;
    nodoFoto12.onmouseover = gestoreFoto;
    nodoUno.onclick = cambiareBackground ;
    nodoUno.ondblclick = togliereBackground;
    nodoDue.onclick = cambiareBackground2;
    nodoDue.ondblclick = togliereBackground2;
    tabellaIdFotoNodoTesto = {
     imagina1 : nodoTesto1,
     imagina2 : nodoTesto2,
     imagina3 : nodoTesto3,
     imagina4 : nodoTesto4,
     imagina5 : nodoTesto5,
     imagina6 : nodoTesto6,
     imagina7 : nodoTesto7,
     imagina8 : nodoTesto8,
     imagina9 : nodoTesto9,
     imagina10 : nodoTesto10,
     imagina11 : nodoTesto11,
     imagina12 : nodoTesto12
}
    nodoTestoVisualizzato = null;
} catch ( e ) {
    alert("gestoreLoad " + e);
}
}
window.onload = gestoreLoad;   