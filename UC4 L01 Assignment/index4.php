<?php 

	// indexed arrays

	$peopleOne = ['gemma', 'cacay', 'nog'];
	//echo $peopleOne[1];

	$peopleTwo = array('colleen', 'yesha');
	//echo $peopleTwo[1];

	$ages = [20, 30, 40, 50];

	//print_r($ages);

	$ages[1] = 25;
	//print_r($ages);

	$ages[] = 10;
	array_push($ages, 70);
	//print_r($ages);

	//echo array_pop($ages);
	//print_r($ages);

	//echo count($ages);

	$peopleThree = array_merge($peopleOne, $peopleTwo);
	//print_r($peopleThree);

	// associative array (key & value pairs)

	$ninjasOne = ['dave' => 'black', 'carlo' => 'orange', 'john' => 'brown'];
	//echo $ninjasOne['mario'];
	//print_r($ninjasOne);

	$ninjasTwo = array('ghem' => 'green', 'angel' => 'yellow');
	//print_r($ninjasTwo);

	$ninjasTwo['toad'] = 'pink';

	//echo count($ninjasTwo);

	$ninjasThree = array_merge($ninjasOne, $ninjasTwo);
	print_r($ninjasThree);



?>

<!DOCTYPE html>
<html>
<head>
	<title>PHP Tutorials</title>
</head>
<body>

	<p></p>

</body>
</html>