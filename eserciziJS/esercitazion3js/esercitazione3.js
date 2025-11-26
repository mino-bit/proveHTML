
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
let dataInserita = new Date(giorno+" / "+mese+" / "+anno);
let giornoSettimana = dataInserita.getDay();
switch(giornoSettimana){
    case 1:
    console.log("Lunedì " + giorno + " " + mese);
    break;
    case 2:
    console.log("Martedì " + giorno + " " + mese);
    break;
    case 3:
    console.log("Mercoledì " + giorno + " " + mese);
    break;
    case 4:
    console.log("Giovedì " + giorno + " " + mese);
    break;
    case 5:
    console.log("Venerdì " + giorno + " " + mese);
    break;
    case 6:
    console.log("Sabato " + giorno + " " + mese);
    break;
    case 7:
    console.log("Domenica " + giorno + " " + mese);
    break;

}
