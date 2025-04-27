<?php
include '../db/db_connect.php';  // adjust your path if needed

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $contactName = $conn->real_escape_string($_POST['contactName']);
    $contactEmail = $conn->real_escape_string($_POST['contactEmail']);
    $contactMobile = $conn->real_escape_string($_POST['contactMobile']);
    $contactSubject = $conn->real_escape_string($_POST['contactSubject']);
    $contactMessage = $conn->real_escape_string($_POST['contactMessage']);

    // ✅ Correct SQL (matching your database table fields exactly!)
    $stmt = $conn->prepare("INSERT INTO contactus (contactName, contactEmail, contactMobile, contactSubject, contactMessage) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $contactName, $contactEmail, $contactMobile, $contactSubject, $contactMessage);

    if ($stmt->execute()) {
        echo "Your message has been sent successfully.";
    } else {
        echo "Failed to submit your message.";
    }

    $stmt->close();
}

$conn->close();
?>
