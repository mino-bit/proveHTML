<?php
// This switch statement:
// in base al voto stampi giudizio
//da 1 a 5 insufficiente 6 sufficiente 7 e 8 buono 9 oyyimo 10 eccellente

$voto=7;
switch ($voto) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        echo "insufficiente";
    break;
    case 6:
        echo "sufficiente";
    break;
    case 7:
    case 8:
        echo "buono";
    break;
    case 9:
        echo "ottimo";
    break;
    case 10:
        echo "eccellente";
    break;
}
//in questo modo si gestiscono le casistiche che vanno bene per piu occasioni.
//cioè insufficiente è valido per 1 2 3 4 e 5 essendo che lo switch senza break 
// non si ferma al caso che corrisponde ma esegue anche le istruzioni sotto questo è il metodo per gestire
//queste casistiche
?>