<?php
require_once("config.php");

$select = "SELECT * FROM datadiri";
$rs     = mysqli_query($conn, $select);
$rowcount = mysqli_num_rows($rs);
while ($list = mysqli_fetch_assoc($rs)) {
    $data[] = array('id' => $list['id'], 'nama_b' => $list['nama_b'], 'nama_d' => $list['nama_d'], 'type' => $list['type'], 'action' => $list['action']);
}
$resp = array("data" => array("success" => "1", "rowCount" => $rowcount, "data" => $data));
$resp = array("success" => "1", "rowCount" => $rowcount, "userList" => $data);
echo json_encode($resp);
exit;
