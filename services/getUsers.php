<?php
require_once("config.php");
$userId = $_REQUEST["id"];
if (!empty($userId)) {
	$select = "SELECT * FROM datadiri WHERE id=" . $userId;
	$rs = mysqli_query($conn, $select);
	$rowcount = mysqli_num_rows($rs);
	if ($rowcount == 0) {
		$resp = array("error" => "5", "errorMsg" => "User Not Found");
		echo json_encode($resp);
	} else {
		$list = mysqli_fetch_assoc($rs);
		$data = array('id' => $list['id'], 'nama_b' => $list['nama_b'], 'nama_d' => $list['nama_d'], 'type' => $list['type'], 'action' => $list['action']);
		$resp = array("success" => "5", "rowCount" => $rowcount, "userList" => $data);
		echo json_encode($resp);
	}
} else {
	$resp = array("error" => "5", "errorMsg" => "Invalid Inputs");
	echo json_encode($resp);
}
exit;
