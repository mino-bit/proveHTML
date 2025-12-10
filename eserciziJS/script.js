console.log("ciao mondo!");
window.alert("Benvenuto");
console.log(window.alert("ciao toro"));

var voti=[3,7,8,5,6,9];
var somma=0;
for(var i=0;i<voti.length;i++){
    somma+=voti[i]; 
}
console.log("La somma dei voti è: " + somma); 
var media=somma/voti.length;
console.log("La media dei voti è: " + media);
var nome=window.prompt("Inserisci il tuo nome:");
var elementi=[1,2,3,4,5,6,7,8,9];
let i=0;
let trovato=false;
while(i<elementi.length && !trovato){
    if(numero == elementi[i]){
        trovato=true;
    }i++;
}

if(trovato){
    console.log("Numero trovato");
}

var array= [3,7,8,5,6,9];
var oggetto= {
nome: "davide",
cognome: "rossi",
eta: 25 
}
//forof
for(valore of array){
    console.log(valore);
}
//forin 
for(chiave in oggetto){
    console.log(oggetto[chiave]);
}