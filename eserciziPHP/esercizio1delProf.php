<?php
$voti=[];

for($i=0; $i<10; $i++){
$voti[$i]= rand(0, 100);
echo "elemento [".$i."] : ".$voti[$i]."<br>";
}

/*
$max=0;
for($i=0; $i<count($voti); $i++){
if($voti[$i]>$max){
    $max=$voti[$i];
}
}
echo "<br>Il numero più alto è: ".$max."<br>";
*/
//metodo alternativo senza ricerca singolare
sort($voti);
echo "<br> array ordinato: <br>";
for($i=0; $i<10; $i++){
echo "elemento [".$i."] : ".$voti[$i]."<br>";
}
echo "<br>Il numero più alto è: ".$voti[9]."<br>";
?>