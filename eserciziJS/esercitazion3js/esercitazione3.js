
for (let i = 0; i < 3; i++) {
    if (i==0){
        giorno= window.prompt("inserisci il giorno");
        
    }else{
         if (i==1){
        mese= window.prompt("inserisci il mese");
            switch(mese){
                case "1":
                    mese="Gennaio";
                break;
                case "2":
                    mese="Febbraio";
                break;
                case "3":
                    mese="Marzo";
                break;
                case "4":
                    mese="Aprile";
                break;
                case "5":
                    mese="Maggio";
                break;
                case "6":
                    mese="Giugno";
                break;
                case "7":
                    mese="Luglio";
                break;
                case "8":
                    mese="Agosto";
                break;
                case "9":
                    mese="Settembre";
                break;
                case "10":
                    mese="Ottobre";
                break;
                case "11":
                    mese="Novembre";
                break;
                case "12":
                    mese="Dicembre";
                break;

            }               
                }else{
                      anno= window.prompt("inserisci l'anno");
                    }
         }
        }
let dataInserita = new Date(giorno+" / "+mese+" / "+anno);
let giornoSettimana = dataInserita.getDay();
switch(giornoSettimana){
    case 0:
    console.log("Lunedi' " + giorno + " " + mese+ " " + anno);
    break;
    case 1:
    console.log("Martedi' " + giorno + " " + mese+ " " + anno);
    break;
    case 2:
    console.log("Mercoledi' " + giorno + " " + mese+ " " + anno);
    break;
    case 3:
    console.log("Giovedi' " + giorno + " " + mese+ " " + anno);
    break;
    case 4:
    console.log("Venerdi' " + giorno + " " + mese+ " " + anno);
    break;
    case 5:
    console.log("Sabato " + giorno + " " + mese+ " " + anno);
    break;
    case 6:
    console.log("Domenica " + giorno + " " + mese+ " " + anno);
    break;

}
