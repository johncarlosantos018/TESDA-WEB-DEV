<?php 

	define('NAME', 'John');

	// $name = 'John';
	$age = 30;

	// $name = 'Carlo';
	define('NAME', 'Carlo');

?>

<!DOCTYPE html>
<html>
<head>
	<title>PHP Tutorials</title>
</head>
<body>

	<h1>User profile page</h1>

	<div><?php echo NAME; ?></div>
	<div><?php echo $age; ?></div>

</body>
</html>