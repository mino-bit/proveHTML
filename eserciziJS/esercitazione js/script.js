//mostra un pop up che richiede un dato 
//window.prompt("inserisci numero");
//mostra un pop di conferma
//window.confirm("Sei sicuro");
//mostra un pop di messaggio
//window.alert("Benvenuto");
/*var stringa ="Ciao Mondo";//variabile globale
let stringa2="Ciao Mondo!";//variabile locale
const costante ="Ciao mondo!"; //questa è una costante

// una stringa è un array di caratteri
var stringa="insieme di caratteri";
console.log(stringa[2]);

//numeri interi
var intero = 1;
console.log(typeof intero);// --> mi restituisce il tipo della variabile dentro typeof

//numero decimale --> float
var decimale= 1.2;
console.log(typeof decimale);

//variabile booleana
var bool = true;
console.log(typeof bool);

//array
var array = [1,2,3,4,5,6,7,8,9,20];
console.log(typeof array);

//oggetto 
var object = {
    "nome": "Mario",
    "eta" : 30
}
console.log(typeof object);

//operatori aritmetici
var a = 1;
var b = 2;

//operatori matematici
console.log(a + b);
console.log(a * b);
console.log(a - b);
console.log(a / b);
console.log(a % b);

//operatori di addizione e sottrazione
console.log(a++);
console.log(++b);
console.log(a--);
console.log(--b);

//uguaglianza
console.log(a == 1); //uguaglianza
console.log(a == "1"); //uguaglianza per valore
console.log(a === "1"); //uguaglianza per valoree tipo

//confronti e booleani
console.log(a > b);
console.log(a <= b);
console.log(!(a < b));
console.log(a == b && b == 2);
console.log(a == b || b == 2);

//concatenazione

console.log(stringa + stringa2);

a=2;
b=2;
c="1";
var somma = a + c;

console.log(a+b);
console.log(a+c);//concatenezione 22
console.log(somma+b);//212
console.log(somma > 20 ); // somma viene convertito in numero --> true
console.log(somma.length); //lunghezza stringa
console.log(a+b+c); //41

var d;
console.log(d); //undefined --> indefinito
d=undefined;

var e =null;
console.log(e);//null

var oggetto={
    "nullo":null,
    "undefined": undefined
};
console.log(oggetto);
console.log(d == true);//falso
console.log(e == true);// falso
console.log(d == e); // entrambi falsi -> true
console.log(d === e); //null è diverso da undefined

var numero=window.prompt("inserisci un numero");
if(numero % 2 == 0){
    window.alert("numero pari");
}else{
    window.alert("numero dispari");
}

var mese = window.prompt("inserisci il numero del mese");
switch(mese){
    case "1":
    window.alert("Gennaio");
    break;
    case "2":
    window.alert("Febbraio");
    break;
    case "3":
    window.alert("Marzo");
    break;
    case "4":
    window.alert("Aprile");
    break;
    case "5":
    window.alert("Maggio");
    break;
    case "6":
    window.alert("Giugno");
    break;
    case "7":
    window.alert("Luglio");
    break;
    case "8":
    window.alert("Agosto");
    break;
    case "9":
    window.alert("Settembre");
    break;
    case "10":
    window.alert("Ottobre");
    break;
    case "11":
    window.alert("Novembre");
    break;
    case "12":
    window.alert("Dicembre");
    break;
    default: 
    window.alert("Mese non valido");
    break;
}

//Selettori
console.log(document.getElementById("elemento-1"));// trova elemento in base all'id
console.log(document.getElementsByClassName('elementi')); //ritorna un contenitore in cui ci sono tutti gli elementi
//  con quell'id ma se non ce n'è neanche uno ti da una lista vuota di elementi
console.log(document.getElementsByTagName('p'));
console.log(document.querySelector('.elementi'));
console.log(document.querySelectorAll('.elementi'));
*/
var lista = document.getElementById('genitore');
console.log(lista.getElementsByClassName('figlio'));

lista.innerHTML = "<li>1</li> <li class='figlio'>2</li> <li>3</li>";
console.log(lista.getElementsByClassName('figlio'));

lista.innerText = "<li>1</li> <li class='figlio'>2</li> <li>3</li>";
console.log(lista.getElementsByClassName('figlio'));