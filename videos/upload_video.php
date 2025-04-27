<?php
$host = 'localhost';
$user = 'root'; // or your DB username
$pass = '';
$db   = 'hecwebsite';

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Correct folder
$uploadDir = 'videos/uploads/';
if (!file_exists($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = $conn->real_escape_string($_POST['title']);
    $description = $conn->real_escape_string($_POST['description']);

    if (isset($_FILES['video']) && $_FILES['video']['error'] === 0) {
        $videoTmpPath = $_FILES['video']['tmp_name'];
        $videoName = time() . '_' . basename($_FILES['video']['name']);
        $videoPath = $uploadDir . $videoName;

        if (move_uploaded_file($videoTmpPath, $videoPath)) {
            $stmt = $conn->prepare("INSERT INTO videos (title, description, video_url) VALUES (?, ?, ?)");
            $videoURL = $videoPath; // Save correct path
            $stmt->bind_param("sss", $title, $description, $videoURL);

            if ($stmt->execute()) {
                echo "Video uploaded successfully.";
            } else {
                echo "Database insert failed.";
            }
            $stmt->close();
        } else {
            echo "Failed to move uploaded file.";
        }
    } else {
        echo "No video uploaded.";
    }
}

$conn->close();
?>
