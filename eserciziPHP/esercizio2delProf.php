<?php
$voti=[];
$dimensione=rand(12, 20);
for($i=0; $i<$dimensione; $i++){
$voti[$i]= rand(0, 15);
echo "elemento [".$i."] : ".$voti[$i]."<br>";
}

echo "<br>stampa fino a che non trova 15 o l'array finisce<br>";
for($i=0; $i<$dimensione&&$voti[$i]<15; $i++){
    
        echo "elemento [".$i."] : ".$voti[$i]."<br>";
   
}
 echo "<br>elementi finiti oppure l'elemento corrente è 15";
//i=0 echo i++ --> stampa 0 perchè prende i e poi lo incrementa
//i=0 echo ++i --> stampa 1 perchè incrementa i e poi lo prende


?>
