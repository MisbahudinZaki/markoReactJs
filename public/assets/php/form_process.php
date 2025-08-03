<?php
$to = "hello@markoagency.com";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $firstName = htmlspecialchars(trim($_POST["first-name"] ?? ""));
    $lastName = htmlspecialchars(trim($_POST["last-name"] ?? ""));
    $email = filter_var(trim($_POST["email"] ?? ""), FILTER_SANITIZE_EMAIL);
    $subject = htmlspecialchars(trim($_POST["subject"] ?? ""));
    $message = htmlspecialchars(trim($_POST["message"] ?? ""));

    if (empty($firstName) || empty($lastName) || empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($message)) {
        http_response_code(400);
        echo "Please fill in all required fields correctly.";
        exit;
    }
    $email_subject = $subject ?: "New Contact Form Submission";
    $email_body = "You have received a new message from the contact form.\n\n" .
                  "Name: $firstName $lastName\n" .
                  "Email: $email\n\n" .
                  "Message:\n$message";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $email_subject, $email_body, $headers)) {
        http_response_code(200);
        echo "Message sent successfully.";
    } else {
        http_response_code(500);
        echo "Oops! Something went wrong. Unable to send email.";
    }
} else {
    http_response_code(403);
    echo "Forbidden request.";
}
?>
