<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $conn = new mysqli("localhost", "root", "", "hecwebsite");

    if ($conn->connect_error) {
        die("Database connection failed: " . $conn->connect_error);
    }

    // Ensure all fields exist before processing
    if (!isset($_POST['contactName'], $_POST['contactEmail'], $_POST['contactMobile'], $_POST['contactOffice'], $_POST['contactCountry'], $_POST['contactIntake'], $_POST['contactCourse'])) {
        echo "Error: Missing form data.";
        exit();
    }

    $name = trim($conn->real_escape_string($_POST['contactName']));
    $email = trim($conn->real_escape_string($_POST['contactEmail']));
    $mobile = trim($conn->real_escape_string($_POST['contactMobile']));
    $office = trim($conn->real_escape_string($_POST['contactOffice']));
    $country = trim($conn->real_escape_string($_POST['contactCountry']));
    $intake = trim($conn->real_escape_string($_POST['contactIntake']));
    $course = trim($conn->real_escape_string($_POST['contactCourse']));

    $stmt = $conn->prepare("INSERT INTO contactus (name, email, mobile, nearest_office, country_interest, upcoming_intake, course_interest) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssss", $name, $email, $mobile, $office, $country, $intake, $course);

    if ($stmt->execute()) {
        echo "Thank you! Your message has been received.";

        require __DIR__ . '/PHPMailer/src/PHPMailer.php';
        require __DIR__ . '/PHPMailer/src/SMTP.php';
        require __DIR__ . '/PHPMailer/src/Exception.php';

        $mail = new PHPMailer\PHPMailer\PHPMailer();
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'alikhanblog111@gmail.com';
        $mail->Password = 'qmqn bckn ybhs fmng';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $mail->setFrom('alikhanblog111@gmail.com', 'HEC Website');
        $mail->addAddress('alikhanblog111@gmail.com');
        $mail->Subject = "New Contact Form Submission";
        $mail->Body = "New Contact Request:\n\nName: $name\nEmail: $email\nMobile: $mobile\nOffice: $office\nCountry: $country\nIntake: $intake\nCourse: $course";

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
