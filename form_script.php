<?php
$name=$_POST['name'];
$LastName=$P_OST['LastName'];
$email=$_POST['Email'];
$username=$_POST['Username'];
$password=$_POST['Password'];
$location=$_POST['Location'];
$Language=$_POST['Language'];
$data=$name.","$LastName.","$email.","$username.","$password.","$location.","$name.","$language;

$file="formdata.csv";
file_put_contents($file, $data . PHP_EOL, FILE_APPEND);
print "<h1 align="center">Thank You.</h1>";

?>
<html>
<head>
<title>
</title>
</head>
<body>
Thank you for submitting
<h1><a href="form.html"> Go back</a><h1>
</body>
</html>