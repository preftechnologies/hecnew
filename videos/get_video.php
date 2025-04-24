<?php
include '../db/db_connect.php'; // path depends on your structure

$result = $conn->query("SELECT * FROM videos ORDER BY uploaded_at DESC");
$videos = [];

while ($row = $result->fetch_assoc()) {
  $videos[] = $row;
}
echo json_encode($videos);
?>
