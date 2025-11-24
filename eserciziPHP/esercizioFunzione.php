<?php
$data="sunday 3 august 2025";
echo formattaData($data);
/*
$numero1=230;
$numero2=220;

$sottrazione=$numero1 - $numero2;
echo $sottrazione."<br>";
calcola_media($numero1,$numero2);*/
/**
 * calcola la media aritmetica dei valori
 * 
 * @param int[] numeri in input
 * 
 * @return float media dei numeri 
 */
/*function calcola_media($numero1, $numero2){
    $media = ($numero1 + $numero2) / 2;
    echo "media: " . $media;
}*/

//esercizio formattatore di date 
// sunday 3 august 2025
function formattaData($data){
$singolepartiData= explode(" ", $data);
$giorno_settimana = traduciGiornoSettimana($singolepartiData[0]);
$giornoMese = $singolepartiData[1];
$mese = traduciMese($singolepartiData[2]);
$anno = $singolepartiData[3];
return $giorno_settimana." ".$giornoMese." ".$mese." ".$anno;
}
function traduciGiornoSettimana($giornoSettimana){
    switch (strtolower($giornoSettimana)) {
    case "monday":
        return "Lunedì";
    case "tuesday":
        return "Martedì";
    case "wednesday":
        return "Mercoledì";
    case "thursday":
        return "Giovedì";
    case "friday":
        return "Venerdì";
    case "Saturday":
        return "Sabato";
    case "sunday":
        return "Domenica";
}
}
function traduciMese($mese){
    switch (strtolower($mese)) {
    case "january":
        return "Gennaio";
    case "february":
        return "Febbraio";
    case "march":
        return "Marzo";
    case "april":
        return "Aprile";
    case "may":
        return "Maggio";
    case "june":
        return "Giugno";
    case "july":
        return "Luglio";
    case "august":
        return "Agosto";
    case "september":
        return "Settembre";
    case "october":
        return "Ottobre";
    case "november":
        return "Novembre";
    case "december":
        return "Dicembre";

}

}




?>