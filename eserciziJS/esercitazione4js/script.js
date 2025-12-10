function esercizio1() {
numeroScelto=Math.floor(Math.random() * 10) + 1;

let inputUtente = prompt("Inserisci il tuo numero:");

let numero = parseInt(inputUtente); // Converte la stringa in un intero
while(numero!= numeroScelto){
    inputUtente = prompt("Numero errato, riprova:");
    numero = parseInt(inputUtente);
}}

function esercizio2() {
let inputUtente = prompt("Inserisci il tuo numero:");

let numero = parseInt(inputUtente); // Converte la stringa in un intero
let fattoriale = 1;
for (let i = numero; i !=0; i--) {
fattoriale=fattoriale*i;
}
alert(fattoriale);
}

function esercizio3() {
    var oggetto= {
    nome: "",
    cognome: "",
    matricola: 0,
    mediaVoti: 0
    }   
    let nome = prompt("Inserisci il tuo nome:");
    oggetto.nome = nome;
    let cognome = prompt("Inserisci il tuo cognome:");
    oggetto.cognome = cognome;  
    let numeroMatricola = prompt("Inserisci il tuo numero di matricola:");
    oggetto.matricola = numeroMatricola;
    let voti = prompt("Inserisci i voti separati da virgola:");
    arrayVoti = voti.split(",").map(Number);
    let media=0;
    let somma=0;
    for (let i = 0; i < arrayVoti.length; i++) {
        somma = somma + arrayVoti[i];
       
    }
mediaVoti = Math.trunc(somma / arrayVoti.length * 100) / 100 ;
oggetto.mediaVoti = mediaVoti;
alert("nome: " + nome + "\ncognome: " + cognome + "\nmatricola: " + numeroMatricola + "\nmedia voti: " + mediaVoti);
}
