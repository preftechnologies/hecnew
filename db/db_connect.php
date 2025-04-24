<?php
// Database credentials
$host = "localhost";       // or "127.0.0.1"
$user = "root";            // default for XAMPP
$password = "";            // default is blank
$database = "hecwebsite";  // your database name

// Create connection
$conn = new mysqli($host, $user, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}

// Optionally: set charset
$conn->set_charset("utf8");
?>
