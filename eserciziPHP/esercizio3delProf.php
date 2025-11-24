<?php

$persone = [
    ["nome" => "giovanni", "eta" => 13],
    ["nome" => "andrea",  "eta" => 63],
    ["nome" => "antonio", "eta" => 44],
    ["nome" => "ettore",  "eta" => 89],
    ["nome" => "davide",  "eta" => 33],
    ["nome" => "manuel",  "eta" => 14],
    ["nome" => "marco",   "eta" => 1],
    ["nome" => "denzel",  "eta" => 31],
    ["nome" => "benten",  "eta" => 24],
];

echo "<h3>Persone maggiorenni:</h3>";

$sommaEta = 0;
$conteggio = 0;
$contaMaggiorenni = 0;
foreach ($persone as $persona) //per ogni elemento contenuto in persone prendo una persona il concetto è array --> elemento
{

    // somma per la media
    $sommaEta += $persona["eta"];
    $conteggio++;

    // persone maggiorenni
    if ($persona["eta"] >= 18) {
        echo $persona["nome"] . " (" . $persona["eta"] . " anni)<br>";
        $contaMaggiorenni++;
    }
}
echo "<br><strong>I maggiorenni sono: </strong>".$contaMaggiorenni;
$media = $sommaEta / $conteggio;

echo "<br><strong>Età media:</strong> " . $media;
