<?php 
$conn = mysqli_connect('localhost','root','');
if(!$conn)   {
    die('could not connect to mysql: ' . mysqli_error());
}

mysqli_select_db($conn, 'angular1') or die ('could not select database.');
