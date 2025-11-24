<?php

//data l'eta di una persona dire se può guidare il 125
$numeroUtente= rand(0, 90);
echo $numeroUtente."<br>";
echo verificaSeDivisibilePer3($numeroUtente);

function verificaSeDivisibilePer3($numero){
    $risultato="";
   if($numero % 3 == 0){
    $risultato="il numero è divisibile per 3";
   }else{
    $risultato="il numero non è divisibile per 3";
   }
return $risultato;
}
?>