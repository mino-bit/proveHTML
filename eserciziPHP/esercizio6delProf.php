<?php

echo number_to_euro(1257.14);
function number_to_euro($numero){
    return "€".number_format($numero, 2, ".", "");
}
?>