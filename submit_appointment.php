<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Correct the path to PHPMailer
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Database Connection
$host = "localhost";
$username = "root";  // Your MySQL username
$password = "";  // Your MySQL password
$dbname = "hecwebsite";  // Your database name

$conn = new mysqli($host, $username, $password, $dbname);

// Check Connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get Form Data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Insert Data into Database
$sql = "INSERT INTO appointments (name, email, phone, message) VALUES ('$name', '$email', '$phone', '$message')";

if ($conn->query($sql) === TRUE) {
    // Send Email using PHPMailer
    $mail = new PHPMailer(true);
    try {
        // SMTP Configuration
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'hecco.info@gmail.com';  // Your Gmail
        $mail->Password = 'adswrhverkmdhfcb';  // Use App Password (not your normal password)
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Email Settings
        $mail->setFrom('hecco.info@gmail.com', 'Your Website');
        $mail->addAddress('hecco.info@gmail.com');
        $mail->Subject = "New Appointment Booking";
        $mail->Body = "You have a new appointment request:\n\nName: $name\nEmail: $email\nPhone: $phone\nMessage: $message";

        // Send Email
        $mail->send();
        echo "Appointment booked successfully! Confirmation email sent.";
    } catch (Exception $e) {
        echo "Appointment booked, but email could not be sent. Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
