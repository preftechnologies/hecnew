<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Database connection
    $conn = new mysqli("localhost", "root", "", "hecwebsite");

    if ($conn->connect_error) {
        die("Database connection failed: " . $conn->connect_error);
    }

    // Get form data
    $name = trim($conn->real_escape_string($_POST['recruiterName']));
    $email = trim($conn->real_escape_string($_POST['recruiterEmail']));
    $company = trim($conn->real_escape_string($_POST['recruiterCompany']));
    $message = trim($conn->real_escape_string($_POST['recruiterMessage']));

    // ✅ Step 1: Check if Email Already Exists (Optimize Query)
    $stmt = $conn->prepare("SELECT email FROM recruiters WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        echo "Error: This email is already registered.";
        $stmt->close();
        $conn->close();
        exit(); // Stop execution immediately
    }
    $stmt->close(); // Close prepared statement

    // ✅ Step 2: Insert New Recruiter (Use Prepared Statement for Security)
    $stmt = $conn->prepare("INSERT INTO recruiters (name, email, company, message) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $email, $company, $message);

    if ($stmt->execute()) {
        echo "Thank you! Your request has been submitted.";

        // ✅ Step 3: Send Email using PHPMailer
        require __DIR__ . '/PHPMailer/src/PHPMailer.php';
        require __DIR__ . '/PHPMailer/src/SMTP.php';
        require __DIR__ . '/PHPMailer/src/Exception.php';

        $mail = new PHPMailer\PHPMailer\PHPMailer();
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'hecco.info@gmail.com'; // Your email
        $mail->Password = 'adswrhverkmdhfcb'; // Your App Password
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $mail->setFrom('hecco.info@gmail.com', 'HEC Website');
        $mail->addAddress('hecco.info@gmail.com');
        $mail->Subject = "New Recruiter Partner Request";
        $mail->Body = "A new recruiter has applied:\n\nName: $name\nEmail: $email\nCompany: $company\nMessage: $message";

        if ($mail->send()) {
            echo " Email sent successfully!";
        } else {
            echo " Email failed: " . $mail->ErrorInfo;
        }
    } else {
        echo "Error: " . $conn->error;
    }

    $stmt->close();
    $conn->close();
}
?>
