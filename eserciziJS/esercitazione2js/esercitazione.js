
for (let i = 0; i < 3; i++) {
    if (i==0){
        giorno= window.prompt("inserisci il giorno");
        
    }else{
         if (i==1){
        mese= window.prompt("inserisci il mese");
        
    }else{
      
        anno= window.prompt("inserisci l'anno");
    }
    }
    
  
}
let dataInserita = new Date(anno, mese - 1, giorno);

// Data di oggi (senza orario)
let oggi = new Date();
oggi.setHours(0, 0, 0, 0);

// Confronto
if (dataInserita < oggi) {
    console.log("La data inserita è precedente a oggi");
} else if (dataInserita > oggi) {
    console.log("La data inserita è successiva a oggi");
} else {
    console.log("La data inserita è oggi");
}

//finchè non ho 3 numeri continuo a ciclare