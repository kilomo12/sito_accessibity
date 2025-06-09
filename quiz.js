/* questa funzione è stata presa dalla dispensa di Programmazione in JavaScript di
Vincenzo Ambriola con qualche modificazione per un uso adeguato al progetto */
var nodoNumeroDomanda;
var nodoTestoDomanda;
var nodoRisposta0;
var nodoTestoRisposta0;
var nodoRisposta1;
var nodoTestoRisposta1;
var nodoRisposta2;
var nodoTestoRisposta2;
var nodoAvanti;
var nodoRisultato;
var nodoInizia;
var numeroDomande;
var numeroDomandaCorrente;
var risposteDate;
var nodoCongratulazioni;

function nuovoQuiz () {
    numeroDomandaCorrente = 0;
    aggiornaDomanda(numeroDomandaCorrente);
    scriviMessaggio(nodoRisultato, "");
    risposteDate = [];
   }
   function aggiornaDomanda (i) {
    scriviMessaggio(nodoNumeroDomanda,
    "Domanda " + (i + 1) + " di " + numeroDomande);
    var parte = quiz[i];
    scriviMessaggio(nodoTestoDomanda, parte.domanda)
    scriviMessaggio(nodoTestoRisposta0, parte.risposte[0]);
    scriviMessaggio(nodoTestoRisposta1, parte.risposte[1]);
    scriviMessaggio(nodoTestoRisposta2, parte.risposte[2]);
    nodoRisposta0.checked = false;
    nodoRisposta1.checked = false;
    nodoRisposta2.checked = false;
   }
   var quiz = [
    { // domanda 1
    domanda : "In che lingua parlo nel mio secondo video ?",
    risposte : [
    "Inglese",
    "Spagnolo",
    "Francese"
    ],
    rispostaEsatta : 2
    },
    { // domanda 2
        domanda : "Quanti sono i miei giocatori preferiti in NBA ?",
        risposte : [
        "Cinque",
        "Tre",
        "Tredici"
        ],
        rispostaEsatta : 1
        },
        { // domanda 3
        domanda : "Secondo te chi ha il merito di essere il mio cantante preferito nella mia playlist ?",
        risposte : [
        "Ultimo",
        "Justin beiber",
        "Dadju"
        ],
        rispostaEsatta : 1
        },
        { // domanda 4
        domanda : "Indovina qual'è la canzone di Ultimo che mi piace di più",
        risposte : [
        "Ti dedico il silenzio",
        "I tuoi particolari",
        "Piccola stella"
        ],
        rispostaEsatta : 0
        },
        { // domanda 5
            domanda : "Quante città ci sono nel mio paese e qual'è la capitale Politica ?",
            risposte : [
            "Dodici, Douala",
            "Dieci, Yaoundé",
            "Undici, Yaoundé 6"
            ],
            rispostaEsatta : 1
        },
        { // domanda 6
            domanda : "Qual'è il nome della prima imagina che si vede nella regione dell' Extreme Nord ?",
            risposte : [
            "Montagna Pietro",
            "Montagna Boboyo",
            "Montagna Kapsiki Nord Cameroun"
            ],
            rispostaEsatta : 2
        },
        { // domanda 7
            domanda : "Qual'è il nome del mio sito web ?",
            risposte : [
            "Il mio Mondo",
            "Viaggiare",
            "Travel"
            ],
            rispostaEsatta : 0
        },
        { // domanda 8
            domanda : "Qual'è la lingua che parlo ad almeno 50% per giorno ?",
            risposte : [
            "Inglese",
            "Italiano",
            "Francese"
            ],
            rispostaEsatta : 1
        },
        { // domanda 9
            domanda : "Secondo te ho già giocato al calcio ?",
            risposte : [
            "si",
            "no",
            "un pocchino"
            ],
            rispostaEsatta : 0
        },
        { // domanda 10
            domanda : "Secondo te in Quanto tempo ho realizzato questo progetto",
            risposte : [
            "Due settimane",
            "Un mese in più",
            "Meno di un mese"
            ],
            rispostaEsatta : 2
        }
       ];
       function scriviMessaggio (nodo, messaggio) {
        var nodoTesto = document.createTextNode(messaggio);
        if (nodo.childNodes.length == 0) {
        nodo.appendChild(nodoTesto);
        } else {
        nodo.replaceChild(nodoTesto, nodo.firstChild);
        }
       }
       function gestoreClickAvanti () {
        try {
        if (numeroDomandaCorrente == numeroDomande) {
        return;
        }
        if (nodoRisposta0.checked) {
        risposteDate[numeroDomandaCorrente] = 0;
        } else if (nodoRisposta1.checked) {
        risposteDate[numeroDomandaCorrente] = 1;
        } else if (nodoRisposta2.checked) {
        risposteDate[numeroDomandaCorrente] = 2;
        } else {
        return;
        }
        numeroDomandaCorrente++;
        if (numeroDomandaCorrente == numeroDomande) {
        var esito = calcolaEsito();
        var s;
        if (esito == 1) {
        s = "1 risposta esatta su " + numeroDomande
        nodoRisultato.setAttribute("class","colore1");
        }
        else if (esito == 2) {
            s = "2 risposte esatta su " + numeroDomande
            nodoRisultato.setAttribute("class","colore1");
        }
        else if (esito == 3) {
            s = "3 risposte esatta su " + numeroDomande
            nodoRisultato.setAttribute("class","colore1");
        }
        else if (esito == 4) {
            s = "4 risposte esatta su " + numeroDomande
            nodoRisultato.setAttribute("class","colore1");
        }
        else {
        s = esito + " risposte esatte su " + numeroDomande;
        nodoRisultato.setAttribute("class", "colore2");
        }
        scriviMessaggio(nodoRisultato, s);
        scriviMessaggio(nodoCongratulazioni, 'Grazie per aver completato il mio test...');
        } else {
        aggiornaDomanda(numeroDomandaCorrente);
        }
        } catch ( e ) {
        alert("gestoreClickAvanti " + e);
        }
       }
       function calcolaEsito () {
        var numeroRisposteEsatte = 0;
        for (var i = 0; i < quiz.length; i++) {
        var parte = quiz[i];
        if (parte.rispostaEsatta == risposteDate[i]) {
        numeroRisposteEsatte++;
        }
        }
        return numeroRisposteEsatte;
       }
       function gestoreClickInizia () {
        try {
        nuovoQuiz();
        scriviMessaggio(nodoCongratulazioni, "");
        } catch ( e ) {
        alert("gestoreClickInizia " + e);
        }
       }
function gestoreLoad () {
 try {
 nodoNumeroDomanda = document.getElementById("numeroDomanda");
 nodoTestoDomanda = document.getElementById("testoDomanda");
 nodoRisposta0 = document.getElementById("risposta0");
 nodoTestoRisposta0 = document.getElementById("testoRisposta0");
 nodoRisposta1 = document.getElementById("risposta1");
 nodoTestoRisposta1 = document.getElementById("testoRisposta1");
 nodoRisposta2 = document.getElementById("risposta2");
 nodoTestoRisposta2 = document.getElementById("testoRisposta2");
 nodoAvanti = document.getElementById("avanti");
 nodoRisultato = document.getElementById("risultato");
 nodoInizia = document.getElementById("inizia");
 nodoCongratulazioni = document.getElementById("congratulazioni");
 nodoAvanti.onclick = gestoreClickAvanti;
 nodoInizia.onclick = gestoreClickInizia;
 numeroDomande = quiz.length;
 nuovoQuiz();
 } catch ( e ) {
 alert("gestoreLoad " + e);
 }
}
window.onload = gestoreLoad;
