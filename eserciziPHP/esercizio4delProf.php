<?php

//data l'eta di una persona dire se può guidare il 125
$eta_Utente= rand(0, 90);
echo verificaIdoneita125($eta_Utente);

function verificaIdoneita125($dataUtente){
    $risultato="";
   if($dataUtente >= 16){
    $risultato="la tua età è idonea a guidare un 125";
   }else{
    $risultato="la tua età non è idonea a guidare un 125";
   }
return $risultato;
}





?>