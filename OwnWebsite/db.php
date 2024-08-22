<?php
$servername = "localhost";
$username = "root"; // default XAMPP/WAMP/MAMP username
$password = "";     // default XAMPP/WAMP/MAMP password
$dbname = "task_manager";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>