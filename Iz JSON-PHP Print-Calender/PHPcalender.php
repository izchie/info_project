<?php
$year=2000;
$month=1;
$monthx=0;
$day=0;
$dayx=1;
$count=4;
$text ="";

for ($year=2000;$year<=2050;$year++) {
	        $text = "<h1>YEAR $year </h1>";
       		echo "$text";

for ($month=1;$month<=12;$month++) {
    	if($month==1||$month==3||$month==5||$month==7||$month==8||$month==10||$month==12){
        	$monthx=31;
        }
    	else if($month==4||$month==6||$month==9||$month==11){
        	$monthx=30;
        }
    	else if($month==2&&$count!=4){
        	$monthx=28;
          $count+=1;
        }
    	else if($month==2&&$count==4){
        	$monthx=29;
          $count=1;
        }
        for ($day=1;$day<=$monthx;$day++) {
        	if($dayx==1){
              $text = "$year/$month/$day Saturday<br>";
              $dayx+=1;
            }
        	else if($dayx==2){
            $text = "$year/$month/$day Sunday<br>";
              $dayx+=1;
            }
        	else if($dayx==3){
            $text = "$year/$month/$day Monday<br>";
              $dayx+=1;
            }
        	else if($dayx==4){
            $text = "$year/$month/$day Tuesday<br>";
              $dayx+=1;
            }
        	else if($dayx==5){
            $text = "$year/$month/$day Wednesday<br>";
              $dayx+=1;
            }
        	else if($dayx==6){
            $text = "$year/$month/$day Thursday<br>";
              $dayx+=1;
            }
        	else if($dayx==7){
            $text = "$year/$month/$day Sunday<br>";
              $dayx=1;
            }
            echo "$text";
            if($month==12&&$day==32){
    	        $text = "<br>";
          }
        }

	}
}
?>
