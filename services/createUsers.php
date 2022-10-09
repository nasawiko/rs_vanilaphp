<?php
require_once("config.php");
$namaB = $_REQUEST["nama_b"];
$namaD = $_REQUEST["nama_d"];
$type = $_REQUEST["type"];
$action = $_REQUEST["action"];

if ($namaB == "" || $namaD == "") {
	$resp = array("error" => "1", "errorMsg" => "Invalid Inputs", "msg" => "Invalid  Inputs");
	echo json_encode($resp);
	exit;
} else {
	$insert = "INSERT INTO datadiri VALUES ('','" . $namaB . "','" . $namaD . "','" . $type . "','" . $action . "')";
	mysqli_query($conn, $insert);
	$resp = array("success" => "1", "msg" => "User Information Added Successfully.");
	echo json_encode($resp);
	exit;
}
