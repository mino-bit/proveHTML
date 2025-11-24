<?php
$voti=[];
$somma=0;
$media=0;
$numeroDaCercare=44;
$numeroTrovato=0;
for($i=0; $i<10; $i++){
$voti[$i]= rand(0, 100);
echo "elemento [".$i."] : ".$voti[$i]."<br>";
}

for($i=0; $i<count($voti); $i++){
$somma=$somma+$voti[$i];
//si può scrivere $somma.= $voti[$i];
echo "step ".$i.": ".$somma."<br>";
if($voti[$i]==$numeroDaCercare){
    $numeroTrovato++;
}
}
$media=$somma/count($voti);
echo "<br>La media è: ".$media."<br>";
if($numeroTrovato>0){
   echo "<br>Il 44 è presente<br>";
}else{
    echo "<br>Il 44 non è presente<br>";
}
?>