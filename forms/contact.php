<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form input data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $subject = htmlspecialchars(trim($_POST['subject']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate the input data
    if (!empty($name) && !empty($email) && !empty($subject) && !empty($message) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Define the recipient email address
        $to = "radnationworldwide@gmail.com"; // Replace with your actual email address

        // Define the email subject
        $email_subject = "New Contact Form Submission: " . $subject;

        // Create the email headers
        $headers = "From: " . $name . " <" . $email . ">\r\n";
        $headers .= "Reply-To: " . $email . "\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

        // Compose the email body
        $body = "<html><body>";
        $body .= "<h2>Contact Form Submission</h2>";
        $body .= "<p><strong>Name:</strong> " . $name . "</p>";
        $body .= "<p><strong>Email:</strong> " . $email . "</p>";
        $body .= "<p><strong>Subject:</strong> " . $subject . "</p>";
        $body .= "<p><strong>Message:</strong><br>" . nl2br($message) . "</p>";
        $body .= "</body></html>";

        // Send the email
        if (mail($to, $email_subject, $body, $headers)) {
            // Email sent successfully
            echo "Your message has been sent. Thank you!";
        } else {
            // Email sending failed
            echo "There was an error sending your message. Please try again later.";
        }
    } else {
        // Invalid input
        echo "Please fill in all fields correctly.";
    }
} else {
    // If not a POST request, show a 403 Forbidden error
    http_response_code(403);
    echo "Forbidden";
}
?>